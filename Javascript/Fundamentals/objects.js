// Objects => multiple datas, storing ccollection data
// property and value

// // syntax
// const obj = {
//   property: value,
//   property: value,
//   property: value,
// };

const car = {
  make: "Toyota",
  model: "innova",
  year: 2020,
  color: "blue",
  start: function () {
    console.log("Car started");
  },
};

// varName[0] = 'qwert'

car.owner = "Rudra";

console.log(car);

console.log(car.model);

delete car.year;

console.log(car);

/* 
const book = {
  title: "Life of Pie",
  author: "Harper Lee",
  publishedYear: 1960,
  generes: ["Fiction", "Classic", "Historical"],

  getSummary: function (bookObj) {
    return `${bookObj.title} by ${bookObj.author}`;
  },
}; */

// let product = {
//   id: 101,
//   name: "laptop",
//   price: 899.99,
//   inStock: true,
//   specification: {
//     processor: " intel i7",
//     ram: "16GB",
//     storage: "512Gb SSD",
//   },
// };

// product.warranty = "1 Year";

// product.price = 799.99;

// delete product.inStock;
// console.log(product);

// fetch("url"); =>

// let a = data[1];

// console.log(a.price);

// let a = {
//   id: 102,
//   name: "laptop",
//   price: 899.99,
//   inStock: true,
//   specification: {
//     processor: " intel i7",
//     ram: "16GB",
//     storage: "512Gb SSD",
//   },
// };

// console.log(data[1].price);

// console.log(data.price);

const person = {
  name: "Rajkumar",
  age: 50,
  occupation: "Actor",
};

// console.log(person.name); //Rajkumar

// console.log(person["name"]); //Rajkumar

// console.log(person["occupation"]); //Actor

// object methods

// objects.keys => return a array of objects property name

let keys = Object.keys(person);
console.log(keys); //["name", "age", "occupation"];

let keys1 = Object.keys(car);
console.log(keys1);

// Object.values => return array of objects values

let values = Object.values(person);
console.log(values); //['Rajkumar', 50, 'Actor]

//Object.entries => return array of objects key-value pairs

let entries = Object.entries(person);

console.log(entries); //[['name','rajkumar], ['age', 50], ['occupation', 'Actor']]

console.log(Object.entries(car));

//voids

const listBooks = [
  {
    title: "Life of Pie",
    author: "Harper Lee",
    publishedYear: 1960,
    generes: ["Fiction", "Classic", "Historical"],

    getSummary: function (bookObj) {
      return `${bookObj.title} by ${bookObj.author}`;
    },
  },
  {
    title: "cavemans secrect sauce",
    author: "Harper Lee",
    publishedYear: 1960,
    generes: ["Fiction", "Classic", "Historical"],

    getSummary: function (bookObj) {
      return `${bookObj.title} by ${bookObj.author}`;
    },
  },
  {
    title: "last Chapter",
    author: "Harper Lee",
    publishedYear: 1960,
    generes: ["Fiction", "Classic", "Historical"],

    getSummary: function (bookObj) {
      return `${bookObj.title} by ${bookObj.author}`;
    },
  },
  {
    title: "Alchemist",
    author: "paulo",
    publishedYear: 1960,
    generes: ["Fiction", "Classic", "Historical"],

    getSummary: function (bookObj) {
      return `${bookObj.title} by ${bookObj.author}`;
    },
  },
  {
    title: "Psychology of Money",
    author: "Harper Lee",
    publishedYear: 1960,
    generes: ["Fiction", "Classic", "Historical"],

    getSummary: function (bookObj) {
      return `${bookObj.title} by ${bookObj.author}`;
    },
  },
];

console.log(listBooks.length);
console.log(listBooks[3].author);

let alchemist = listBooks[3];
console.log(alchemist);

console.log(typeof alchemist);
