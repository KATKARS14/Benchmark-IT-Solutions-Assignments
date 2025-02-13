interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}

interface Manager extends Employee {
    teamSize: number;
}

class Department {
    private employees: Employee[] = [];

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
        console.log("Employee Added");
    }

    removeEmployee(id: number): void {

        this.employees = this.employees.filter(emp => emp.id !== id);
        console.log(id, " Employee Removed!!!");
    }

    getTotalSalary(): number {
        return this.employees.reduce((total, emp) => total + emp.salary, 0);
    }

    listEmployees(): void {
        console.log("Employees are - ", this.employees);
    }
}

class GenericStorage<T> {
    items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }

    getAll(): T[] {
        return [...this.items];
    }
}

function updateSalary<T extends Employee>(employee: T, newSalary: number): T {
    return { ...employee, salary: newSalary };
}


const department = new Department();

const emp1: Employee = { id: 1, name: "Shruti", position: "Developer", salary: 50000 };
const emp2: Employee = { id: 2, name: "Rushi", position: "Designer", salary: 45000 };


department.addEmployee(emp1);
department.addEmployee(emp2);

department.listEmployees();

console.log("Total Salary:", department.getTotalSalary());

department.removeEmployee(1);

department.listEmployees();

//generic Storage
const employeeStorage = new GenericStorage<Employee>();

employeeStorage.add(emp1);
employeeStorage.add(emp2);

console.log("Stored Employees:", employeeStorage.getAll());

employeeStorage.remove(emp1);

console.log("After removal:", employeeStorage.getAll());

//updating employees salary
const updatedEmp = updateSalary(emp2, 55000);
console.log("Updated Employee:", updatedEmp);
