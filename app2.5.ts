const arrName = [{myName: "Arkan"}, {nickName: "Jovan"}, {friendName: "Ali"}];

const friendName = arrName.pop()?.friendName; // By adding ? we prevent error
console.log(friendName);
console.log(arrName);

const arrayName = [[{myName: "Arkan"}]];

const myLastName = arrayName.pop()?.pop()?.myName;
console.log(myLastName);

const lastTest = [[{name: 'Tim'}]];

lastTest.pop()?.pop()
const successEl = lastTest.pop()?.pop()?.name; // It won't lead to error 
const errorEl = lastTest.pop()!.pop()!.name; // It'll lead to error 
console.log(successEl);
console.log(errorEl);