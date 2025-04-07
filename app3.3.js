"use strict";
const person = {
    name: 'Mohammad Arkan',
    age: 17,
    isMarried: false,
    Hello: function () {
        console.log(this.name + ' says hello');
    }
};
console.log(person);
const employee = {
    name: 'Jovan Ahmed',
    age: 17,
    isMarried: false,
    employeeId: 41
};
function getPerson(p) {
    return {
        name: 'Ali Hossain',
        age: 29,
        isMarried: true
    };
}
console.log(`It's from function => `, getPerson(person));
