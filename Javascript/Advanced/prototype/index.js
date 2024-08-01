// prototype => js behavior
// prototype => share properties AND methods b/w the instances of objects

// prototype => multiple function => prototype => again check => null

/* let a = "";

// Map filter reduce charat

let obj = {
  name: "qwerty",
  upper() {
    return this.name.toLowerCase();
  },
};

console.log(obj.toString());
console.log(obj);
console.log(obj.something()); //=> null

let b = "assd";
// console.log(b);

function fun() {
  return "hello";
}

console.log(fun.prototype);
 */

const Person = function (name, birthyear) {
  this.name = name;
  this.birthyear = birthyear;
};
// console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthyear);
};

const person1 = new Person("Vikram", 2000);
const person2 = new Person("vignesh", 1997);
person1.calcAge();
console.log(person1);
