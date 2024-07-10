// rest parameter => store rest of the element in an array

const numbers = [1, 2, 3, 4, 5, 6];

const [first, ...rest] = numbers;

console.log(first);
console.log(rest);

const person = {
  name: "abc",
  age: 30,
  city: "New York",
};

const { name, ...remaining } = person;
console.log(name);
console.log(remaining);

function sum(...numbers) {
  console.log(numbers);

  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6));
