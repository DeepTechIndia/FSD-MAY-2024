// condition ? expressionIftrue : expressionIfFalse
"use strict";

let a = 5;
let b = 6;

let result = a > b ? "a is greater than b" : "b is greater than a";
console.log(result);

let number = 7;

let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd);

let loggedIn = true;

let welcomeMessage = loggedIn ? "Welcome Back" : "Please Log in";
console.log(welcomeMessage);

let temp = 20;

let weatherMessage = temp > 25 ? "Its hot outside" : "It's cool outside";

console.log(weatherMessage);
