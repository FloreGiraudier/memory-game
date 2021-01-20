import { connectToDatabase, disconnectFromDatabase, getBestScores } from "../database.js"

connectToDatabase()

const bestScores = await getBestScores()
console.log(bestScores)

disconnectFromDatabase()
