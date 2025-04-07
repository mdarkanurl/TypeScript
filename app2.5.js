"use strict";
var _a, _b, _c, _d, _e, _f;
const arrName = [{ myName: "Arkan" }, { nickName: "Jovan" }, { friendName: "Ali" }];
const friendName = (_a = arrName.pop()) === null || _a === void 0 ? void 0 : _a.friendName; // By adding ? we prevent error
console.log(friendName);
console.log(arrName);
const arrayName = [[{ myName: "Arkan" }]];
const myLastName = (_c = (_b = arrayName.pop()) === null || _b === void 0 ? void 0 : _b.pop()) === null || _c === void 0 ? void 0 : _c.myName;
console.log(myLastName);
const lastTest = [[{ name: 'Tim' }]];
(_d = lastTest.pop()) === null || _d === void 0 ? void 0 : _d.pop();
const successEl = (_f = (_e = lastTest.pop()) === null || _e === void 0 ? void 0 : _e.pop()) === null || _f === void 0 ? void 0 : _f.name; // It won't lead to error 
const errorEl = lastTest.pop().pop().name; // It'll lead to error 
console.log(successEl);
console.log(errorEl);
