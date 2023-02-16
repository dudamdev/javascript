// document.getElementById("count-el").innerText = 5;

// let myAge = 22
// console.log("My age is", myAge)

// ##########################################################################################################################

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

// ##########################################################################################################################

// let myAge = 22
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// ##########################################################################################################################

// let count = 5
// count += 10
// count -= 2
// console.log(count)

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints += 50
// console.log(bonusPoints)
// bonusPoints -= 75
// console.log(bonusPoints)
// bonusPoints += 45
// console.log(bonusPoints)

// ##########################################################################################################################

// initialize the count as 0
// listen for clicks on the increment button
// increment count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
//     console.log("The button was clicked")
// }

// ##########################################################################################################################

// function countDown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// // Setting up the race 🏎️🏎️🏎️

// countDown()

// // GO! 🏁
// // Players are running the race 🏎️💨
// // Race is finished 🍾

// // Get ready for a new race 🏎️🏎️🏎️

// countDown()

// ##########################################################################################################################

// Create a function that logs out the number 42 to the console
// Call/invoke the function

// function answer4All() {
//     console.log(42)
// }

// answer4All()

// ##########################################################################################################################

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logsout the sum of all the lap times

// function lapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// lapTime()

// ##########################################################################################################################

// let lapsCompleted = 0

// // Create a function that increments the lapsCompleted variable with one
// // Run it three times

// function increment() {
//     lapsCompleted += 1
//     console.log(lapsCompleted)
// }

// increment()
// increment()
// increment()

// console.log(lapsCompleted)

// ##########################################################################################################################

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// variables JS convention: camelCase

// let countEL = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEL.innerText = count
// }

// function save() {
//     console.log(count)
// }

// save()

// ##########################################################################################################################

// The DOM (Document Object Model) - How you use JS to modify a website

// ##########################################################################################################################

// let userName = 'Duda'
// let notification = 'you have three new notifications'
// let messageToUser = userName + ", " + notification + "!"

// console.log(messageToUser)

// ##########################################################################################################################

// let name = "Duda Matos"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name

// console.log(myGreeting)

// ##########################################################################################################################

// let name = 42
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// // console.log(myGreeting)

// // let points = "4"
// // let bonusPoints = "10"
// // let totalPoints = points + bonusPoints
// // console.log(totalPoints)

// console.log(4 + 5) // 9
// console.log("2" + "4") // 24
// console.log("5" + 1) // 51
// console.log(100 + "100") // 100100

// ##########################################################################################################################

// let welcomeEl = document.getElementById("welcome-el")
// let name = "Duda"
// let greeting = "Welcome back, "

// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += " 👋"

// ##########################################################################################################################

// Create a function that logs out "Hi there, Linda! when called"

// let name = "Linda"
// let greeting = "Hi there"

// function greetLinda() {
//     console.log(greeting + ", " + name + "!")
// }

// greetLinda()

// ##########################################################################################################################

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

// let myPoints = 3

// function add3Points() {
//     myPoints += 3
// }

// function remove1Point() {
//     myPoints -= 1
// }

// // Call the functions to that the line below logs out 10
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(myPoints)

// ##########################################################################################################################

// Try to predict what each of the lines will log out

// console.log("2" + 2) // 22
// console.log(11 + 7) // 18
// console.log(6 + "5") // 65
// console.log("My points: " + 5 + 9) // My points: 59
// console.log("My points: ", + 5 + 9) // My points: 14
// console.log(2 + 2) // 4
// console.log ("11" + "14") // 1114

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

// ##########################################################################################################################

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 22

// if (age < 21) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!")
// }

// ##########################################################################################################################

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

// ##########################################################################################################################

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

// ##########################################################################################################################

// console.log(4 === 3) // false
// console.log(5 > 2) // true
// console.log(12 > 12) // false
// console.log(3 < 0) // false
// console.log(3 >= 3) // true
// console.log(11 <= 11) // true
// console.log(3 <= 2) // false

// ##########################################################################################################################

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

// ##########################################################################################################################

// Arrays - ordered list of items
// 0 indexed
// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relauched my portfolio"
// ]

// let skills = [
//     "HTML 5",      // 0
//     "CSS 3",       // 1
//     "JavaScript",  // 2
//     "Figma",       // 3
//     "Illustrator", // 4
//     "GitHub"       // 5
// ]

// // Complex data types (primitive data types combined: string, number and boolean)
// let myself = [
//     "Eduarda Matos",
//     22,
//     true
// ]

// // Add and removing items from arrays
// let cards = [7, 4]
// cards.push(5)
// // console.log(cards)

// ##########################################################################################################################

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

// ##########################################################################################################################

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

// ##########################################################################################################################

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

// ##########################################################################################################################

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately",
//     "Same here!"
// ]

// for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i])
// }

// ##########################################################################################################################

// let cards = [7, 3, 9]

// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i])
// }

// ##########################################################################################################################

// let sentence = ["Hello", "from", "the", "other", "side!"]
// let adeleHello = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     adeleHello.textContent += sentence[i] + " "
// }

// ##########################################################################################################################

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

// ##########################################################################################################################

// let player1Time = 102
// let player2Time = 107

// function getFasterRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFasterRaceTime()

// function getTotalRaceTime() {
//     return player1Time + player2Time
// }

// let totalTime = getTotalRaceTime()
// console.log(totalTime)

// ##########################################################################################################################

// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard] // array - ordered list of items
// let sum = firstCard + secondCard
// let hasBlackjack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") // == let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")

// function getRandomCard() {
//     return 5
// }

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
//     let card = getRandomCard()
//     sum += card
//     cards.push (card)
//     renderGame()
// }

// ##########################################################################################################################

// let randomNumber = Math.random() * 6

// console.log(randomNumber)

// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber)

// let randomNumber = Math.floor(Math.random()*6)
// console.log(randomNumber)

// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//     return randomNumber
// }

// console.log(rollDice())

// ##########################################################################################################################

// let cards = [] // array - ordered list of items
// let sum = 0
// let hasBlackjack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") // == let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")

// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random() * 13) + 1
//     if (randomNumber > 10) {
//         return 10
//     } else if (randomNumber === 1) {
//         return 11
//     } else {
//         return randomNumber
//     }
// }

// function startGame() {
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard
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
//     let card = getRandomCard()
//     sum += card
//     cards.push (card)
//     renderGame()
// }

// ##########################################################################################################################

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate.....")
// }

// let hasSolvedChallenge = false
// let hasHintsLetf = false

// if (hasSolvedChallenge === false && hasHintsLetf === false) {
//     return showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution......")
// }

// ##########################################################################################################################

// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups === true) {
//     return recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film we think you'll like!")
// }

// ##########################################################################################################################

// let cards = [] // array - ordered list of items
// let sum = 0
// let hasBlackjack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") // == let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")

// let player = {
//    name: "Duda",
//    chips: 150
// }

// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips

// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random() * 13) + 1
//     if (randomNumber > 10) {
//         return 10
//     } else if (randomNumber === 1) {
//         return 11
//     } else {
//         return randomNumber
//     }
// }

// function startGame() {
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard
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
//     if (isAlive === true && hasBlackjack === false) {
//         let card = getRandomCard()
//         sum += card
//         cards.push (card)
//         renderGame()
//     } else {
//         renderGame()
//     }
// }

// ##########################################################################################################################

// Objects - store data in-depth - composite / complex data type
// key-value pairs

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.tags)

// let castle = {
//     name: "King in my Castle",
//     price: 190,
//     available: true,
//     features: ["4 guests", "1 bedroom", "2 bads", "Private half-bath"]
// }

// console.log(castle.name)
// console.log(castle.price)
// console.log(castle.available)
// console.log(castle.features)

// ##########################################################################################################################

// let person = {
//     name: "Eduarda",
//     age: 22,
//     country: "Brazil"
// }

// function logData() {
//     return person.name + " is " + person.age + " years old and lives in " + person.country
// }

// console.log(logData())

// ##########################################################################################################################

// let age = 67

// if (age < 6) {
//     console.log("Free")
// } else if (age < 18) {
//     console.log("Child discount")
// } else if (age < 27) {
//     console.log("Student discount")
// } else if (age < 67) {
//     console.log("Full price")
// } else {
//     console.log("Senior citizen discount")
// }

// ##########################################################################################################################

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

// console.log("The 5 largest countries in the world:")
// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- "+ largeCountries[i])
// }

// ##########################################################################################################################

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)

// ##########################################################################################################################

// let dayOfMonth = 13
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("😱")
// }

// ##########################################################################################################################

// let hands = ["rock", "paper", "scissor"]

// // function random() {
// //     console.log(hands[Math.floor(Math.random()*3)])
// // }

// // random() --> MY SOLUTION

// function getHand() {
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]
// }

// console.log(getHand())

// ##########################################################################################################################

// let myLeads = `["www.awesomelead.com"]` // string

// // 1. Turns the myLeads string into an array
// myLeads = JSON.parse(myLeads)

// // 2. Pushes a new value to the array
// myLeads.push("www.incrediblelead.com")

// // 3. Turns the array into a string again
// myLeads = JSON.stringify(myLeads)

// // 4. Console.log the string using typeof to verify that it's a string
// console.log(typeof myLeads)

// ##########################################################################################################################

// localStorage.setItem("myName", "Eduarda Matos")
// let name = localStorage.getItem("myName")
// console.log(name)

// ##########################################################################################################################

// Truthy and Falsy Values
// const credits = 0

// if (credits) {
//     console.log("Let's play!")
// } else {
//     console.log("Sorry, you have no credits")
// }

// truthy
// falsy values:
// - false
// - 0
// - ""
// - null -> how developers signalize emptiness
// - undefined -> how JavaScript signalizes emptiness
// - NaN

// Working with null
// let currentViewers = null

// currentViewers = ["Jane", "Nick"]

// currentViewers = null

// if (currentViewers) {
//     console.log("We have viewers")
// }

// Working with undefined
// let currentViewers

// console.log(currentViewers) // undefined

// ##########################################################################################################################

// let trueOrFalse = Boolean("")

// console.log(trueOrFalse) // if Boolean ("Name") = true
//                          // if Boolean ("")     = false

// Guess the expression
// console.log(Boolean(""))   // false --> empty string
// console.log(Boolean("0"))  // true  --> string
// console.log(Boolean(100))  // true  --> number
// console.log(Boolean(null)) // false --> null
// console.log(Boolean([]))   // true  --> array
// console.log(Boolean(-0))   // false --> 0

// ##########################################################################################################################


// 6:27:34 - Preparing Deployment