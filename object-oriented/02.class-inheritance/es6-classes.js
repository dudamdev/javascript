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
};

class StudentCl extends PersonCl {
    constructor(firstName, birthYear, course) {
        // Always needs to happen first!
        super(firstName, birthYear) // responsible for creating the next "this" 
        this.course = course
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}.`)

    }

    calcAge() {
        console.log(`I'm ${2023 - this.birthYear} years old, but as a student I feel more like ${2023 - this.birthYear + 10}.`)
    }
};

const martha = new StudentCl("Martha Jones", 2009, "Computer Science");
martha.introduce()
martha.calcAge()
