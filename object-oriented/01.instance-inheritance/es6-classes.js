// class expression
// const PersonCl = class {}   // function class

// class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2023 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}!`);
    }

    get age() {
        return 2023 - this.birthYear;
    }

    // Set property that already exists
    set fullName(name) {
        if (name.includes(" ")) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log("Hey there 👋")
        console.log(this)
    }
}

const jessica = new PersonCl("Jessica Davis", 1996);

jessica.calcAge();
jessica.greet();

console.log(jessica.__proto__ === PersonCl.prototype); // true
console.log(jessica.age);

// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl("Walter White", 1965);

PersonCl.hey()
