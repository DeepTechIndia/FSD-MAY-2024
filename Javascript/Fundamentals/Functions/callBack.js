// callBack functions => we can pass a function as a argument to another function

// function sayGoodBye() {
//   console.log("GoodBye!");
// }

// function greet(name, callback) {
//   console.log(`Hello, ${name}`);
//   callback();
// }

// // let a =greet("ABC");

// greet("Abc", sayGoodBye);

/* function mathOperation(x, y, operation) {
  //   switch (operation) {
  //     case add:
  //       return x + y;

  //     case multi:
  //       return x * y;
  //   }

  return operation(x, y);
} */
/* 
function add(a, b) {
  return a + b;
}

add(1, 2);

function subtract(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}

console.log(mathOperation(5, 3, add)); //8
console.log(mathOperation(5, 3, subtract)); //2
console.log(mathOperation(2, 2, multiplication)); //4
 */

function double(num) {
  return num * 2;
}

// double(5);

function square(num) {
  return num * num;
}

square(5);

function transformArray(arr, transform) {
  result = [];
  // transformArray([1, 2, 3, 4, 5], double);

  for (let i = 0; i < arr.length; i++) {
    console.log(result);
  }

  // return result;
  // let a = [1, 2, 3, 4, 5];
  // return transformArray(a, double);

  //   print(result);
  //   print(transformArray);

  //   return transformArray(result, transformArray);
}

// const numbers = [1, 2, 3, 4, 5];
// transformArray(numbers, double); //[2,4,6,8,10]
// console.log(transformArray(numbers, square)); //[1,4,9,16,25]

// function fact(n) {
//   if (n === 0) {
//     return 1;
//   }

//   return n * fact(n - 1);
// }

// 5 * fact(5 - 1) => 5* fact(4)=>{ => 5 * 24 => 120
//     4* fact(3){ 4 * 6 => 24
//         3 * fact(2){ => 3 * 2 => 6
//             2*fact(1){ => 2 * 1 =>2

//                 1 * fact(0) => 1
//             }
//         }
//     }
// }

function filterArray(arr, callBack) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// arr = numbers;
// callBack = isEven;

// result = [2,4]

// if(isEven(2)){

// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

// console.log(isEven(2));
// console.log(isOdd(3));

// console.log(filterArray(numbers, isEven));
// console.log(filterArray(numbers, isOdd));

// Reducing an array

const arr = [1, 2, 3, 4, 5];

// total = 0;
// total =+ num => total + num => 0 + 1 => 1

function reduceArray(arr, callBack, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callBack(accumulator, arr[i]);
  }
  return accumulator;
}

/* reduceArray(arr, sum, 0){
  accumulator = 10;
  for{
    accumulator = sum(0, 1) => 1
    accumulator  = sum(1, 2) => 3
    accumulator =  sum(3, 3) => 6
    acculuator = sum(6, 4) => 10
    acculmulator = sum(10, 5) => 15

  }
}


return 0 + 1 => 1

return 1 + 2 => 3

return 3 + 3 => 6 */

function sum(total, num) {
  return total + num;
}

function product(total, num) {
  return total * num;
}

// 20*  1 => 20
// 20 * 0

console.log(reduceArray(arr, sum, 0)); //15
console.log(reduceArray(arr, product, 1)); //120

const words = ["hello", "world", "javascript"]; //["HELLO", "WORLD", "JAVASCRIPT"]

function capitalize(str) {
  return str.toUpperCase();
}

function mapArray(arr, callBack) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callBack(arr[1]));
    // result.push("HELLO")
    // result.push("WORLD")
  }
  return result;
}

// capitalize("qwerty"); => "QWERTY"
// capitalize("hello") => HELLO

// console.log(capitalize("qwerty"));

console.log(mapArray(words, capitalize)); //["HELLO", "WORLD", "JAVASCRIPT"]

// HIGHER order functions => function which take another function as an argument or an functio can return a new funtion

// for each
// map
// filter
// reduce
