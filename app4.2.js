"use strict";
class Cow {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    speak() {
        console.log(`I'm ${this.name} and I'm ${this.color}`);
    }
    test() {
        console.log(`I'm ${this.name} and I'm just testting`);
    }
}
const cow = new Cow('Dani', 'Black and White'); // I can access all method of Cow class
// cow.speak();
// cow.test();
const petCow = new Cow('Ava', 'Brown'); // I can access only use method of Pet
// petCow.speak();
class Rabbit {
    speak() {
        console.log('I\'m a Rabbit');
    }
}
const rabbit = new Rabbit();
const pets = [petCow, rabbit];
// pets[1].speak();
function makeKnown(start) {
    start.speak();
}
makeKnown(rabbit);
makeKnown(cow);
makeKnown(petCow);
