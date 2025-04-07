"use strict";
class Myself {
    constructor(firstName, lastname) {
        this.firstName = firstName;
        this.lastName = lastname;
    }
}
class You {
    constructor(firstaName) {
        this.firstName = firstaName;
    }
}
function isMyself(me) {
    return me.lastName !== undefined;
}
function getName(boy) {
    if (isMyself(boy)) {
        console.log(`My name is: ${boy.firstName} ${boy.lastName}`);
    }
    else {
        console.log(`Your name is: ${boy.firstName}`);
    }
}
function getNameByObject(boy) {
    if (isMyself(boy)) {
        console.log(`My name is: ${boy.firstName} ${boy.lastName}`);
    }
    else {
        console.log(`Your name is: ${boy.firstName}`);
    }
}
const myselfVar = new Myself('Mohammad', 'Arkan');
const you = new You('Jovan');
getName(myselfVar);
getName(you);
getNameByObject({ firstName: 'Mohammad', lastName: 'Ali' });
getNameByObject({ firstName: 'Kafi' });
