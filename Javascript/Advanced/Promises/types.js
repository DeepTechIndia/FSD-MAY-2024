// Promise.all => iterable of promises and return single promise that resoplves all of the ip promises

/* const promise1 = Promise.reject(3);
const promise2 = 42;
const promise3 = new Promise((res, rej) => {
  setTimeout(res, 100, "foo");
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log("Promise is rejected please check the mistake");
  }); */

//-------------------------------------------
//promise.race => resolve, reject

/* const promise1 = new Promise((res, rej) => {
  setTimeout(rej, 500, "one");
});

const promise2 = new Promise((res, rej) => {
  setTimeout(res, 1000, "two");
});

Promise.race([promise1, promise2])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log("Promise rejectyed", error);
  });
 */

//-------------------------------------------------

//Promise.allSettled =>
/* const promise1 = Promise.resolve(3);
const promise2 = Promise.reject(42);
const promise3 = new Promise((res, rej) => {
  setTimeout(rej, 100, "foo");
});

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    // console.log(results);
    results.forEach((result) => {
      console.log(result.status);
    });
  })
  .catch((err) => {
    console.log(err);
  });
 */

//   ------------------------------------------

// Promise.any  => fullfilled => return a single promise
// => rejected => AggregatorError

const promise1 = Promise.reject("Error 1");
const promise2 = Promise.reject("Success 1");

const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, "success2");
});

Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
