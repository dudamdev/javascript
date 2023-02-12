let num1 = parseInt(prompt("Enter the first number:"))
let num2 = parseInt(prompt("Enter the second number:"))
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}
function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}
function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}
function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}