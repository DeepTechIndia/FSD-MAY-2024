// EventLoop => fundament concept => non -blocking/ asynchronous operation
// call stack =>tracks the function calls.
// let a = "asd"; //=> execution context
// console.log(a);
// function name() {}
// let b = [1, 2, 3];

// fetch("qwertyuio");

// let c = b;
// console.log(c);
// console.log(b);

// LIFO => Last in First Out

console.log("start");

setTimeout(() => {
  console.log("Timeout Callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Callback");
});

console.log("End");

/* 
start
end
promise callback
Timeout callback

*/

/* obj ={}
arr =[]

arr 1 =[]
arr2 = arr1;

memory 

 */
