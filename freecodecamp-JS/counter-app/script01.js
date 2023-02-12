// Create a function that logs out "Hi there, Linda! when called"

// let name = "Linda"
// let greeting = "Hi there"

// function greetLinda() {
//     console.log(greeting + ", " + name + "!")
// }

// greetLinda()

// ###############################################################

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

// ###############################################################

// Try to predict what each of the lines will log out

// console.log("2" + 2) // 22
// console.log(11 + 7) // 18
// console.log(6 + "5") // 65
// console.log("My points: " + 5 + 9) // My points: 59
// console.log("My points: ", + 5 + 9) // My points: 14
// console.log(2 + 2) // 4
// console.log ("11" + "14") // 1114

// ###############################################################

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error"

// let errorEl = document.getElementById("error")

// // function error() {
// //     errorEl.innerText = "Something went wrong, please try again."
// // } --> My solution

// // function error() {
// //     errorEl.textContent = "Something went wrong, please try again."
// // } --> Video solution

// ###############################################################

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// function add() {
//     let sumEL = num1 + num2
//     document.getElementById("sum-el").textContent += sumEL
// }

// function subtract() {
//     let subtractEl = num1 - num2
//     document.getElementById("sum-el").textContent += subtractEl
// }

// function divide() {
//     let divideEl = num1 / num2
//     document.getElementById("sum-el").textContent += divideEl
// }

// function multiply() {
//     let multiplyEl = num1 * num2
//     document.getElementById("sum-el").textContent += multiplyEl
// } --> MY SOLUTION

// let sumEl = document.getElementById("sum-el")

// function add() {
//     let result = num1 + num2
//     sumEl.textContent = "Sum: " + result
// }
// function subtract() {
//     let result = num1 - num2
//     sumEl.textContent = "Sum: " + result
// }
// function divide() {
//     let result = num1 / num2
//     sumEl.textContent = "Sum: " + result
// }
// function multiply() {
//     let result = num1 * num2
//     sumEl.textContent = "Sum: " + result
// } --> VIDEO SOLUTION





