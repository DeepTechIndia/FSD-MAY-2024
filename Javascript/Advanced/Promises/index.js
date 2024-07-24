// Asynchronous Functionality =>

// Toasting Bread =>
// boiling egg
// pour juice

// => output
// asynchronous =>
// js => synchronous / line by line
// asynchronous functionality => promises / async await => Event Loop

// function(){
//     10min
// }

// function(){
//     2min
// }

// function(){
//     1min
// }

// promises => object => represents completion or failure of the asyn func
// container to hold the future value

// create promise

// Blurprint

// Promise constructor
// resolve / reject

// 3 states

// 1. pending
// 2. Fullfilled
// 3. Rejected

/* let promise = new Promise((resolve, reject) => {
  // Asynchronous operations
  //   DB call, fetching api
  setTimeout(() => {
    console.log("Completed async task");
    resolve();
  }, 1000);
});

// console.log(promise);

promise.then(() => {
  console.log("Consumed");
});
 */

/* t promise2 = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed");
  }
});

console.log(promise2);
 */

/* let checkEvenOdd = new Promise((res, rej) => {
  let number = 5;

  if (number % 2 === 0) {
    res(`${number} is even`);
  } else {
    rej(`${number} is odd`);
  }
});

// console.log(checkEvenOdd);

checkEvenOdd
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.log(error);
  });
 */
/* 
new Promise((res, rej) => {
  let userData = {
    id: 1,
    name: "full name",
    email: "example@email.com",
  };

  setTimeout(() => {
    if (!userData) {
      res(userData);
    } else {
      rej("Failed to Fetch user data");
    }
  }, 1500);
})
  .then((data) => {
    console.log("User Data: ", data, typeof data);
    return data;
  })
  .then((userData) => {
    console.log(userData.name);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
 */

//   Authentication
/* 
const authentication = (username, password) => {
  return new Promise((resolve, reject) => {
    const userDateBase = {
      user1: "password123",
      user2: "mypassword",
    };

    setTimeout(() => {
      if (userDateBase[username] && userDateBase["user1"] === password) {
        resolve("Authentication successful");
      } else {
        reject("Authentication failed");
      }
    }, 1500);
  });
};

// console.log(authentication("user1", "password123"));

authentication("user1", "password123")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
 */

//   order processing

/* const processOrder = (order) => {
  return new Promise((res, rej) => {
    const isOrderValid = order !== null && order.amount > 0;

    setTimeout(() => {
      if (isOrderValid) {
        res("order processed Successfully");
      } else {
        rej("Order processing failed");
      }
    }, 2000);
  });
};

const order = {
  id: 1,
  amount: 0,
};

processOrder(order)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
 */

//finally

const simplePromise = new Promise((res, rej) => {
  const isSuccess = Math.random() > 0.5;

  if (isSuccess) {
    res("Operation successful");
  } else {
    rej("Operation Unsuccessful");
  }
});

simplePromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Operation is Completed");
  });
