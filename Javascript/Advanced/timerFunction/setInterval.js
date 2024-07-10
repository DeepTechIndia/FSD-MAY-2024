// setInterval => repeatedly execute the code after a delay

// setInterval(function, delay, args)

// function greet(name) {
//   console.log("Hello" + name);
// }

// const intervalId = setInterval(greet, 2000, "xyz");

// // clearInterval => stop the interval

// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Interval stopped");
// }, 5000);
/* 
let countdown = 10;

function updateCountDown() {
  console.log(countdown);
  countdown--;

  if (countdown < 0) {
    clearInterval(intervalId);
    console.log("Times Up");
  }
}

const intervalId = setInterval(updateCountDown, 1000); */

let seconds = 1;

function updateStopwatch() {
  console.log(seconds + " seconds");
  seconds++;
}

const stopWatchId = setInterval(updateStopwatch, 1000);

setTimeout(() => {
  clearInterval(stopWatchId);
}, 10000);
