// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
// let firstCard = 10
// let secondCard = 12

// // 2. Create a variable, sum, and set it to the sum o the two cards.
// let sum = firstCard + secondCard

// if (sum < 21) {
//     console.log("Do you want to draw a new card? 😊")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
// } else {
//     console.log("You're out of the game! 😭")
// }

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 22

// if (age < 21) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!")
// }

// Check if the person is elegible for a birthday card from the King! (100)
// if less than 100    --> "Not elegible"
// else if exactly 100 --> "Here is your birthday card from the King!"
// else                --> "Not elegible, you've already gotten one"

// let age = 101

// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not elegible, you've already gotten one")
// }

// let firstCard = 10
// let secondCard = 10
// let sum = firstCard + secondCard
// let hasBlackjack = false
// let isAlive = true

// if (sum < 21) {
//     console.log("Do you want to draw a new card? 😊")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
//     hasBlackjack = true
// } else {
//     console.log("You're out of the game! 😭")
//     isAlive = false
// }

// console.log(isAlive)

// console.log(4 === 3) // false
// console.log(5 > 2) // true
// console.log(12 > 12) // false
// console.log(3 < 0) // false
// console.log(3 >= 3) // true
// console.log(11 <= 11) // true
// console.log(3 <= 2) // false

// let firstCard = 10
// let secondCard = 5
// let cards = [firstCard, secondCard] // array - ordered list of items
// let sum = firstCard + secondCard
// let hasBlackjack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") // == let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
//     sumEl.textContent = "Sum: " + sum
//     if (sum < 21) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackjack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }

//     messageEl.textContent = message
// }

// function newCard() {
//     let card = 5
//     sum += card
//     renderGame()
// }

// Arrays - ordered list of items
// 0 indexed
let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relauched my portfolio"
]

let skills = [
    "HTML 5",      // 0
    "CSS 3",       // 1
    "JavaScript",  // 2
    "Figma",       // 3
    "Illustrator", // 4
    "GitHub"       // 5
]

// Complex data types (primitive data types combined: string, number and boolean)
let myself = [
    "Eduarda Matos",
    22,
    true
]

// // Add and removing items from arrays
// let cards = [7, 4]
// cards.push(5)
// // console.log(cards)

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately"
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)

// console.log(messages)

// messages.pop(newMessage)
// console.log(messages)

// let firstCard = 10
// let secondCard = 5
// let cards = [firstCard, secondCard] // array - ordered list of items
// let sum = firstCard + secondCard
// let hasBlackjack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") // == let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
//     sumEl.textContent = "Sum: " + sum
//     if (sum < 21) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackjack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }

//     messageEl.textContent = message
// }

// function newCard() {
//     let card = 5
//     sum += card
//     cards.push (card)
//     renderGame()
// }

// Count to ten!
// Specify:
// - Where the count STARTS
// - Where it FINISHES
// - what's the STEP SIZE used

//         START      FINISH      STEP SIZE
// for (let count = 10; count <= 20; count += 1) {
//     console.log(count)
// }

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i)
// }

// for (let i = 10; i <= 100; i += 10) {
//     console.log(i)
// }

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately",
//     "Same here!"
// ]

// for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i])
// }

// let cards = [7, 3, 9]

// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i])
// }

// let sentence = ["Hello", "from", "the", "other", "side!"]
// let adeleHello = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     adeleHello.textContent += sentence[i] + " "
// }

// let firstCard = 10
// let secondCard = 5
// let cards = [firstCard, secondCard] // array - ordered list of items
// let sum = firstCard + secondCard
// let hasBlackjack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") // == let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: "
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "

//     }

//     sumEl.textContent = "Sum: " + sum
//     if (sum < 21) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackjack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }

//     messageEl.textContent = message
// }

// function newCard() {
//     let card = 5
//     sum += card
//     cards.push (card)
//     renderGame()
// }

// 3:12:50: Returning values