import { createTable } from './js/createTable.js'
import { startGame } from './js/startGame.js'


createTable();

const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', () => {
    startButton.classList.add('hidden')
    startGame();
})

