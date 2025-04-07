// Function to add two numbers or return an error message if invalid
function add(x: number, y: number): number | string { 
    if (x === 0) {
        return 'Invalid input';  // Return string if x is 0
    }
    
    return x + y;  // Correct the assignment to an addition
}

// console.log(add(14, -10)); // Example call

// Function to construct a full name
function makeName(firstName: string, lastName: string, middleName?: string): string { 
    if (middleName) {
        return firstName + ' ' + middleName + ' ' + lastName;
    }
    return firstName + ' ' + lastName;
}

// Function that calls another function
function callFunc(func: (f: string, l: string, m?: string) => string, param1: string, param2: string, param3?: string): string {
    return func(param1, param2, param3); // Return the result from the function
}

// Correct usage of the functions
const fullName = callFunc(makeName, 'Ali', 'Hossain');
// console.log(fullName);  // Output will be 'Ali Hossain'

// With a middle name
const fullNameWithMiddle = callFunc(makeName, 'Ali', 'Hossain', 'Mohammad');
// console.log(fullNameWithMiddle);  // Output will be 'Ali Mohammad Hossain'

function mul(x: number, y: number): number {
    return x * y;
}


function div(x: number, y: number): number {
    return x / y;
}

function applyFunc(
  funcs: ((a: number, b: number) => number)[], 
  values: [number, number][]
  ): number[] {
    const results: number[] = [];

    for(let i = 0; i < funcs.length; i++) {
        // console.log(values[i]);
        const args = values[i];
        const result = funcs[i](args[0], args[1]);
        console.log(funcs[i](args[0], args[1]))
        results.push(result);
    }

    return results;
}

console.log(
    applyFunc(
        [mul, div],
        [
            [ 1, 2 ],
            [ 4, 5 ],
        ]
    )
);