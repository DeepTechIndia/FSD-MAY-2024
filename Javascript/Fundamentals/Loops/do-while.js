// do-while-loop => will always execute the code at least once

// do{
//     // code to execute
// }while(condition)

/* let count = 6;

do {
  console.log(count);
  count++;
} while (count <= 5);
 */
/* 
let n = 5;
let sum = 0;
let count = 1;

do {
  sum += count;
  count++;
} while (count <= n);

console.log("The Sum of Numbers from 1 to " + n + " is : " + sum);

 */
/* 
let n = 5;
let factorial = 1;
let count = 1;

do {
  factorial *= count;
  count++;
} while (count <= n);

console.log(factorial); */
/* 
factotial = factortial * count;

1 * 1 => 1

2

factorial = 1 * 2 => 2

factorial = 2 * 3 => 6
factorial = 6 * 4 => 24
factoriall = 24 * 5 => 120;
 */

/* let password;
do {
  password = prompt("Enter the Password:");
} while (password !== "12345");

console.log("Acess granted");

// "12345" !== "12345";

"qwerty" !== "12345"; */
/* 
let n = 5;
let sum = 0;
let i = 1;

do {
  sum += count;
  i++;
} while (i <= n);

console.log("The Sum of Numbers from 1 to " + n + " is : " + sum);

n = 5;

sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

sum = 0 + 1;
sum = 1 + 2;
sum = 3 + 3;
sum = 6 + 4;
sum = 10 + 5; // 15

1;
2;
3;
4;
5;
 */
/* 
let confirmAction;

do {
  confirmAction = prompt("Do you want to Proceed ? (Yes / No) :").toLowerCase();
} while (confirmAction !== "yes" && confirmAction !== "no");

// qwer != "yes";

if (confirmAction === "yes") {
  alert("Action will proceed");
} else {
  alert("Action cancelled");
}
 */

let confirmAction;

// for (;;) {
//   console.log("loop");
// }

for (;;) {
  confirmAction = prompt("Do you want to Proceed ? (Yes / No) :").toLowerCase();
  if (confirmAction === "yes" || confirmAction === "no") {
    break;
  }
}

if (confirmAction === "yes") {
  alert("Action will proceed");
} else {
  alert("Action cancelled");
}

// for
// while
// do while
