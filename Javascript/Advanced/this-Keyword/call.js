// 3 methods
/* 1. call
2. apply
3. bind */

// 1.call => invoke a function with a specified this value

// function.call(thisArg, arg1, arg2, )
/* 
function syaHello() {
  console.log(`Hello, ${this.name}`);
}

syaHello();

const person1 = {
  name: "Jhon",
};

syaHello.call(person1);

 */

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

const fullName1 = person.fullName.call(person1, "Bengaluru", "India");
console.log(fullName1);

const fullName2 = person.fullName.call(person2, "Mysore", "India");
console.log(fullName2);

console.log("-------------------------------------");

function introduce(name, age) {
  console.log(`Hello, My name is ${name}, i am ${age} years old`);
}

const person3 = {
  name: "abc",
  age: 20,
};

introduce.call(null, person3.name, person3.age);
