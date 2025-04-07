"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.sub = sub;
function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function test(name) {
    return `This is ${name} here`;
}
exports.default = test;
// export { add, sub }; // This also work
