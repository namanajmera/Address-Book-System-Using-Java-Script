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
