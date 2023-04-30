
class Shape1 {
    constructor(type, area) {
        this.type = type
        this.area = area
    }
    create () {
        console.log("Creating shape...")
    }
}

class ModifyShape {
    constructor(shape) {
        this.shape = shape
    }
    changeColor() {
        console.log("changing color of the shape")
    }
}

const square = new Shape("Square", 10)
const circle = new Shape("Circle", 10)

square.create()
new ModifyShape(square).changeColor()
