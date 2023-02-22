// New Class Proposal (not yet part of JS)
//      1. Public fields
//      2. Private fields
//      3. Public methods
//      4. Private methods
//      (there's also the static version)

class Account {
    // 1. Public fields (instances)
    locale = navigator.language;

    // 2. Private fields
    #movements = [];    // syntax to make field private in new class proposal
    #pin;

    constructor(ownerName, currency, pin) {
        this.ownerName = ownerName;
        this.currency = currency;
        // protected: not supposed to be access from outside the class
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${ownerName}!`)
    }

    // 3. Public methods
    // Public interface (API)
    getMoviment() {
        return this.#movements
    }

    deposit(val) {
        this.#movements.push(val)
        return this // necessary to method chaining
    }

    withdraw(val) {
        this.deposit(-val)
        return this // necessary to method chaining
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan Approved!`)
            return this // necessary to method chaining
        }
    }

    static helper() {
        console.log("Helper")
    }

    // 4. Private methods
    // #approveLoan(val) {
    _approveLoan(val) {
        return true;
    }
};

const accOne = new Account("Jonas", "EUR", 1111);
console.log(accOne)
console.log(accOne.getMoviment())

accOne.deposit(250)
accOne.withdraw(140)
accOne.requestLoan(1000)
Account.helper()

// console.log(accOne.#pin) // SyntaxError: value not accessible outside the class
// accOne.approveLoan(1000) // shouldn't be available outside the class
// console.log(accOne.#movements) // SyntaxError: value not accessible outside the class

// Chaining Methods
accOne.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
console.log(accOne.getMoviment())


