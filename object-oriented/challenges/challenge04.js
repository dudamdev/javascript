class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10
        console.log(this.speed)
    }

    brake() {
        this.speed -= 5
        console.log(`${this.speed} km/h.`)
        return this
    }

    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(speed) {
        this.speed = speed * 1.6
    }
};

class EVCl extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge
    }

    accelerate() {
        this.speed += 20
        this.charge--
        console.log(`${this.make} is going at ${this.speed}km/h, with a charge of ${this.#charge}`)
        return this
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo
        return this
    }
}

const rivian = new EVCl("Rivian", 120, 23)
console.log(rivian)

rivian.accelerate().brake().accelerate().chargeBattery(75).accelerate()
console.log(rivian.speedUS)

