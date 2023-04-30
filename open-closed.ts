
interface ShapeType {
    name?: string
    calculateArea(): number
}

class Square implements ShapeType {
    public length: number
    constructor(length) {
        this.length = length
    }
    calculateArea(): number {
         return Math.pow(length, 2)
    }
}

class Circle implements ShapeType {
    public radius: number
    constructor(radius) {
        this.radius = radius
    }
    calculateArea(): number {
         return 3.142 * Math.pow(this.radius, 2)
    }
}

class Rectangle implements ShapeType {
    public width: number
    public height: number
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    calculateArea(): number {
         return this.width * this.height
    }
}

class Shape2 {
    public type: ShapeType
    constructor(type: ShapeType) {
        this.type = type
    }
    calculateArea() {
        return this.type.calculateArea();
    }
}

const square1 = new Square(10)
const shape1 = new Shape2(square1)
shape1.calculateArea()