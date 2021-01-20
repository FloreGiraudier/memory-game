let gameState

export const initGameState = () => {
    gameState = {
        visibleCards: [],
        numberOfCardsWon: 0,
        gameStatus: "started"
    }
}

// GAME STATUS
export const isGameLost = () => {
    return gameState.gameStatus === "lost"
}

export const setGameStatus = (status) => {
    gameState.gameStatus = status
}

// VISIBLE CARD
export const removeVisibleCards = () => {
    gameState.visibleCards = []
}
export const setNewVisibleCard = (cardLabel) => {
    gameState.visibleCards = [...gameState.visibleCards, cardLabel]
}
export const getVisibleCards = () => {
    return gameState.visibleCards
}

// CARDS WON
export const getNumberOfCardsWon = () => {
    return gameState.numberOfCardsWon
}
export const addOneCardWon = () => {
    gameState.numberOfCardsWon = gameState.numberOfCardsWon + 1
}
