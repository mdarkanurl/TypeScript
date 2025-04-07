"use strict";
// Function to add two numbers or return an error message if invalid
function add(x, y) {
    if (x === 0) {
        return 'Invalid input'; // Return string if x is 0
    }
    return x + y; // Correct the assignment to an addition
}
// console.log(add(14, -10)); // Example call
// Function to construct a full name
function makeName(firstName, lastName, middleName) {
    if (middleName) {
        return firstName + ' ' + middleName + ' ' + lastName;
    }
    return firstName + ' ' + lastName;
}
// Function that calls another function
function callFunc(func, param1, param2, param3) {
    return func(param1, param2, param3); // Return the result from the function
}
// Correct usage of the functions
const fullName = callFunc(makeName, 'Ali', 'Hossain');
// console.log(fullName);  // Output will be 'Ali Hossain'
// With a middle name
const fullNameWithMiddle = callFunc(makeName, 'Ali', 'Hossain', 'Mohammad');
// console.log(fullNameWithMiddle);  // Output will be 'Ali Mohammad Hossain'
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
function applyFunc(funcs, values) {
    const results = [];
    for (let i = 0; i < funcs.length; i++) {
        // console.log(values[i]);
        const args = values[i];
        const result = funcs[i](args[0], args[1]);
        console.log(funcs[i](args[0], args[1]));
        results.push(result);
    }
    return results;
}
console.log(applyFunc([mul, div], [
    [1, 2],
    [4, 5],
]));
