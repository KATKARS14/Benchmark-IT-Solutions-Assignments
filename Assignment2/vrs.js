class Vehical {
    constructor(brand, model, rentPricePerDay) {
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }

    calculateRentalCost(days) {
        return days * this.rentPricePerDay;
    }
}

class Car extends Vehical {
    calculateRentalCost(days) {
        return super.calculateRentalCost(days);
    }
}

class Bike extends Vehical {
    calculateRentalCost(days) {
        return super.calculateRentalCost(days);
    }
}

class Truck extends Vehical {
    calculateRentalCost(days) {
        return super.calculateRentalCost(days);
    }
}

const car = new Car("Toyota", "Camry", 50);
console.log(`${car.brand} ${car.model}'s rental cost is ${car.calculateRentalCost(4)}`);

const bike = new Bike("Honda", "R15", 20);
console.log(`${bike.brand} ${bike.model}'s rental cost is ${bike.calculateRentalCost(3)}`);

const truck = new Truck("Ford", "F-150", 100);
console.log(`${truck.brand} ${truck.model}'s rental cost is ${truck.calculateRentalCost(14)}`);