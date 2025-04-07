"use strict";
let direction; // I can only declare one of those values
direction = 'East';
// direction = 'Hello'; This is give us error
let responseCode;
responseCode = 201;
responseCode = true;
let isSkilled; // We can also declare one literals
isSkilled = true;
var Size;
(function (Size) {
    Size[Size["Smallest"] = 10] = "Smallest";
    Size[Size["Medium"] = 11] = "Medium";
    Size[Size["Large"] = 12] = "Large";
})(Size || (Size = {}));
;
let size = Size.Smallest; // This is return 0
size = 10; // This is return 0
console.log('This is', size);
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
let values = Direction;
console.log(values.Up);
