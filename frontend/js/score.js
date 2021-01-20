import { millisToMinutesAndSeconds } from "./progressBar.js"

// the backend server is at the same url than the current one, but on a different port
const serverOrigin = new URL(window.location)
serverOrigin.port = 8003

export const saveScore = async (score) => {
    try {
        await window.fetch(`${serverOrigin}scoreboard`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(score)
        })
        displayScoreBoard()
    } catch (error) {
        console.error(error)
    }
}

const getScoreBoard = async () => {
    try {
        const response = await window.fetch(`${serverOrigin}scoreboard`, {
            method: "GET"
        })
        const scores = await response.json()
        return scores
    } catch (error) {
        console.error(error)
    }
}

export const displayScoreBoard = async () => {
    const scoreboard = await getScoreBoard()

    // Create the HTML content for our scoreboard
    let scoreboardHtml = ""

    if (scoreboard && scoreboard.length > 0) {
        scoreboardHtml += "<ul>"
        scoreboard.forEach((score, index) => {
            scoreboardHtml += `<li><span>${index + 1}</span>${millisToMinutesAndSeconds(
                score.time
            )}</li>`
        })
        scoreboardHtml += "</ul>"
    } else {
        scoreboardHtml += "No score recorded yet"
    }

    // get the scoreboard DOM element, and set the HTML content inside
    const scoreboardElem = document.querySelector("#scoresTable")
    if (scoreboardElem) {
        // make sure the element exists in the DOM
        scoreboardElem.innerHTML = scoreboardHtml
    }
}
