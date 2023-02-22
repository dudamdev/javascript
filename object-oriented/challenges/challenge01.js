const Car = function (make, speed) {
  this.make = make
  this.speed = speed
}

const carProto = Car.prototype

carProto.accelerate = function () {
  this.speed += 10
  console.log(this.speed)
}

carProto.brake = function () {
  this.speed -= 5
  console.log(this.speed)
}

const carOne = new Car('BMW', 120)
const carTwo = new Car('Mercedes', 95)

carOne.brake()
carOne.brake()
carOne.brake()
carOne.brake()
carOne.brake()

carTwo.brake()
carTwo.accelerate()
carTwo.accelerate()
carTwo.accelerate()
