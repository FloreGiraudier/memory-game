import { gameLost, isGameWon, gameWon } from "./endGame.js"

export const startProgressBar = () => {
    const totalTimeInMinutes = 2
    const barStatusElem = document.querySelector("#progressBar")

    // make sure the element exists in the DOM
    if (barStatusElem) {
        let timer = 0
        const startTime = new Date()
        const endTime = new Date()
        endTime.setMinutes(endTime.getMinutes() + totalTimeInMinutes)
        const max = endTime - startTime
        barStatusElem.max = max

        const update = 1000

        const setValue = () => {
            const currentTime = new Date().getTime()
            let elapsedTime = currentTime - startTime

            if (isGameWon()) {
                window.clearInterval(timer)
                gameWon(elapsedTime)
            } else if (elapsedTime >= max) {
                elapsedTime = max
                window.clearInterval(timer)
                gameLost()
            }
            barStatusElem.value = elapsedTime

            // set the time elapsed in the timer DOM element
            const timerElem = document.querySelector("#timer")
            if (timerElem) {
                // make sure the element exists in the DOM
                timerElem.innerText = millisToMinutesAndSeconds(elapsedTime)
            }
        }

        setValue()
        timer = window.setInterval(setValue, update)
    }
}

export const millisToMinutesAndSeconds = (ms) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = ((ms % 60000) / 1000).toFixed(0)
    return seconds === 60
        ? minutes + 1 + ":00"
        : minutes + ":" + (seconds < 10 ? "0" : "") + seconds
}
