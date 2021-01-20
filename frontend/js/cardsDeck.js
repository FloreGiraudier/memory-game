const FRUITS = [
    { label: "apple", spritePositionY: "0" },
    // spritePositionY :
    // In the fruis sprite image every fruit is a 100px square
    // We define here the background positionY of each fruit : 0 (first fruit) and -1300 (last fruit),
    // by increments of 100 (the height of a fruit picture)
    { label: "banana", spritePositionY: "-100" },
    { label: "orange", spritePositionY: "-200" },
    { label: "green-lemon", spritePositionY: "-300" },
    { label: "grenade", spritePositionY: "-400" },
    { label: "apricot", spritePositionY: "-500" },
    { label: "lemon", spritePositionY: "-600" },
    { label: "strawberry", spritePositionY: "-700" },
    { label: "green-apple", spritePositionY: "-800" },
    { label: "peach", spritePositionY: "-900" },
    { label: "grape", spritePositionY: "-1000" },
    { label: "watermelon", spritePositionY: "-1100" },
    { label: "plum", spritePositionY: "-1200" },
    { label: "pear", spritePositionY: "-1300" }
]

// concatenates the FRUITS table twice (we want every fruit to be present twice in the deck)
export const CARDS = [...FRUITS, ...FRUITS]

// we will swap 2 random cards, 100 times, this will mix the deck
// (similar to real life experience when we mix a deck of cards)
export const mixDeck = (deck) => {
    const deckMixed = [...deck]
    for (let i = 0; i < 100; i++) swapTwoCards(deckMixed)
    return deckMixed
}

const swapTwoCards = (deck) => {
    // pick two random indexes
    const index1 = randomIndex(deck.length)
    const index2 = randomIndex(deck.length)
    // swap cards at these indexes
    const temp = deck[index1]
    deck[index1] = deck[index2]
    deck[index2] = temp
    return deck
}

const randomIndex = (arrayLength) => Math.floor(Math.random() * arrayLength)
