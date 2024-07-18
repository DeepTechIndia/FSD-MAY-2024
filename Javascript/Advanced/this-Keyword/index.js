// this keyword => special keyword => current execution context / current object thats going to execute
//this keword works completely how you call the function

// this refers => person.name =>
// regular functions => this => window object in browser
// node => this => global object

// console.log(global);
// console.log(this); //{}

// function greet() {
//   console.log(this);
//   console.log("Hello");
// }

// // console.log(this);
// greet();

// let firstName = "qwerty";
// let lastName = "ytrewq";
const person = {
  firstName: "abc",
  lastName: "xyz",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

// console.log(firstName);
person.fullName();

function Book(title, author) {
  return {
    title: title,
    author: author,
    getInfo: function () {
      return this.title + " by " + this.author;
    },
  };
}

const book1 = new Book("Atomic Habits", "James Clear");
const book2 = new Book("Alchemist", "clerk");
console.log(book2);
// console.log(book1);
console.log(book2.getInfo());

// console.log(book1.getInfo());

/* const book1 = {
      title: "Atomic Habits",,
      author: "James Clear",
      getInfo: function () {
        return this.title + "by" + this.author;
      },
    }
   */

function createEmployee(name, position) {
  return {
    employeeName: name,
    employeePosition: position,
    getInfo: function () {
      return `${this.employeeName} - ${this.employeePosition}`;
    },
  };
}

const employee1 = createEmployee("vicky", "Manager");
console.log(employee1);
console.log(employee1.getInfo());

const employee2 = createEmployee("Bobby", "Developer");

console.log(employee2.getInfo());
