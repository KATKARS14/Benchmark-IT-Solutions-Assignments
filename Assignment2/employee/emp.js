class Employee {
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.#salary = salary;
    }
    #salary;

    getSalary() {
        return this.#salary;
    }

    calculateBonus() {
        return 0;
    }
}
class Manager extends Employee {
    calculateBonus() {
        const bonus = this.getSalary() * 0.2;
        return bonus;
    }
}

class Engineer extends Employee {
    calculateBonus() {
        const bonus = this.getSalary() * 0.15;
        return bonus;
    }
}

class Intern extends Employee {
    calculateBonus() {
        const bonus = this.getSalary() * 0.05;
        return bonus;
    }
}
console.log("Id    Name    Salary    Bonus ")

const manager = new Manager("Shruti", 101, 1000000);
console.log(`${manager.id} ${manager.name} ${manager.getSalary()} ${manager.calculateBonus()}`);

const engg = new Engineer("Rushi", 100, 2000000);
console.log(`${engg.id} ${engg.name} ${engg.getSalary()} ${engg.calculateBonus()}`);

const intern = new Intern("Yash", 103, 10000);
console.log(`${intern.id} ${intern.name} ${intern.getSalary()} ${intern.calculateBonus()}`);