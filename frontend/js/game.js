import {
    setNewVisibleCard,
    getVisibleCards,
    removeVisibleCards,
    isGameLost,
    addOneCardWon
} from "./gameState.js"

export const disableClicks = () => {
    const cardsArray = Array.from(document.querySelectorAll(".card"))
    cardsArray.forEach((card) => {
        card.removeAttribute("data-clickable")
    })
}

const enableClicks = () => {
    const cardsArray = Array.from(document.querySelectorAll(".card"))
    cardsArray.forEach((card) => {
        card.setAttribute("data-clickable", "")
    })
}

export const registerClicks = () => {
    enableClicks()
    const cardsArray = Array.from(document.querySelectorAll(".card"))
    // loop on every card present on the DOM to register clicks
    cardsArray.forEach((card) => {
        card.addEventListener("click", () => {
            if (card.hasAttribute("data-clickable")) {
                // turn the clicked card
                turnCard(card)
                // if 2 cards are visible, compare them
                const numberOfVisibleCards = getVisibleCards().length
                if (numberOfVisibleCards === 2) compareTurnedCards()
            }
        })
    })
}

const turnCard = (card) => {
    if (card.getAttribute("data-status") !== "visible") {
        card.setAttribute("data-status", "visible")
        const cardIndex = card.getAttribute("id")
        const fruit = card.getAttribute("data-fruit")
        setNewVisibleCard({ cardIndex, fruit })
    }
}

const compareTurnedCards = () => {
    const cards = getVisibleCards()
    removeVisibleCards()

    if (cards[0].fruit === cards[1].fruit) {
        // the 2 cards are the same, they are won !!
        const card1 = document.getElementById(cards[0].cardIndex)
        const card2 = document.getElementById(cards[1].cardIndex)
        winCard(card1)
        winCard(card2)
    } else {
        // the 2 cards are not the same, they are lost (turned back) !!
        const card1 = document.getElementById(cards[0].cardIndex)
        const card2 = document.getElementById(cards[1].cardIndex)
        looseCard(card1)
        looseCard(card2)
    }
}

const winCard = (card) => {
    card.setAttribute("data-status", "won")
    addOneCardWon()
}

const looseCard = (card) => {
    card.setAttribute("data-status", "wrong")
    disableClicks()
    setTimeout(function () {
        card.removeAttribute("data-status")
        if (!isGameLost()) enableClicks()
    }, 700)
}
