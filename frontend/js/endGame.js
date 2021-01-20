import { createTable } from "./createTable.js"
import { startGame } from "./startGame.js"
import { disableClicks } from "./game.js"
import { CARDS } from "./cardsDeck.js"
import { getNumberOfCardsWon, setGameStatus } from "./gameState.js"
import { saveScore } from "./score.js"
import { millisToMinutesAndSeconds } from "./progressBar.js"

export const gameLost = () => {
    setGameStatus("lost")
    disableClicks()
    showElement(".gameLostContent")
    registerRestartOnclick()
}

export const isGameWon = () => {
    return CARDS.length === getNumberOfCardsWon()
}

export const gameWon = (time) => {
    setGameStatus("won")
    disableClicks()
    showElement(".gameWonContent")
    registerRestartOnclick()

    // save score in database
    saveScore(time)

    // set the time elapsed in the time DOM element
    const timeElem = document.querySelector(".time")
    if (timeElem) {
        // make sure the element exists in the DOM
        timeElem.innerText = `Votre temps = ${millisToMinutesAndSeconds(time)}`
    }
}

const registerRestartOnclick = () => {
    const restartButtons = Array.from(document.querySelectorAll(".restartButton"))
    if (restartButtons) {
        restartButtons.forEach((button) => {
            button.addEventListener("click", () => {
                hideElement(".gameWonContent")
                hideElement(".gameLostContent")

                createTable()
                startGame()
            })
        })
    }
}

const hideElement = (querySelector) => {
    const element = document.querySelector(querySelector)
    if (element) {
        element.classList.add("hidden")
    }
}

const showElement = (querySelector) => {
    const element = document.querySelector(querySelector)
    if (element) {
        element.classList.remove("hidden")
    }
}
