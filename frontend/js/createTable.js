import { CARDS, mixDeck } from "./cardsDeck.js"

export const createTable = () => {
    // create our cards deck randomly mixed
    const deckMixed = mixDeck(CARDS)

    const numberOfRows = 4
    const numberOfColumns = 7

    // Create the HTML content for our table
    let tableHtml = ""
    tableHtml += "<table>"
    let cardIndex = 0
    for (let i = 1; i <= numberOfRows; i++) {
        tableHtml += "<tr>"
        for (let j = 1; j <= numberOfColumns; j++) {
            tableHtml += `<td class="card" id="${cardIndex}" data-fruit="${
                deckMixed[cardIndex].label
            }">${getFruitHtml(deckMixed[cardIndex])}</td>`
            cardIndex++
        }
        tableHtml += "</tr>"
    }
    tableHtml += "</table>"

    // get the table DOM element, and set the HTML content inside
    const tableElem = document.querySelector(".table")
    if (tableElem) {
        // make sure the element exists in the DOM
        tableElem.innerHTML = tableHtml
    }
}

const getFruitHtml = (card) => {
    return `<span class="fruit" style="background-position-y:${card.spritePositionY}px;"></span>`
}
