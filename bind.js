const car = {
  myName: "vw",
  tyreType: "Continental",
  mileage() {
    console.log("gives good mileage")
  },
  tyres() {
    console.log(`I am ${this.myName} and i like ${this.tyreType}`)
  },
}
const car2 = {
  myName: "audi",
  tyreType: "Toyo",
  mileage() {
    console.log("gives good mileage")
  },
}

// car.tyres()

const newCar = car.tyres.bind(car2)
newCar()
