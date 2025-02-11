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
var Employee1 = /** @class */ (function () {
    function Employee1(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    Employee1.prototype.calculateBonus = function () {
        return this.salary * 0.1; // Default bonus
    };
    return Employee1;
}());
var Manager1 = /** @class */ (function (_super) {
    __extends(Manager1, _super);
    function Manager1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager1.prototype.calculateBonus = function () {
        return this.salary * 0.2;
    };
    return Manager1;
}(Employee1));
var Engineer1 = /** @class */ (function (_super) {
    __extends(Engineer1, _super);
    function Engineer1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Engineer1.prototype.calculateBonus = function () {
        return this.salary * 0.15;
    };
    return Engineer1;
}(Employee1));
var Intern1 = /** @class */ (function (_super) {
    __extends(Intern1, _super);
    function Intern1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Intern1.prototype.calculateBonus = function () {
        return this.salary * 0.05;
    };
    return Intern1;
}(Employee1));
var manager1 = new Manager1("Shruti", 101, 80000);
console.log("Manager Bonus: $".concat(manager1.calculateBonus()));
var engg1 = new Engineer1("Shruti", 101, 80000);
console.log("Engineer Bonus: $".concat(engg1.calculateBonus()));
var intern1 = new Intern1("Shruti", 101, 80000);
console.log("Intern Bonus: $".concat(intern1.calculateBonus()));
