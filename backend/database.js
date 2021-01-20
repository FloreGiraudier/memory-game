import { createRequire } from "module"

// the require below can be used to load code written in commonJs
// we will use it to require mysql dependency
const require = createRequire(import.meta.url)

let connection

export const connectToDatabase = () => {
    const mysql = require("mysql")
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root"
    })

    connection.connect()

    connection.query(`CREATE DATABASE IF NOT EXISTS memory;`, (error) => {
        if (error) throw error
    })

    connection.query(`USE memory`, (error) => {
        if (error) throw error
    })

    connection.query(`CREATE TABLE IF NOT EXISTS scores (time MEDIUMINT);`, (error) => {
        if (error) throw error
    })
}

export const disconnectFromDatabase = () => {
    connection.end()
}

export const saveScore = (value) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO scores VALUES (?)", [value], (error, results) => {
            if (error) reject(error)
            else resolve(results)
        })
    })
}

export const clearScores = () => {
    return new Promise((resolve, reject) => {
        connection.query("TRUNCATE TABLE scores", (error, results) => {
            if (error) reject(error)
            else resolve(results)
        })
    })
}

export const getScores = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT time FROM scores", (error, results) => {
            if (error) reject(error)
            else resolve(results)
        })
    })
}

export const getBestScores = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT time FROM scores ORDER BY time LIMIT 3", (error, results) => {
            if (error) reject(error)
            else resolve(results)
        })
    })
}
