// map => execute each and every element in an array

// Array.map(function(currentValue, index, array))

// let numbers = [1, 2, 3, 4, 5];

// let doubledNumbers = numbers.map(function (number) {
//   return number * 2;
// });

// console.log(doubledNumbers);

/* let users = [
  { firstName: "Abc", lastName: "xyz" },
  { firstName: "Abc", lastName: "xyz" },
  { firstName: "Abc", lastName: "xyz" },
  { firstName: "Abc", lastName: "xyz" },
];

let fullNames = users.map(function (user) {
  //   return user.firstName + " " + user.lastName;
  return `${user.firstName} ${user.lastName}`;
});

console.log(fullNames);

 */
/* 
let fruitsNames = ["apple", "banana", "cherry"];

let fruits = fruitsNames.map(function (fruit) {
  return fruit.toUpperCase();
});

console.log(fruits);

const words = fruitsNames.map(function (fruit) {
  return fruit.charAt(0).toUpperCase() + fruit.slice(1);
});
console.log(words); */

let orders = [
  { orderId: 1, customer: { name: "vidya", address: "123 Bengaluru" } },
  { orderId: 2, customer: { name: "Yogesh", address: "124 Bengaluru" } },
  { orderId: 3, customer: { name: "rudra", address: "1235 Bengaluru" } },
  { orderId: 4, customer: { name: "harsha", address: "1236 Bengaluru" } },
];

let customerNames = orders.map(function (order) {
  return order.customer.name;
});

console.log(customerNames);
