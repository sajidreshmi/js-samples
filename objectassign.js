const car = {
  name: "vw",
  type: "sedan",
  manufacturingYear: "2021",
  serviceHistory: [],
}

const servicing = {
  car: "vw",
  serviceInfo: "Oil change",
  date: new Date(),
}

const servicing2 = {
  car: "vw",
  serviceInfo: "Brake change",
  date: new Date(),
}
const { serviceHistory } = Object.assign({}, car, {
  serviceHistory: [].concat(servicing),
})
console.log(
  Object.assign({}, car, { serviceHistory: serviceHistory.concat(servicing2) })
)
