interface Vehicle {
    getMileage(): number
}

interface GroundVehicle {
    wheels?: number
    passengerSeats?: number
}

interface WaterVehicle {
    passengerSeats?: number
}

class Car implements Vehicle {
    public wheels: number
    public passengerSeats: number

    constructor(wheels: number, passengerSeats: number) {
        this.wheels = wheels
        this.passengerSeats = passengerSeats
    }

    getMileage(): number {
        return 30;
    }
}

class Boat implements Vehicle, WaterVehicle {
    public passengerSeats: number

    constructor(passengerSeats: number) {
        this.passengerSeats = passengerSeats
    }

    getMileage(): number {
        return 30;
    }
}

const car = new Car(4, 5)
const boat = new Boat(15)
car.getMileage()
boat.getMileage()