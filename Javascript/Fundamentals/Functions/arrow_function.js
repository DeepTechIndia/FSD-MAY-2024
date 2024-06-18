// ES6
// shorter syntax

// syntax

// const functionName = (parameter) => { //function body};4

const greet = (name) => `Welcome ${name}`;
console.log(greet("shakthi"));

const add = (a, b) => {
  return a + b;
};
console.log(add(5, 3));

const isEven = (num) => {
  return num % 2 === 0;
};

console.log(isEven(0)); //true
console.log(isEven(4)); //true
console.log(isEven(3)); //false

const welcome = (hour) => (hour < 12 ? "Good Morning" : "Good Afternoon");

console.log(welcome(13)); //Good Afternoon
console.log(welcome(10)); //Good Morning

const categorizeAge = (age) => {
  if (age < 13) {
    return "Child";
  } else if (age >= 13 && age < 20) {
    return "teenager";
  } else if (age >= 20 && age < 65) {
    return "Adult";
  } else {
    return "Senior";
  }
};

console.log(categorizeAge(10)); //Child
console.log(categorizeAge(20)); //Adult
console.log(categorizeAge(60)); // Adult
console.log(categorizeAge(65)); // Senior
