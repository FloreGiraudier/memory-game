import { connectToDatabase, disconnectFromDatabase, saveScore } from "../database.js"

connectToDatabase()

saveScore(60000)
saveScore(110000)
saveScore(84000)
saveScore(48000)
saveScore(67200)

disconnectFromDatabase()
