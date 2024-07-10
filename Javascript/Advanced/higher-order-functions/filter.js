// filter => iterates through each and every element and returns a new array

// Array.filter(callback, index, array);

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumber = numbers.filter(function (number) {
  return number % 2 === 0;
}); */

// console.log(evenNumber);

/* function funcName() {

}

const func_name = function () {

};

const arr = () => a% */
/* 
const oddNumbers = numbers.filter((number) => {
  return number % 2 !== 0;
});

console.log(oddNumbers);
 */

const people = [
  { name: "abc", age: 17 },
  { name: "def", age: 22 },
  { name: "ghi", age: 15 },
  { name: "xyz", age: 19 },
  { name: "xyz", age: 20 },
];

const adults = people.filter(function (person) {
  return person.age > 18;
});

console.log(adults);

const greaterThaneighteen = people.filter((person) => person.age > 18);
console.log(greaterThaneighteen);

const strings = ["hello", "", "world", "", "", "J avascript"];

const nonEmptyStrings = strings.filter((str) => str.length > 1);
console.log(nonEmptyStrings);

const products = [
  { name: "laptop", price: 1000, available: true },
  { name: "Phone", price: 500, available: false },
  { name: "Tablet", price: 300, available: true },
  { name: "Monitor", price: 150, available: true },
];

const affordableAvailableProducts = products.filter(
  (product) => product.price < 600 && product.available
);

console.log(affordableAvailableProducts);

const tasks = [
  {
    task: "Do Laundry",
    complete: true,
  },
  {
    task: "Buy Groceries",
    complete: false,
  },
  {
    task: "Clean Room",
    complete: false,
  },
  {
    task: "Cook Dinner",
    complete: true,
  },
];

const incompleteTasks = tasks.filter((task) => !task.complete);
console.log(incompleteTasks);
