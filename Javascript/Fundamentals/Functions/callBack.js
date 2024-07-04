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

const numbers = [1, 2, 3, 4, 5];
transformArray(numbers, double); //[2,4,6,8,10]
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
