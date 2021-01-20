import { connectToDatabase, disconnectFromDatabase, getScores } from '../database.js'

connectToDatabase();

const scores = await getScores()
console.log(scores)

disconnectFromDatabase()