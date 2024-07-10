// foreach => loop through each element in an array and perform the task

// Array.forEach(fn, i, arr);

// let numbers = [1, 2, 3, 4, 5];

// function call(element) {
//   console.log(element);
// }

/* numbers.forEach(function (element) {
  console.log(element);
}); */

/* let fruits = ["Apple", "Banana", "Cherry", "Dates"];

fruits.forEach(function (fruit) {
  console.log(fruit);
}); */
/* 
let languages = ["Javascript", "Python", "Java", "Ruby"];

languages.forEach(function (language, index) {
  console.log(`Language ${index + 1} : ${language}`);
}); */
/* 
function printLanguage(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printLanguage(languages);
 */

/* const grades = [85, 92, 78, 90, 88];

let totalSum = 0;

grades.forEach(function (grade, index, array) {
  totalSum += grade;
  console.log(`Student ${index + 1} : Grade = ${grade}`);
});

let classAverage = totalSum / grades.length;

console.log(`Class Average : ${classAverage}`);
 */
let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = [];

numbers.forEach(function (number) {
  doubledNumbers.push(number * 2);
});

console.log(doubledNumbers);

let shoppingCart = [
  {
    item: "Book",
    price: 12.99,
  },
  {
    item: "Pen",
    price: 1.49,
  },
  {
    item: "NoteBook",
    price: 4.99,
  },
  {
    item: "Pencil",
    price: 0.99,
  },
];

let totalCost = 0;

// product = {
//   item: "Book",
//   price: "12.99",
// };

shoppingCart.forEach(function (product) {
  totalCost += product.price;
});

console.log(`Total cost: ${totalCost}`);
