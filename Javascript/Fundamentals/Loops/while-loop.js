// while loop => control the flow of statement

/* syntax =>
while(condition){
    // executes the code
    // as long as condition is true
} */
/* 
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
 */

/* const colors = ["red", "green", "blue", "yellow"];

let index = 0;
while (index < colors.length) {
  console.log(colors[index]);
  index++;
} */

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// let number = 7;
// let multiplier = 1;

// while (multiplier <= 10) {
//   let result = number * multiplier;
//   console.log(`${number} * ${multiplier} = ${result}`);
//   multiplier++;
// }

let correctPassword = "password";
let attempts = 3;
let userInput = prompt("enter the password:");

while (userInput !== correctPassword && attempts > 0) {
  attempts--;

  if (attempts > 0) {
    userInput = prompt(
      `Incorrect Password. ${attempts} attempts left. Enter again`
    );
  }
}

if (userInput === correctPassword) {
  console.log("Access Granted");
} else {
  console.log("Access Denied, too many attempts");
}

// PIN => 3 chance

// ("qwerty !== "password" && attempts>0 ){
//     attempts--;

// }
