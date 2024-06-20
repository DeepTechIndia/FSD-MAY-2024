/* 
 Array
 Special type of  object,, store multiple values in a single variable.
 allows you to group element together 

 []
 */

// let numbers = [1, 2, 3, 4, 5];
/* let fruits = ["apple", "Mango", "cherry"];
let mixedArray = [
  1,
  2,
  "hello",
  true,
  false,
  null,
  undefined,
  { name: "jhon" },
];

const numbers = [1, 2, 3, 4, 5];
 */
/* 
const users = [
  { userName: "Pradeep", age: 40, address: "qwertyui" },
  { userName: "xyz", age: 20, address: "qwertyui" },
  "strta",
  1,
];
 */

// let fruits = ["apple", "Mango", "cherry"];

// console.log(fruits[1]); //Mango
// console.log(fruits[0]); //apple
// console.log(fruits[2]); //cherry

// fruits[1] = "banana";
// console.log(fruits);

// fruits[4] = "qwerty";
// console.log(fruits);

/* // length
console.log(fruits.length); //3

// push => add an element to  the end of an array

fruits.push("orange");
fruits.push("banana");

console.log(fruits); //["apple", "Mango", "cherry", "orange", "banana"]

// pop() removes the last eleemt of an array

let removedFruit = fruits.pop();
console.log(removedFruit); //"banana"
console.log(fruits); //["apple", "Mango", "cherry", "orange"]

// shift removes the first element from an array

fruits.shift();//[ "Mango", "cherry", "orange"]
console.log(fruits); //[ "Mango", "cherry", "orange"]

//unshift adds the element to the begining

fruits.unshift("apple");
console.log(fruits); //["apple", "Mango", "cherry", "orange"]
 */

// splice() => changes the content of an array by removing or replacing the existing element

/* let fruits = ["apple", "Mango", "cherry", "orange"];

// fruits.splice(2, 2, "Lemon", "kiwi");
// console.log(fruits); //["apple", "Mango","Lemon", "kiwi",];

fruits.splice(1, 3, "Lemon", "kiwi");
console.log(fruits); //["Lemon", "kiwi","apple", "Mango", "cherry", "orange"];

//slice => returns a portion of array

let arr = [1, 2, 3, 4];
console.log(arr.slice(0, 2)); //[1,2]
console.log(arr);

// includes
console.log(arr.includes(5)); //false
console.log(arr.includes(3)); //true

// indexof

console.log(arr.indexOf(2)); //1
console.log(arr.indexOf(5)); //-1

// join => joins all the elements of an array into a string

console.log(arr.join("#")); //"1-2-3-4"
console.log(arr);

// concat => merge two or more arrays

let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let newArr = arr1.concat(arr2); //[1,2,3,4,5]
console.log(newArr);

// reverse  => reverse the order of an element

arr1.reverse();
console.log(arr1);
 */

// flat() => new array with all sub array elements concatenates into recursively up to the specified depth

// [1, 2, 3, [4, 5, [(6, 7)]]]; => [1,2,3,4,5,6,7]

// [1, 2, [3, [4, 5]], [4, [4, 5, [6, 7]]]];

let arr = [1, [2, [3, 4]], 5];

console.log(arr.flat()); //[1,2,[3,4],5]
console.log(arr.flat(2)); //[1,2,3,4,5]

let arr2 = [1, 2, 3, [4, [5, [6]]], [7, 8]];

console.log(arr2.flat()); //[1,2,3,4, [5,[6]], 7,8]
console.log(arr2.flat(Infinity)); //[1,2,3,4, 5,[6], 7,8]

const array = new Array(10); // const array =[empty, empty]

Object.seal(array);
console.log(array.length);

array[0] = 1;
array[1] = 2;
array[11] = 3;

console.log(array.length);

console.log(array);
