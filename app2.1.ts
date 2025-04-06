const x: number = 2;
// console.log(x);

function test(x: number): number {
    return x + 1;
}

// console.log(test(4));

let y = 2; // The type of this variable number as i declare number value
let myName: string = 'Mohammad Arkan'; // The type of this variable string as i declare string value

const myAge: number = 17; // In this case as i mention type number therefor I've declare value number
let favBooks = undefined; // In this case I can declare whatever type i want
favBooks = 26;
favBooks = 'Zero to one'
let favApps = null; // It's like undefined type loosely not strictly

let homeAddress: number | undefined = undefined; // For later only declare number type
let FavLanguage: string | undefined = undefined; // For later only declare string type
homeAddress = 6081;
FavLanguage = 'TypeScript';
FavLanguage = 'JavaScript';

const isRich: boolean = true; // Only declare true or false