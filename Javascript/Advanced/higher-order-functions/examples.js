/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers);
// oddNumbers = [1, 3, 5, 7, 9];

const squaredNumbers = oddNumbers.map((num) => num * num);
console.log(squaredNumbers);
// squaredNumbers = [1, 9, 25, 49, 81]

const sumOfSquares = squaredNumbers.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(sumOfSquares);

const summing = numbers
  .filter((num) => num % 2 !== 0)
  .map((num) => num * num)
  .reduce((sum, num) => {
    return sum + num;
  }, 0);

   */

/* const products = [
  { name: "laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 500 },
  { name: "Mouse", price: 50 },
  { name: "Tablet", price: 400 },
];

const expensiveProducts = products.filter((product) => product.price >= 100);
console.log(expensiveProducts);

const discountedPrices = expensiveProducts.map(
  (product) => product.price * 0.9
);
console.log(discountedPrices);

const totalDiscountPrice = discountedPrices.reduce((totalDiscount, price) => {
  return totalDiscount + price;
}, 0);

console.log(totalDiscountPrice);
 */
/* const totalAfterDiscoun = products
  .filter((product) => product.price >= 100)
  .map((product) => product.price * 0.9)
  .reduce((totalDiscount, price) => {
    return totalDiscount + price;
  }, 0);

console.log(totalAfterDiscoun); */

// node js => runtime environment

// js is a languiage for browser => machine code => V8 engine

console.log("Hello World!");
