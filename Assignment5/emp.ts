class Employee1 {
    constructor(public name: string, public id: number, protected salary: number) { }

    calculateBonus(): number {
        return this.salary * 0.1; // Default bonus
    }
}

class Manager1 extends Employee1 {
    calculateBonus(): number {
        return this.salary * 0.2;
    }
}

class Engineer1 extends Employee1 {
    calculateBonus(): number {
        return this.salary * 0.15;
    }
}

class Intern1 extends Employee1 {
    calculateBonus(): number {
        return this.salary * 0.05;
    }
}

let manager1 = new Manager1("Shruti", 101, 80000);
console.log(`Manager Bonus: $${manager1.calculateBonus()}`);

let engg1 = new Engineer1("Shruti", 101, 80000);
console.log(`Engineer Bonus: $${engg1.calculateBonus()}`);

let intern1 = new Intern1("Shruti", 101, 80000);
console.log(`Intern Bonus: $${intern1.calculateBonus()}`);