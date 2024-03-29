'use strict'

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName
  this.birthYear = birthYear

  // Never do this
  //    this.calcAge = function () {
  //        console.log(2037 - this.birthYear)
  //    }
}

const jonas = new Person('Jonas', 1991)
console.log(jonas)

// "new" operator:
//      1. New {} is created
//      2. function is called, this = {}
//      3. {} linked to prototype
//      4. function automatically return {}

const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1975)
console.log(matilda, jack)

console.log(jonas instanceof Person)

Person.hey = function () {
  console.log("Hey there 👋")
}

Person.hey()

// Prototypes
console.log(Person.prototype)

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear)
}

jonas.calcAge()
matilda.calcAge()
jack.calcAge()

console.log(jonas.__proto__ === Person.prototype) // true

console.log(Person.prototype.isPrototypeOf(jonas)) // true
console.log(Person.prototype.isPrototypeOf(matilda)) // true
console.log(Person.prototype.isPrototypeOf(jack)) // true
console.log(Person.prototype.isPrototypeOf(Person)) // false

Person.prototype.species = 'Homo Sapiens'
console.log(jonas.species, matilda.species)

console.log(jonas.hasOwnProperty('firstName')) // true
console.log(jonas.hasOwnProperty('species')) // false

console.log(jonas.__proto__) // Person.prototype
console.log(Person.prototype.__proto__) // Object.prototype
console.log(Object.prototype.__proto__) // null (top of the prototype chain)

console.dir(Person.prototype.constructor)

const arr = [2, 4, 6, 8, 10, 11, 2, 2, 2, 2, 4, 5] // new Array === {}
console.log(arr.__proto__ === Array.prototype)
console.log(Array.prototype.__proto__ === Object.prototype)

Array.prototype.unique = function () {
  // all Arrays inherit this method
  return [...new Set(this)]
}

console.log(arr.unique()) // return the array values without repetition

