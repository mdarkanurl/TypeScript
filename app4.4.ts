class DataStore<T> { // By using T we can use whatever type we want
    private items: T[] = [];

    addItem(item: T) {
        this.items.push(item);
    }
    getItem(index: number): T {
        return this.items[index];
    }
    removeItem(index: number) {
        this.items.splice(index, 1);
    }
    getAllItem() {
        return this.items;
    }
}

const dataString = new DataStore();

dataString.addItem('Hello');
dataString.addItem(1);
console.log(dataString.getItem(1));
// dataString.removeItem(1);
console.log(dataString.getAllItem());

function getValue<K, V>(value1: V, value2: V, key?: K): V {
    if(key) {
        return value1;
    }

    return value2;
}

let key: string = '';

console.log(
    'It\'s from function',
     getValue<string, boolean>(true, false, key));