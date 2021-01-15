import { createTable } from './createTable.js'
import { startGame } from './startGame.js'
import { disableClicks } from './game.js'

export const startProgressBar = () => {
    const barStatusElem = document.querySelector('.barStatus');
    let width = 0;

    const id = setInterval(frame, 100);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            gameLost()
        } else {
            // increment progress bar width percentage
            width++;
            barStatusElem.style.width = width + '%';
        }
    }
}

const gameLost = () => {
    console.log('perdu !!')
    localStorage.setItem('gameStatus', 'lost');
    disableClicks();

    // make the gameLost content visible
    const gameLostContent = document.querySelector('.gameLostContent');
    gameLostContent.classList.remove('hidden')

    // register the onclick on restart button
    const restartButton = document.querySelector('#restartButton');
    restartButton.addEventListener('click', () => {
        const gameLostContent = document.querySelector('.gameLostContent');
        gameLostContent.classList.add('hidden')
        createTable();
        startGame();
    })
}