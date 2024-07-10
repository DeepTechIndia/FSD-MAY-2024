// destructuring => unpack the values from arrays or objects into a new variable

const fruits = ["apple", "cherry", "mango", "dates"];

/* const first = fruits[0];
const second = fruits[1];
const third = fruits[2];

console.log(first, second, third); */

const [a, b, c] = fruits;
console.log(a);
console.log(b);
console.log(c);

const [firstFruit, , thirdFruit] = fruits;
console.log(firstFruit, thirdFruit);

const numbers = [1, 2, 3, 4, 5, 6];
const [first, , third, , fifth, sixth] = numbers;

console.log(first, third, fifth, sixth);
// console.log(second, fourth);

const fruit = ["Apple", "Mango"];

const [firstValue, secondValue = "defaultValue"] = fruit;

console.log(firstValue, secondValue);

// Object Destructuring
/* 
const person = {
  name: "abc",
  age: 30,
  city: "New York",
};

const { name, age, city } = person;
console.log(name, age, city);

const { name: fullName, age: years, city: hometown } = person;

console.log(fullName, years, hometown);

const person2 = { fname: "xyz", citys: "Delhi", ages: 30 };
const { fname, ages = 25, citys = "Unknown" } = person2;

console.log(fname, ages, citys);


 */

const person = {
  name: "abc",
  age: 30,
  address: {
    city: "Bengaluru",
    zip: 123456,
  },
};

const {
  name,
  address: { city, zip },
} = person;

console.log(name, city, zip);

const colors = ["red", ["blue", "yellow"], "white"];
const [firstColor, [secondColor, thirdColor]] = colors;

console.log(firstColor, secondColor, thirdColor);

function printColors([first, second, third]) {
  console.log(first);
  console.log(second);
  console.log(third);
}
const x = ["blue", "yellow", "white"];

printColors(x);

// arr = x;

const person3 = {
  name: "abc",
  age: 30,
  city: "New York",
};

function printDetails({ name, age, city }) {
    
  console.log(name);
  console.log(age, city);
}

printDetails(person3);
