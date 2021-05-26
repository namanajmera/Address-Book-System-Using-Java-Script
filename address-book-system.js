class Contact {
  // Constructor
  constructor(...parameters) {
    this.firstName = parameters[0];
    this.lastName = parameters[1];
    this.address = parameters[2];
    this.city = parameters[3];
    this.state = parameters[4];
    this.zip = parameters[5];
    this.phoneNumber = parameters[6];
    this.email = parameters[7];
  }

  //   Getter of First name
  get firstName() {
    return this._firstName;
  }
  // Setter of First Name
  set firstName(firstName) {
    const FIRST_NAME_REGEX = RegExp("^[A-Z]{1}[a-zA-Z]{2,}");
    if (FIRST_NAME_REGEX.test(firstName)) this._firstName = firstName;
    else throw "First Name: " + firstName + " is Invalid";
  }

  //   Getter of Last name
  get lastName() {
    return this._lastName;
  }
  // Setter of Last Name
  set lastName(lastName) {
    const LAST_NAME_REGEX = RegExp("^[A-Z]{1}[a-zA-Z]{2,}");
    if (LAST_NAME_REGEX.test(lastName)) this._lastName = lastName;
    else throw "Last Name: " + lastName + " is Invalid";
  }

  //   Getter of Address name
  get address() {
    return this._address;
  }
  // Setter of Address Name
  set address(address) {
    const ADDRESS_NAME_REGEX = RegExp("^[a-zA-Z0-9]{4,}");
    if (ADDRESS_NAME_REGEX.test(address)) this._address = address;
    else throw "Address Name: " + address + " is Invalid";
  }

  //   Getter of City name
  get city() {
    return this._city;
  }
  // Setter of City Name
  set city(city) {
    const CITY_NAME_REGEX = RegExp("^[a-zA-Z0-9]{4,}");
    if (CITY_NAME_REGEX.test(city)) this._city = city;
    else throw "City Name: " + city + " is Invalid";
  }

  //   Getter of State name
  get state() {
    return this._state;
  }
  // Setter of State Name
  set state(state) {
    const STATE_NAME_REGEX = RegExp("^[a-zA-Z0-9]{4,}");
    if (STATE_NAME_REGEX.test(state)) this._state = state;
    else throw "State Name: " + state + " is Invalid";
  }

  //   Getter of ZIP
  get zip() {
    return this._zip;
  }
  // Setter of ZIP
  set zip(zip) {
    const ZIP_REGEX = RegExp("^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$");
    if (ZIP_REGEX.test(zip)) this._zip = zip;
    else throw "ZIP: " + zip + " is Invalid";
  }

  //   Getter of Phone Number
  get phoneNumber() {
    return this._phoneNumber;
  }
  // Setter of Phone Number
  set phoneNumber(phoneNumber) {
    const PHONE_NUMBER_REGEX = RegExp(
      "([0]{1}\\s|[+][9]{1}[1]{1}\\s)?[6-9]{1}[0-9]{9}"
    );
    if (PHONE_NUMBER_REGEX.test(phoneNumber)) this._phoneNumber = phoneNumber;
    else throw "Phone Number : " + phoneNumber + " is Invalid";
  }

  //   Getter of Email id
  get email() {
    return this._email;
  }
  // Setter of Email id
  set email(email) {
    const EMAIL_ID_REGEX = RegExp(
      "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z0-9]{2,6}$"
    );
    if (EMAIL_ID_REGEX.test(email)) this._email = email;
    else throw "Email id: " + email + " is Invalid";
  }

  toString() {
    return (
      "First Name: " +
      this.firstName +
      " | Last Name: " +
      this.lastName +
      " | Address: " +
      this.address +
      " | city: " +
      this.city +
      " | State: " +
      this.state +
      " | Zip: " +
      this.zip +
      " | phoneNumber: " +
      this.phoneNumber +
      " | email: " +
      this.email +
      "\n"
    );
  }
}

// UC1 -Create Contact Class
let contact = new Contact(
  "Naman",
  "Ajmera",
  "Chaksu",
  "Jaipur",
  "Rajasthan",
  "303901",
  "8696696426",
  "cool.naman.ajmera@gmail.com"
);
console.log(contact.toString());

// UC2: Checking the Valid and Invalid Inputs

try {
  contact.firstName = "Jo";
} catch (error) {
  console.error(error);
}
try {
  contact.lastName = "Jo";
} catch (error) {
  console.error(error);
}
try {
  contact.address = "Hom";
} catch (error) {
  console.error(error);
}
try {
  contact.city = "Jai";
} catch (error) {
  console.error(error);
}
try {
  contact.state = "Raj";
} catch (error) {
  console.error(error);
}
try {
  contact.zip = 3039011;
} catch (error) {
  console.error(error);
}
try {
  contact.phoneNumber = 8696696426;
} catch (error) {
  console.error(error);
}
try {
  contact.email = "cool.naman@@gmail.com";
} catch (error) {
  console.error(error);
}

console.log("\n Contact After setting Feilds:- \n" + contact.toString());

// UC3- Create a new Address Book Array

let addressBookArray = new Array();
addressBookArray.push(contact);
var contact1 = new Contact(
  "Ankit",
  "Gupta",
  "Sanganer",
  "Jaipur",
  "Rajasthan",
  302029,
  8239234444,
  "ankit.gupta@gmail.com"
);
addressBookArray.push(contact1);

//   Printing the array
console.log("ADDRESS BOOK ARRAY: ");
addressBookArray.forEach((contact) => console.log(contact.toString()));

// UC4 Find Exising contact  person using their name and edit it.

try {
  editField("Naman", "Ajmera", "address", "Sanganer");
} catch (error) {
  console.log(error);
}

function findContact(firstName, lastName) {
  let contact = addressBookArray.find(
    (contact) =>
      contact._firstName == firstName && contact._lastName == lastName
  );
  if (contact != undefined) {
    return contact;
  } else
    throw (
      "\n Contact : " +
      firstName +
      " " +
      lastName +
      " doesn't exit in your Address Book Array."
    );
}

function editField(firstName, lastName, fieldName, updateField) {
  try {
    let contact = findContact(firstName, lastName);
    switch (fieldName) {
      case "firstName":
        contact._firstName = updateField;
        break;
      case "lastName":
        contact._lastName = updateField;
        break;
      case "address":
        contact._address = updateField;
        break;
      case "city":
        contact._city = updateField;
        break;
      case "state":
        contact._state = updateField;
        break;
      case "zip":
        contact._zip = updateField;
        break;
      case "phoneNumber":
        contact._phoneNumber = updateField;
        break;
      case "email":
        contact._email = updateField;
        break;

      default:
        throw "Feild for Updation : " + fieldName + " is Invalid";
    }
    console.log("ADDRESS BOOK ARRAY AFTER UPDATING CONTACT");
    addressBookArray.forEach((contact) => console.log(contact.toString()));
  } catch (e) {
    console.error(e);
  }
}

// UC5 Delete the contact by person name
try {
  console.log("Deleting a contact...!!!");
  deleteField("Ankit", "Gupta");
} catch (error) {
  console.error(error);
}
function deleteField(firstName, lastName) {
  try {
    let contactIndex = addressBookArray.findIndex(
      (contact) =>
        contact._firstName == firstName && contact._lastName == lastName
    );
    if (contactIndex != -1) {
      addressBookArray.splice(contactIndex, 1);
      console.log("ADDRESS BOOK ARRAY AFTER DELETE CONTACT:- ");
      addressBookArray.forEach((contact) => console.log(contact.toString()));
    }
  } catch (error) {
    console.error(error);
  }
}

// UC6 Find the total number of contact using reduce medtod

function totalCounts(current) {
  return current + 1;
}

let totalContact = addressBookArray.reduce(totalCounts, 0);
console.log("Total number of contact are:- " + totalContact);

// UC7 Ensure that no duplicate contact

function addContact(contactToAdd) {
  let alreadyExistContact = isExists(
    contactToAdd.firstName,
    contactToAdd.lastName
  );
  if (!alreadyExistContact) {
    addressBookArray.push(contactToAdd);
    console.log(
      "Contact with " + contactToAdd.firstName + " is added successfully...!!!!"
    );
  } else
    throw "Contact with " + contactToAdd.firstName + " is already exist..!!!";
}

function isExists(firstName, lastName) {
  return addressBookArray.find(
    (contact) => contact.firstName == firstName && contact.lastName == lastName
  );
}

let newContact = new Contact(
  "Naman",
  "Ajmera",
  "Chaksu",
  "Jaipur",
  "Rajasthan",
  303901,
  8696696426,
  "cool.naman.ajmera@gmail.com"
);
let newContact1 = new Contact(
  "Arpit",
  "Ajmera",
  "Chaksu",
  "Jaipur",
  "Rajasthan",
  303901,
  8576894031,
  "arpit.ajmera@gmail.com"
);
try {
  addContact(newContact);
} catch (error) {
  console.error(error);
}

try {
  addContact(newContact1);
} catch (error) {
  console.error(error);
}

// UC8-Ability to search Person in a particular City or State

function searchContact(field, fieldName) {
  switch (field) {
    case "city":
      console.log("All Names of " + field + " " + fieldName + " are:- ");
      searchByCity(fieldName);
      break;
    case "state":
      console.log("All Names of " + field + " " + fieldName + " are:- ");
      searchByState(fieldName);
      break;
    default:
      console.log("You entered wrong choice...!!!");
      break;
  }
}

function searchByCity(cityName) {
  addressBookArray
    .filter((contact) => contact.city == cityName)
    .forEach((contact) =>
      console.log(contact.firstName + " " + contact.lastName)
    );
}

function searchByState(stateName) {
  addressBookArray
    .filter((contact) => contact.state == stateName)
    .forEach((contact) =>
      console.log(contact.firstName + " " + contact.lastName)
    );
}

console.log();
try {
  searchContact("state", "Rajasthan");
} catch (error) {
  console.error(error);
}

console.log();
try {
  searchContact("city", "Jaipur");
} catch (error) {
  console.error(error);
}

//UC9 : View All Contacts Grouped by City or State
try {
  viewContacts("state");
  viewContacts("city");
} catch (error) {
  console.error(error);
}
function viewContacts(field) {
  let fieldToContactMap = new Map();
  switch (field) {
    case "city":
      fieldToContactMap = viewByCity();
      console.log("ALL CONTACTS BY CITY : ");
      console.log(fieldToContactMap);
      break;
    case "state":
      fieldToContactMap = viewByState();
      console.log("ALL CONTACTS BY STATE : ");
      console.log(fieldToContactMap);
      break;
    default:
      throw "View Field : " + field + " is Invalid!";
  }
}
function viewByCity() {
  let cityToContactMap = new Map();
  addressBookArray.forEach((contact) => {
    if (cityToContactMap.has(contact.city)) {
      cityToContactMap.get(contact.city).push(contact);
    } else {
      cityToContactMap.set(contact.city, [contact]);
    }
  });
  return cityToContactMap;
}
function viewByState() {
  let stateToContactMap = new Map();
  addressBookArray.forEach((contact) => {
    if (stateToContactMap.has(contact.state)) {
      stateToContactMap.get(contact.state).push(contact);
    } else {
      stateToContactMap.set(contact.state, [contact]);
    }
  });
  return stateToContactMap;
}
