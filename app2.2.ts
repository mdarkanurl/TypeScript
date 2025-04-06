let arr: number[] = [1, 2, 3]; // It can only store number data type

const arrString: string[] = ['Mobile', 'Desktop', 'Laptop']; // It can only store string data type
const country: string[][] = [['Bangladesh', 'India'], ['Iran', 'Qatar']]; // It can only string data type with nested array

let anyArr = []; // It can store any data type
let numArr: number[] = []; // It can only store number data type

const myself: [string, number, boolean] = ['Mohammad Arkan', 17, true]; // Here's I can declare three type in one array
const coords: [number, number[]][] = [
    [1, [1, 2]],
    [-10, [3, 5]]
]

console.log(coords[0][1]);