function Car(name, modelYear) {
  ;(this.name = name), (this.modelYear = modelYear)
}

Car.prototype.tyres = function () {
  const tyreType = "continental"
  return `this car has ${tyreType} types`
}

const myFirstCar = new Car("vw", 2019)
// console.log(myFirstCar.tyres())

//Constructor Functions
function Elf(name, weapon) {
  this.name = name
  this.weapon = weapon
}

Elf.prototype.attack = function () {
  return "atack with " + this.weapon
}
const sam = new Elf("Sam", "bow")
const peter = new Elf("Peter", "bow")
sam.attack()
