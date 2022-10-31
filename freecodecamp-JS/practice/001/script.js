// document.getElementById("count-el").innerText = 5;

// let myAge = 22
// console.log("My age is", myAge)

//--------------------------------------------------

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

//--------------------------------------------------

// let myAge = 22
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

//--------------------------------------------------

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

//--------------------------------------------------

// initialize the count as 0
// listen for clicks on the increment button
// increment count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
//     console.log("The button was clicked")
// }

//--------------------------------------------------

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

//--------------------------------------------------

// Create a function that logs out the number 42 to the console
// Call/invoke the function

// function answer4All() {
//     console.log(42)
// }

// answer4All()

//--------------------------------------------------

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logsout the sum of all the lap times

// function lapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// lapTime()

//--------------------------------------------------

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

//--------------------------------------------------

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

//--------------------------------------------------

// The DOM (Document Object Model) - How you use JS to modify a website

//--------------------------------------------------

// let userName = 'Duda'
// let notification = 'you have three new notifications'
// let messageToUser = userName + ", " + notification + "!"

// console.log(messageToUser)

//--------------------------------------------------

// let name = "Duda Matos"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name

// console.log(myGreeting)

//--------------------------------------------------

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

//--------------------------------------------------

let welcomeEl = document.getElementById("welcome-el")
let name = "Duda"
let greeting = "Welcome back, "

welcomeEl.innerText = greeting + name

welcomeEl.innerText += " 👋"

//--------------------------------------------------