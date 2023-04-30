class Shape {
    constructor(type) {
        this.type = type
    }
    drawShape() {
        // ....
    }
}

class Square extends Shape {
    constructor() {
        super()
    }
    drawShape() {
         console.log("drawing square")
    }
}

class Circle extends Shape {
    constructor() {
        super()
    }
    drawShape() {
         console.log("drawing circle");
    }
}

class Color extends Shape {
    constructor() {
        super()
    }

    addColor() {
        //...
    }
}

class Canvas {
    constructor(shapes) {
        this.shapes = []
        this.colors = []
        this.setShapes(shapes)
    }

    setShapes(shapes) {
        shapes.forEach(shape => {
            if(shape instanceof Color) {
                this.colors.push(shape)
            } else {
                this.shapes.push(shape)
            }
        });
    }

    drawShapes() {
        this.shapes.forEach(shape => {
            shape.drawShape()
        });
    }

    addColors() {
        this.colors.forEach(color => {
            color.addColor()
        });
    }
}

const square = new Square()
const circle = new Circle()
const color = new Color("red")
const shapes = [square, circle, color]

const canvas = new Canvas(shapes)
shapes.drawShape()
shapes.addColors()