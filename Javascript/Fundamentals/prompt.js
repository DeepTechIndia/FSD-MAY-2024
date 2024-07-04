// prompt => built in function , it displys a box
// iteract with users by requesting input from them

// syntax : prompt("Please Enter your name :")
// string

// ok cancel

// let userName = prompt("Please Enter your name: ");
// console.log(`Hello, ${userName}`);

// let birthYear = prompt("Enter your birth year: ");
// let age = 2024 - parseInt(birthYear);

// console.log(age);

// generate random number 1 -10

// let randomNumber = Math.random();

// console.log(
//   `${randomNumber} * 10 + 1 =`,
//   Math.floor(`${randomNumber * 10 + 1}`)
// );

// Guessing game using Prompt

let secretNumber = Math.floor(Math.random() * 10) + 1;
// console.log(secretNumber);

let guess;
let attempts = 3;

while (attempts > 0) {
  guess = parseInt(
    prompt(`Guess The Secret Number between 1 an 10. Attemps Left: ${attempts}`)
  );

  if (guess === secretNumber) {
    console.log("Congrats: You guesssed the coorect number");
    break;
  } else {
    attempts--;
    if (attempts > 0) {
      console.log("Wrong guess");
    }
  }
}

if (attempts === 0) {
  console.log(`Out of Attempts The Secret Number was ${secretNumber}`);
}
