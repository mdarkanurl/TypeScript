"use strict";
class Car {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`hello, it\'s ${this.name}`);
    }
    getName() {
        if (this.name.length < 2)
            return '';
        return this.name;
    }
    setName(name) {
        if (name.length === this.name.length) {
            this.name = name;
        }
    }
}
class Me extends Car {
    callCar() {
        console.log('Is it working', this.name);
    }
}
const p1 = new Car('BMW');
const p2 = new Me('Mia');
p1.greet();
p2.callCar();
console.log('It\'s from getName', p1.getName());
p1.setName('Tes');
console.log('It\'s from getName', p1.getName());
class Country {
    constructor(countryName, continentName) {
        this.countryName = countryName;
        this.continentName = continentName;
        this.whereIsIt(continentName);
    }
    whereIsIt(continent) {
        console.log(`${this.countryName} is part of ${continent}`);
    }
}
new Country('Bangladesh', 'Asia');
class Animal {
    move(duration) {
        console.log('Moving along...');
        this.makeSound(duration);
    }
}
class Dog extends Animal {
    makeSound(duration) {
        console.log('Woof woof');
    }
}
class Cat extends Animal {
    makeSound(duration) {
        console.log('Meow meow');
    }
}
const dog = new Dog();
dog.move(20);
