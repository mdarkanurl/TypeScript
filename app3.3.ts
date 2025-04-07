interface Person {
    name: string;
    age: number;
    isMarried: boolean;
    height?: number;
    Hello?: () => void;
}

const person: Person = {
    name: 'Mohammad Arkan',
    age: 17,
    isMarried: false,
    Hello: function () {
        console.log(this.name + ' says hello')
    }
}

console.log(person);

interface Employee extends Person {
    employeeId: number
}

interface Manager extends Employee {
    employees: Person[];
}

const employee: Employee = {
    name: 'Jovan Ahmed',
    age: 17,
    isMarried: false,
    employeeId: 41
}

function getPerson(p: Person): Person {
    return {
        name: 'Ali Hossain',
        age: 29,
        isMarried: true
    }
}

console.log(`It's from function => ` , getPerson(person));