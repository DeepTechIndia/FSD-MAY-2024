// synchronous code

function blockingLoop() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
}

// 1X10 9 = 100, 000, 000

console.log("Starting blocking loop operation");
const result = blockingLoop();
console.log("Blocking loop operation completed", result);
console.log("This will run after the blocking loop operation is complete");

function blockingTimer(duration) {
  const endTime = Date.now() + duration;
  console.log(endTime);
  while (Date.now() < endTime) {
    //qwertyui
  }
  console.log("Blocking Timer Completed");
}

console.log("Starting Blocking Timer Operation");
blockingTimer(5000);
console.log("This will run after the blocking Timer");
