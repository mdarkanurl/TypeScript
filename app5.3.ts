class Myself {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastname: string) {
        this.firstName = firstName;
        this.lastName = lastname;
    }
}

class You {
    firstName: string;

    constructor(firstaName: string) {
        this.firstName = firstaName;
    }
}

function isMyself(me: Myself | You): me is Myself {
    return(me as Myself).lastName !== undefined;
}

function getName(boy: Myself | You) {
    if(isMyself(boy)) {
        console.log(`My name is: ${boy.firstName} ${boy.lastName}`);
    } else {
        console.log(`Your name is: ${boy.firstName}`);
    }
}

function getNameByObject(boy: Myself | You) {
    if(isMyself(boy)) {
        console.log(`My name is: ${boy.firstName} ${boy.lastName}`);
    } else {
        console.log(`Your name is: ${boy.firstName}`);
    }
}

const myselfVar = new Myself('Mohammad', 'Arkan');
const you = new You('Jovan');

getName(myselfVar);
getName(you);

getNameByObject({ firstName: 'Mohammad', lastName: 'Ali' });
getNameByObject({ firstName: 'Kafi' });