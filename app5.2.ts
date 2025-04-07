type stringOrNumber = string | number | boolean;

function acceptVal(val: stringOrNumber) {
    
}

interface BusinessPartner {
    name: string;
}

interface ContactDetails {
    email: string;
    phone: string
}

type BusinessContact = BusinessPartner & ContactDetails;

const contact: BusinessContact = {
    name: 'Mohammad Arkan',
    email: 'mdarkanurl@gmail.com',
    phone: ''
}

interface Individual {
    name: string;
    birthday: Date;
}

interface Organization {
    companyName: string;
    workPhone: string;
}

type ContactType = Individual | Organization;
type CompContact = Individual & Organization;

function addContact(contact: ContactType) {
    if('birthday' in contact) {
        console.log(`${contact.name} ${contact.birthday}`);
    } else {
        console.log(`${contact.companyName} ${contact.workPhone}`);
    }
}

addContact({ companyName: 'Bookhub', workPhone: '01614420' });