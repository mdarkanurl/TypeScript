"use strict";
function acceptVal(val) {
}
const contact = {
    name: 'Mohammad Arkan',
    email: 'mdarkanurl@gmail.com',
    phone: ''
};
function addContact(contact) {
    if ('birthday' in contact) {
        console.log(`${contact.name} ${contact.birthday}`);
    }
    else {
        console.log(`${contact.companyName} ${contact.workPhone}`);
    }
}
addContact({ companyName: 'Bookhub', workPhone: '01614420' });
