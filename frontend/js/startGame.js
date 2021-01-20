import { registerClicks } from "./game.js"
import { startProgressBar } from "./progressBar.js"
import { initGameState } from "./gameState.js"

export const startGame = () => {
    initGameState()
    registerClicks()
    startProgressBar()
}

export const registerStartButtonClick = () => {
    const startButton = document.querySelector("#startButton")
    if (startButton) {
        // check if the element is inside the DOM
        startButton.addEventListener("click", () => {
            startButton.classList.add("hidden")
            startGame()
        })
    }
}
