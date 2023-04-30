class Car {
    constructor(brand, model, engine) {
        this.engine = engine
        this.brand = brand
        this.model = model
    }

    getInfo() {
        console.log(`${this.brand} ${this.model} ${this.engine.volume}`)
    }
}

class Engine {
    constructor(volume, type) {
        this.volume = volume
        this.type = type
    }
}

class VWEngine extends Engine {
    constructor() {
        super("1.5","IC")
    }
}

class RenaultEngine extends Engine {
    constructor() {
        super("2.0","Hybrid")
    }
}

const engine = new RenaultEngine();
const car = new Car("VW","Golf",engine)
car.getInfo()