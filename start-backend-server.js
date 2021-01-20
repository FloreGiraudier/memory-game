import { connectToDatabase, getBestScores, saveScore } from "./backend/database.js"
import { startServer, readRequestBody } from "@jsenv/server"

connectToDatabase()

startServer({
    port: 8003,
    sendServerInternalErrorDetails: true,
    accessControlAllowRequestOrigin: true,
    accessControlAllowRequestMethod: true,
    accessControlAllowRequestHeaders: true,
    accessControlAllowCredentials: true,
    requestToResponse: async (request) => {
        if (request.ressource === "/scoreboard" && request.method === "GET") {
            const results = await getBestScores()
            const body = JSON.stringify(results)
            return {
                status: 200,
                headers: {
                    "content-type": "application/json",
                    "content-length": Buffer.byteLength(body)
                    // Buffer.byteLength: calculate the actual size of the body in bytes
                    // more accurate than .length, for ex the "à" char will take several bytes to be stores, where it will count as 1 char
                },
                body
            }
        }
        if (request.ressource === "/scoreboard" && request.method === "POST") {
            const requestBody = await readRequestBody(request, { as: "json" })
            saveScore(requestBody)
            return {
                status: 204
            }
        }
    }
})
