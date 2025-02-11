var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehical = /** @class */ (function () {
    function Vehical(brand, model, rentPerDay) {
        this.brand = brand;
        this.model = model;
        this.rentPerDay = rentPerDay;
    }
    Vehical.prototype.calRentalCost = function (days) {
        return this.rentPerDay * days;
    };
    return Vehical;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.calRentalCost = function (days) {
        return _super.prototype.calRentalCost.call(this, days) * 1.1;
    };
    return Car;
}(Vehical));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bike.prototype.calRentalCost = function (days) {
        return _super.prototype.calRentalCost.call(this, days) * 0.9;
    };
    return Bike;
}(Vehical));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Truck.prototype.calRentalCost = function (days) {
        return _super.prototype.calRentalCost.call(this, days) * 1.2;
    };
    return Truck;
}(Vehical));
var car = new Car("Maruti", "swift", 200);
console.log("Rent of car is", car.calRentalCost(3));
var bike = new Bike("Maruti", "honda", 100);
console.log("Rent of car is", car.calRentalCost(7));
var truck = new Truck("Maruti", "ABC", 500);
console.log("Rent of car is", car.calRentalCost(10));
