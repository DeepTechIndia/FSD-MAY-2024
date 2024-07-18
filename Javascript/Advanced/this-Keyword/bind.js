// bind => this keyword, args1, args2.
// it wont call the function immediately => returns a new function

// function.bind(thisArgs, arg1, arg2)

const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  },
};

const person1 = {
  firstName: "vicky",
  lastName: "Kumar",
};

const person2 = {
  firstName: "Karan",
  lastName: "kumar",
};

const boundPerson1 = person.fullName.bind(person1, "Bengaluru", "India");
console.log(boundPerson1());

// fullName: function (Bengaluru, India) {
//     return Karan + " " + kumar + " " + city + " " + country;
//   },

const boundPerson2 = person.fullName.bind(person2, "NewYork", "USA");
console.log(boundPerson2());

const module1 = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

console.log(module1.getX());

const getX = module1.getX;
console.log(getX());

// function getX() {
//   return this.x;
// }

const boundGetX = module1.getX.bind(module1);

console.log(boundGetX());
