// const person = {
//   name: "Jhon",
//   age: 25,
//   city: "New York",
// };

// for(let key in object)

// for (let key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// const expenses = {
//   food: 200,
//   rent: 1000,
//   utilities: 300,
//   transportation: 150,
// };

// function calculateTotalExpenses(obj) {
//   let total = 0;
//   for (let key in obj) {
//     total += obj[key];
//   }

//   return total;
// }

// const totalExpenses = calculateTotalExpenses(expenses);
// console.log(totalExpenses);

const colors = ["red", "green", "blue"];

function logArrayElements(arr) {
  for (const i in arr) {
    console.log(`Index is ${i} : ${arr[i]}`);
  }
}

logArrayElements(colors);
