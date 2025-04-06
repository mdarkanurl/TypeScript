let direction: 'North' | 'South' | 'East' | 'West'; // I can only declare one of those values
direction = 'East';
// direction = 'Hello'; This is give us error

let responseCode: 200 | 201 | 300 | true;
responseCode = 201;
responseCode = true;

let isSkilled: true; // We can also declare one literals
isSkilled = true;

enum Size {
    Smallest = 10, // We can change the value and it default start from 0
    Medium, // The value is 11 caz we change the value of previous one to 10
    Large
};

let size: Size = Size.Smallest; // This is return 0
size = 10; // This is return 0
console.log('This is', size);

enum Direction {
    Up = 'UP', // This are like variable
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

let values = Direction;
console.log(values.Up);

