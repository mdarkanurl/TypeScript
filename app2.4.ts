let X: any = 1; // Any type can be declare here
X = 'I\'m Mohammad Arkan';
X = true;

let Y: unknown = 1; // When you don't know the type you can use unknown as type;
// We can use Y variable with whatever type we want

if(typeof Y == 'number') {
    const result = Y + 3; // We can't use it if we don't write this conditional typeof Y == 'number'
}

if(typeof Y == 'string') {
    const result = Y + ' Is it working?';
}

const result = (Y as string) + ' Is it working?'; // Another way to use it but not that much good

function testAny(input: any): void { // use of any and void
    console.log(`User input is: ${input}`);
}

testAny('You should work hard');
testAny(17);

function testUnknown(input: unknown): void { // use of uunknown
    if(typeof input == 'string') {
        console.log(`String input is: ${input}`);
    }

    if(typeof input == 'boolean') {
        console.log(`Is he good man: ${input}`);
    }

    if(typeof input == 'number') {
        console.log(`He is ${input} years old`);
    } else {
        console.log('Unsupported type of input');
    }
}

testUnknown('I\'m Mohammad Arkan');
testUnknown(true);
testUnknown(17);
testUnknown([17, 60, 80]);