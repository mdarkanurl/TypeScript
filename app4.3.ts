class Man {
    static instanceCount: number = 0;
    name: string

    constructor(name: string) {
        Man.instanceCount++;
        this.name = name;
    }

    static decreaseCount() {
        this.instanceCount--;
    }
}

const man1 = new Man('Angela');
console.log(Man.instanceCount);


const man2 = new Man('Natasha');
console.log(Man.instanceCount);


const man3 = new Man('Sarah');
console.log(Man.instanceCount);

Man.decreaseCount();
console.log(Man.instanceCount);