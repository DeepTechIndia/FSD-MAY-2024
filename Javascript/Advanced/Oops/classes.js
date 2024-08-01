// Classes =>blueprint for creating the object, js

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} Years old`
    );
  }
}

const person1 = new Person("Alex", 30);
// console.log(person1);
person1.greet();

const person2 = new Person("Vivek", 32);
person2.greet();
