const Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

Person.prototype.calcAge = function () {
    console.log(2023 - this.birthYear)
}

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear)
    this.course = course
}

// Linking Prototypes
Student.prototype = Object.create(Person.prototype) // defines Person.prototype as the parent prototype of the Student prototype

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}.`)
}

const mike = new Student("Mike", 2003, "Computer Science")
mike.introduce()
mike.calcAge()  // JS found the function calcAge from the parent prototype

console.log(mike.__proto__)
console.log(mike.__proto__.__proto__)

console.log(mike instanceof Student)
console.log(mike instanceof Person)
console.log(mike instanceof Object)
Student.prototype.constructor = Student
console.dir(Student.prototype.constructor)
