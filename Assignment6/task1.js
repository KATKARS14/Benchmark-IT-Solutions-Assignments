var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Department = /** @class */ (function () {
    function Department() {
        this.employees = [];
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
        console.log("Employee Added");
    };
    Department.prototype.removeEmployee = function (id) {
        this.employees = this.employees.filter(function (emp) { return emp.id !== id; });
        console.log(id, " Employee Removed!!!");
    };
    Department.prototype.getTotalSalary = function () {
        return this.employees.reduce(function (total, emp) { return total + emp.salary; }, 0);
    };
    Department.prototype.listEmployees = function () {
        console.log("Employees are - ", this.employees);
    };
    return Department;
}());
var GenericStorage = /** @class */ (function () {
    function GenericStorage() {
        this.items = [];
    }
    GenericStorage.prototype.add = function (item) {
        this.items.push(item);
    };
    GenericStorage.prototype.remove = function (item) {
        this.items = this.items.filter(function (i) { return i !== item; });
    };
    GenericStorage.prototype.getAll = function () {
        return __spreadArray([], this.items, true);
    };
    return GenericStorage;
}());
function updateSalary(employee, newSalary) {
    return __assign(__assign({}, employee), { salary: newSalary });
}
var department = new Department();
var emp1 = { id: 1, name: "Shruti", position: "Developer", salary: 50000 };
var emp2 = { id: 2, name: "Rushi", position: "Designer", salary: 45000 };
department.addEmployee(emp1);
department.addEmployee(emp2);
department.listEmployees();
console.log("Total Salary:", department.getTotalSalary());
department.removeEmployee(1);
department.listEmployees();
//generic Storage
var employeeStorage = new GenericStorage();
employeeStorage.add(emp1);
employeeStorage.add(emp2);
console.log("Stored Employees:", employeeStorage.getAll());
employeeStorage.remove(emp1);
console.log("After removal:", employeeStorage.getAll());
//updating employees salary
var updatedEmp = updateSalary(emp2, 55000);
console.log("Updated Employee:", updatedEmp);
