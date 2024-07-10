// Timer functions => execute the code after a delay
// setTimeout, setInterval X clearTimeout , clearInterval

// setTimeout => execute a function after a specified number of millisecond

// setTimeOut(function, delay, ...args)

// function greet() {
//   console.log("Hello, World");
// }

// setTimeout(greet, 5000);

// greet();

/* setTimeout(function () {
  console.log("This message is delayed by 3 seconds");
}, 3000); */

// function greet(name) {
//   console.log("Hello," + name + "!");
// }

// greet("ABC");

// setTimeout(greet, 3000, "Abcd");

function showNotification(message) {
  console.log("Notification: " + message);
}

function delayedNotification(message, delay) {
  setTimeout(showNotification, delay, message);
}

// setTimeout(showNotification, 4000, "You have a new message");

// delayedNotification("You have a new message", 4000);

// clearTimeOut => cancel a timeout  with a settimeout function

// clearTimeout(timeOutId);

// timeoutId => identifier

function greet() {
  console.log("Hello, World");
}

/* const timeOutId = setTimeout(greet, 5000);
// console.log(timeOutId);

const shouldCancel = true;

if (shouldCancel) {
  clearTimeout(timeOutId);
} else {
  console.log("TimeOut Not Cancelled");
} */

// cancel the timeout before it executes

// clearTimeout(timeOutId);
// console.log("TimeOut Cancelled");

function showMessage() {
  console.log("This message is shown after a delay");
}

const timeOutId = setTimeout(showMessage, 2000);

setTimeout(() => {
  clearTimeout(timeOutId);

  console.log("Message is Cancelled");
}, 3000);

// environment =>

// callstack callbackque
