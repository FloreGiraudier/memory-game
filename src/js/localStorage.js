export const initLocalStorage = () => {
    localStorage.setItem('visibleCards', '[]');
    localStorage.setItem('gameStatus', 'started');
}

// GAME STATUS
export const isGameLost = () => {
    return localStorage.getItem('gameStatus') === 'lost';
}

// VISIBLE CARD
export const removeVisibleCards = () => {
    localStorage.setItem('visibleCards', '[]');
}
export const setNewVisibleCard = (cardLabel) => {
    const visibleCards = getVisibleCards();
    visibleCards.push(cardLabel);
    localStorage.setItem('visibleCards', JSON.stringify(visibleCards));
}
export const getVisibleCards = () => {
    return JSON.parse(localStorage.getItem('visibleCards'));
}
