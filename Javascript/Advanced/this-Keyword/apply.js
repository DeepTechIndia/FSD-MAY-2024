// apply => specify the this keyword, array of arguments

// function.apply(thisArg, [argsArray] )

/* function introduce(name, age) {
  console.log(`Hello, My name is ${name}, i am ${age} years old`);
}

const person = {
  name: "abc",
  age: 20,
};

introduce.apply(null, [person.name, person.age]); */
console.log("------------------------------------------------");

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

const fullName1 = person.fullName.apply(person1, ["Bengaluru", "India"]);
console.log(fullName1);

const fullName2 = person.fullName.apply(person2, ["Mysore", "India"]);
console.log(fullName2);
