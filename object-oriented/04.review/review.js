class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

class Student extends Person {
    university = "Universidade de São Paulo"; // public field
    #studyHours = 0;                          // private fields
    #course;                                  // private fields
    static numSubjects = 10;                  // static public field

    constructor(firstName, birthYear, startYear, course) {
        super(firstName, birthYear);
        this.startYear = startYear;
        this.course = course;
    }

    introduce() {   // public method
        console.log(`My name is ${this.fullName} and I study ${this.course}.`)
    }

    study(h) {  // referencing private field and method
        this.#makeCoffee();
        this.#studyHours += h
    }

    #makeCoffee() { // private method (not fully implemented on browsers)
        return "Here's a coffee for you 😊";
    }

    get testScore() {   // getter method
        return this._testScore;
    }

    set testScore(score) {  // setter method "_" sets property with the same name as method
        this._testScore = score <= 20 ? score : 0;
    }

    static printCurriculum() {  // static method (only available to the class)
        console.log(`There are ${this.numSubjects} subjects`)
    }
}

const duda = new Student("Duda", 2000, 2022, "Multiplatform Software Development")
