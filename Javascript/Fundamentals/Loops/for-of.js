const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let element of numbers) {
  console.log(element);
}

function filterEvenNumbers(arr) {
  const evenNumbers = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }
  return evenNumbers;
}

console.log(filterEvenNumbers(numbers));

const message = "Hello World";

for (let char of message) {
  console.log(char);
}
