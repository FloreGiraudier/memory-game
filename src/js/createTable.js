import { CARDS, mixDeck } from './cardsDeck.js'

export const createTable = () => {
    // create out cards deck randomly mixed
    const deckMixed = mixDeck(CARDS);

    // get the table DOM element
    var tableElem = document.querySelector('.table');
    const numberOfRows = 4;
    const numberOfColumns = 7;

    // Create the HTML content for our table
    let tableHtml = ''
    tableHtml += '<table>';
    let cardIndex = 0;
    for (var i = 1; i <= numberOfRows; i++) {
        tableHtml += '<tr>';
        for (var j = 1; j <= numberOfColumns; j++) {
            // deckMixed.indexOf(deckMixed[cardIndex])
            tableHtml += `<td class="card" id="${cardIndex}" data-fruit="${deckMixed[cardIndex].label}">${getFruitHtml(deckMixed[cardIndex])}</td>`;
            cardIndex++;
        }
        tableHtml += '</tr>';
    }
    tableHtml += '</table>';

    // set the HTML in the DOM element
    tableElem.innerHTML = tableHtml;
}

const getFruitHtml = (card) => {
    return `<span class="fruit" style="background-position-y:${card.spritePositionY}px;"></span>`
}
