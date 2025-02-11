class Vehical {
    constructor(public brand: string, public model: string, public rentPerDay: number) { }

    calRentalCost(days: number): number {
        return this.rentPerDay * days;
    }
}

class Car extends Vehical {
    calRentalCost(days: number): number {
        return super.calRentalCost(days) * 1.1;
    }
}

class Bike extends Vehical {
    calRentalCost(days: number): number {
        return super.calRentalCost(days) * 0.9;
    }
}

class Truck extends Vehical {
    calRentalCost(days: number): number {
        return super.calRentalCost(days) * 1.2;
    }
}

let car = new Car("Maruti", "swift", 200);
console.log("Rent of car is", car.calRentalCost(3));

let bike = new Bike("Maruti", "honda", 100);
console.log("Rent of car is", car.calRentalCost(7));

let truck = new Truck("Maruti", "ABC", 500);
console.log("Rent of car is", car.calRentalCost(10));