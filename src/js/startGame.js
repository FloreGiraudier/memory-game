import { registerClicks } from './game.js'
import { startProgressBar } from './progressBar.js'
import { initLocalStorage } from './localStorage.js'

export const startGame = () => {
    initLocalStorage();
    registerClicks();
    startProgressBar();
}