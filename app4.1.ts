class Car {
    // private name: string; // we can't access name outside of this class
    // protected name: string; // only this and subClass can access
       name: string; // everyone can access
    constructor(name: string) {
        this.name = name;
    }

    greet() {
        console.log(`hello, it\'s ${this.name}`);
    }

    getName() {
        if(this.name.length < 2) return ''
        return this.name
    }

    setName(name: string) {
        if(name.length === this.name.length) {
            this.name = name
        }
    }
}

class Me extends Car {
    callCar() {
        console.log('Is it working', this.name)
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
    countryName: string;
    continentName: string;
    constructor(countryName: string, continentName: string) {
        this.countryName = countryName;
        this.continentName = continentName;
        this.whereIsIt(continentName)
    }

    private whereIsIt(continent: string) { // Only accessable from this class
        console.log(`${this.countryName} is part of ${continent}`);
    }
}

new Country('Bangladesh', 'Asia');

abstract class Animal {
    abstract makeSound(duration: number): void;

    move(duration: number) {
        console.log('Moving along...');
        this.makeSound(duration);
    }
}

class Dog extends Animal {
    makeSound(duration: number) {
        console.log('Woof woof');
    }
}


class Cat extends Animal {
    makeSound(duration: number) {
        console.log('Meow meow');
    }
}

const dog = new Dog();
dog.move(20);