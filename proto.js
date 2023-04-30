const car = {
  myName: "vw",
  tyreType: "Continental",
  wheels: true,
  mileage() {
    console.log("gives good mileage")
  },
  tyres() {
    if (this.wheels) {
      console.log(`I am ${this.myName} and i like ${this.tyreType}`)
    }
  },
}
const car2 = {
  myName: "audi",
  tyreType: "Toyo",
  mileage() {
    console.log("gives good mileage")
  },
  availableForSale: true,
}

// car.tyres()

// const newCar = car.tyres.bind(car2)
// newCar()

car2.__proto__ = car
for (const prop in car2) {
  if (car2.hasOwnProperty(prop)) {
    console.log(prop)
  }
}
car2.tyres()
