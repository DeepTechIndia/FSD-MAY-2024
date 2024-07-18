// closures => javascript feature  => inner function can access the outer function variables

/* function parent() {
  const parentProperty = "I am parent property";

  function child() {
    console.log(parentProperty);
  }
  return child;
}
const closureExample = parent();
// console.log(closureExample);
closureExample();


 */

function counter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
  };
}

const myCounter = counter();

// console.log(myCounter);
console.log(myCounter.increment());
console.log(myCounter.decrement());
