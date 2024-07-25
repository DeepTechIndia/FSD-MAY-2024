// async await => asynchronous operation
// function async / promise / await promise

/* let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation was successful");
  } else {
    reject("unsuccessful");
  }
});

// console.log(promise);

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));
 */

/* async function myAsyncFunction() {
  return "Hello, async";
}

// console.log(myAsyncFunction());

myAsyncFunction()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
 */

/* function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function example() {
  console.log("Before delay");
  await delay(2000); //wait for 2sec
  console.log("After delay");
}

example();
 */
/* 
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    // console.log(response);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
}

fetchData(); */

/* fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error)); */

async function fetchUsersData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("There is a problem with fetch operation", error);
  }
}

fetchUsersData()
  .then((users) => {
    // console.log(users);
    users.forEach((user) =>
      console.log(`User-Name : ${user.name} and email: ${user.email}`)
    );
  })
  .catch((error) => console.log(error));
