// JSON => Javascript Object Notation
// data interchange format
// transmitting data in wev application between server and client
// collection of name/value pairs
// ordered list of values

const user = {
  name: "ABC",
  age: 30,
  isStudent: false,
  corses: ["Math", "Science", "English"],
  address: {
    city: "Bengaluru",
    zip: "100001",
  },
};

// JSON.stringify(value, replacer, space);

const jsonString = JSON.stringify(user);
console.log(jsonString, typeof jsonString);
console.log(jsonString[0]);

const user1 = JSON.parse(jsonString);
console.log(user1);
console.log(user1.name);

// res.json()
