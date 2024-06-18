//functions => reusable piece of code
// fundamental building blocks of the javascript

// console.log("Hello World!");
//ertyu
//ertyu
//ertyu
//ertyu
//ertyu
//ertyu
//ertyu
//ertyu
//ertyu
/* console.log("Hello World!");

let a = 1;
let b = 2;
let sum = a + b;

let c = 3;
let d = 4;
let sum2 = c + d;

console.log("Hello World!"); */

//3 ways to a create a function
// 1. function declaration
// 2. function expression
// 3. Arrow function

// Function Declaration

// function functionName() {
//   // code to execute
// //   function body
// }
/* 
function sayHello() {
  console.log("Hello");
}

sayHello(); //calling/invoking
sayHello();
sayHello();
sayHello();
let c = 3;
let d = 4;
let sum2 = c + d;
console.log(sum2);
sayHello();

 */

// function greet(name) {
//   console.log(`Welcome  ${name}  to javascript Course`);
// }

// greet("Pradeep");

// greet("Yogesh");

// greet();

// adding two numbers

/* function sum(num1, num2) {
  let sum = num1 + num2;
  console.log(`summation of ${num1} + ${num2} is ${sum}`);
}

sum(1, 2);
sum(5, 6);
sum(6, 6);
sum(7, 6); */

/* function multiplication(a, b) {
  let multipl = a * b;
  console.log(multipl);
}

multiplication(2, 3); //6
multiplication(9, 6); //54
 */
/* 
function isEven(a) {
  //     if (a % 2 === 0) {
  //     console.log(`${a} is even`);
  //   } else {
  //     console.log(`${a} is odd`);
  //   }

  let evenOrOdd = a % 2 === 0 ? `${a} is even` : `${a} is odd`;
  console.log(evenOrOdd);
}

isEven(5);
isEven(4);
isEven(6);
 */

//findMaxNum

// 1 2 3

// 1 > 2;
// 1 > 3;
/* 
function findMax(a, b, c) {
  if (a > b && a > c) {
    console.log(`${a} is greater than ${b} and ${c}`);
  } else if (b > a && b > c) {
    console.log(`${b} is greater than ${a} and ${c}`);
  } else {
    console.log(`${c} is greater than ${a} and ${b}`);
  }
}

findMax(1, 2, 3); //3
findMax(20, 40, 30); //40
findMax(50, 45, 32); //50
 */
// (a = 5), (b = 3);
// let a = a + b;

//return => statement in javascript  to stop the execution of a function and return a value from that function
// return statement executed , the functions exits immediately, the specified op/value will be sent to the caller ffuntion

/* function multiplication(a, b) {
  let multipl = a * b;

  //console.log(multipl);
  return multipl;
  //   console.log("qwertyui");
} */

// let op = multiplication(1, 2);
// console.log(multiplication(1, 2));

// let a = "23";
// let b = Number(a);
// console.log(b); //23
// console.log(typeof b);
// console.log(typeof a);
// console.log(Number(a));

/* function juiceMixer(fruit) {
  let juice = `${fruit} juice is ready`;
  return juice;
}

let glass = juiceMixer("apple");
console.log(glass); */
/* 
function isEven(a) {
  //   if (a % 2 === 0) {
  //     // console.log(`${a} is even`);
  //     return `${a} is even`;
  //   } else {
  //     // console.log(`${a} is odd`);
  //     return `${a} is odd`;
  //   }

  let evenOrOdd = a % 2 === 0 ? `${a} is even` : `${a} is odd`;
  //   console.log(evenOrOdd);
  return evenOrOdd;
}

console.log(isEven(5)); */

// stop the execution of a function and return a value
// if no value is specified it returns undefined

//
/* 
function checkNumber(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "negative";
  } else {
    return "Its Zero";
  }
}

console.log(checkNumber(5)); //Positive
console.log(checkNumber(0)); //Zero
console.log(checkNumber(-1)); //Negative
 */

function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesdasy";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";

    default:
      return "Invalid Day ";
  }
}

console.log(getDayOfWeek(5));
console.log(getDayOfWeek(7));
console.log(getDayOfWeek(10));
