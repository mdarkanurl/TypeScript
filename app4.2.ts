interface Pet {
    speak(): void
}

class Cow implements Pet {
    private name: string;
    private color: string;

    constructor(name: string, color: string) {
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

const petCow: Pet = new Cow('Ava', 'Brown');  // I can access only use method of Pet
// petCow.speak();

class Rabbit implements Pet {
    speak(): void {
        console.log('I\'m a Rabbit');
    }
}

const rabbit = new Rabbit();
const pets: Pet[] = [petCow, rabbit];
// pets[1].speak();

function makeKnown(start: Pet) {
    start.speak();
}

makeKnown(rabbit);
makeKnown(cow);
makeKnown(petCow);