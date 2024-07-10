// higher order functions => passing an function as an argument to the function or it returns a new function
/* 
function greet(name) {
  return "Hello " + name;
}

function processUserInput(callBack) {
  const name = prompt("Plese enter your name");
  alert(callBack(name));
}

processUserInput(greet);
 */
function createMultiplier(multipler) {
  return function (x) {
    return x * multipler;
  };
}

const double = createMultiplier(2);

console.log(double(5));

// console.log(double);

function createGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}`;
  };
}

const greetHello = createGreeter("Hello");
console.log(greetHello("abc"));

const greetGoodBye = createGreeter("GoodBye");

console.log(greetGoodBye("qwerty"));



// foreach
// Map
// filter
// reducer