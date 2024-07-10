// reduce => returns only a single value

// Array.reduce(accumulator, currentvalue, index, array);

/* const numbers = [1, 2, 3, 4, 5];

summation = 0;

const sum = numbers.reduce(function (summation, currentValue) {
  return summation + currentValue;
}, 0);

console.log(sum); */

const numbers = [1, 3, 5, 7, 16, 22, 0, 7];

// max = arr[0];

const max = numbers.reduce((max, number) => {
  return number > max ? number : max;
}, numbers[0]);

console.log(max);

// {"apple": 2, "mango":1, orange:1, "banana" : 1, }

// counts = {};
// for()

// if
// counts["apple"] += 1

// else
// counts["apple"] = 1

const fruits = [
  "apple",
  "mango",
  "orange",
  "banana",
  "apple",
  "mango",
  "mango",
];

const fruitCount = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

// accumulator["apple"] = (accumulator["apple"] || 0) + 1;
console.log(fruitCount);

const counting = fruits.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue] += 1;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(counting);

/* const tasks = {
  task: "Do Laundry",
  complete: true,
};

tasks["apple"] = 1;

console.log(tasks); */

/* const transactions = [
  { type: "deposit", amount: 1000 },
  { type: "withdrawal", amount: 200 },
  { type: "deposit", amount: 500 },
  { type: "withdrawal", amount: 80 },
];

const balance = transactions.reduce((balance, transaction) => {
  if (transaction.type === "deposit") {
    return balance + transaction.amount;
  } else if (transaction.type === "withdrawal") {
    return balance - transaction.amount;
  }
  return balance;
}, 0);

console.log(balance);
 */
