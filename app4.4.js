"use strict";
class DataStore {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItem(index) {
        return this.items[index];
    }
    removeItem(index) {
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
function getValue(value1, value2, key) {
    if (key) {
        return value1;
    }
    return value2;
}
let key = '';
console.log('It\'s from function', getValue(true, false, key));
