// Loops => To do a repeated tasks we use Loops
// for loop
// while loop
// do while

// for loop =>

// syntax

// for (initialization; condition; update) {
//   // code to execute
// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// i++
// i+2

// i+2 => 2 + 2  => to where it should store

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// i= 2;
// 2<=10
// 2+2 => 4

// i=4;
// 4<=10
// 4+2 = 6

// i =12
// 12 <= 10

//2,3,4,---10

// 2,4,6,8,10

// let i = 1;

// i<=10

// 1<=10 => true

// 1;

// let i = 2;

// 2<=10 => true

// let i =3;
// 3<=10 true

// let i = 10;
// 10 <=10 true

// 11 <=10 false

// 10;
// 9;
// 8;
// 7;
// 6;
// 5;
// 4;
// 3;
// 2;
// 1;

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// console.log(a[0]); //e
// console.log(a[1]); //e
// console.log(a[2]); //e
// console.log(a[3]); //e
// console.log(a[4]); //e
// console.log(a[5]); //e
// console.log(a[6]); //e
// console.log(a[7]); //e

// H;
// e;
// l;
// l;
// o;

// W;
// o;
// r;
// l;
// d;

// let a = "Hello World";

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// Hello
// World
// 12345678911
// 01234567891

// i=0;
// 0<=11 true

// a[0] => H

// to reverse a string
// for (let i = a.length - 1; i >= 0; i--) {
//   console.log(a[i]);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
/* 
let arr = [1, 3, 4, 8, 9, 20, 10, 12, 14];

let even = [];
let odd = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even.push(arr[i]);
    // console.log(`${arr[i]} is even`);
  } else {
    odd.push(arr[i]);
  }
}

console.log(even);
console.log(odd); */
// i=0; i<10

/* 

if(false)

i=0;
true
arr[0] =>  1 % 3  === 0 => false

odd.push(arr[0]) => odd=[1]

i=1;
arr[1] => 3 % 2 === 0 => false
odd.push(arr[1]) = 3

i=2
arr[2] => 4 % 2 === 0 => true
even.push(arr[2]) 4
 */

// 1-10

// 1+2+3+4+------10 =>

/* let sum = 0;

for (let i = 1; i <= 10; i++) {
  //   console.log(i);

  //   sum = sum + i;

  sum += i;
  //   sum = 0 + 1 => 1
  // sum = 1 + 2 => 3
  // sum = 3 + 3 => 6
  // sum = 6 + 4 => 10
}

console.log(sum);
 */
/* 
let a = [1, 2, 4, 5, 33, 56, 7, 8, 90];

// for(initialization; conddition; update)

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
 */

/* 
// Sum of all elements
function sumOfElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(i);
    sum = sum + arr[i];
  }

  return sum;
}

console.log(sumOfElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumOfElements([1, 4, 5, 4, 5, 6, 70, 80, 9, 10]));
 */

// function to reverse a string

// let str = "Hello World"

// let o/p = >"dlroW olleH"

/* 
function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // reverse = reverse - 10
    reverse = reverse + str[i];
    // reverse = "" +  str[4] => "" + "o" => "o"
    // revrse = "o" + str[3] => "o" + "l" => "ol"
    // reverse = "ol" + str[2] =>"ol" + "l" => "oll"
    // reverse = "oll" + str[1] => "oll"+"e" ->"olle"
    // reverse = "olle" + str[0] => "olle" +_ "h" => "olleh"

    // -1
    // -1 >= 0 => false

    // console.log(i);

    // reverse = "" - 0
  }

  return reverse;
}

console.log(reverseString("hello"));
console.log(reverseString("Javascript"));
 */

// multiplication table

/* function multiplicationTableGenerator(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
    // console.log("5 x 1 = 5*1 ");
  }
}

multiplicationTableGenerator(5);
multiplicationTableGenerator(8);

 */

// let data = ["Akash", "abhi", "vidya", "shakthi", "yogesh", "anuj", "kishore"];

// console.log(data[0][0]); //akash[0] =>a

/* function getElementsStartsWitha(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0].toLowerCase() === "a") {
      result.push(arr[i]);
    }

    // akash[0]
    // A.toLowerCase() => 'a' ==== 'a'

    // vidya[0]
    // v.toLowerCase()=> 'v' === 'a'
  }

  return result;
}

console.log(
  getElementsStartsWitha([
    "Akash",
    "abhi",
    "vidya",
    "shakthi",
    "yogesh",
    "anuj",
    "kishore",
  ])
);
 */

// let a = [1, 3, 5, 4, 67, 8, 9];
/* 
function largestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      // 3 > 1;
      // 5 > 3
      // 4 > 5
      // 67 > 5
      // 8 > 67
      // 9 > 67

      largest = arr[i];
    }
  }

  return largest;
}

console.log(largestNumber(a));
console.log(largestNumber([0, 9, 8, 7, 54, 43]));
 */

/* 
const data = [
  { name: "Pen", price: 10, quantity: 4 },
  { name: "scale", price: 15, quantity: 4 },
  { name: "Samsung-Phone", price: 5999, quantity: 1 },
];

function calculateTotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    // total = total + cart[i].price * cart[i].quantity;
    total += cart[i].price * cart[i].quantity;

    // total = 0 + 10 * 4  => 40
    // total = 40 + 15 * 4 => 60 => 100
    // total = 100 + 5999 * 1=> 100 + 5999 => 6099
  }

  return total;
}

console.log(calculateTotal(data));
 */

//  {1 : 1, 2:2, 3:1, 4:3, 6:2, 7:1, 8:1}

const element = { a: 1 };
element["b"] = 2;
console.log(element["b"]++);
console.log(element["b"]);

// element.a = 1;
// console.log(element["a"]);

//
function countElementOccurrences(values) {
  const elementCount = {};

  for (let i = 0; i < values.length; i++) {
    const element = values[i];
    // element = 1
    //element = 2
    // element = 2
    // element = 3
    // element = 4
    // element = 41
    // element = 4
    // element = 4
    // element = 6

    if (elementCount[element]) {
      // elementCount[1]
      //elementCount[2]
      // elementCount[2]
      //elementCount[3]
      // elementCount[4]
      // elementCount[4]
      // elementCount[4]
      // elementCount[6]

      elementCount[element]++;
    } else {
      elementCount[element] = 1;
      // elementCount[1] = 1;
      // elementCount[2] = 1
      // elementCOunt[3] = 1
      // elementCOunt[4] = 1
    }
  }
  return elementCount;
}

console.log(countElementOccurrences([1, 2, 2, 3, 4, 4, 4, 6, 7, 8, 6]));
console.log(countElementOccurrences("Hello"));

// elementCount = { 1: 1, 2: 2, 3: 1, 4: 3, 6: 2 };
