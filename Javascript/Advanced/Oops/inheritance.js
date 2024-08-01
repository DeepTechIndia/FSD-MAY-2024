// Inheritance => inherits from parent class, extends.

// parent
// child

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, i am ${this.name} and i am ${this.age} yrs old`);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); //Call the constructor of the parent class
    this.jobTitle = jobTitle;
    // super.greet();
  }

  describeJob() {
    console.log(`I am a ${this.jobTitle}`);
  }

  //  method overriding
  greet() {
    console.log(
      `Helllo, my name is ${this.name} and I am ${this.age} years old and i am working as a ${this.jobTitle}`
    );
  }
}

const employee1 = new Employee("Ramesh", 28, "Software Developer");
employee1.describeJob();
employee1.greet();

const employee2 = new Employee("Suresh", 30, "Project Manager");
employee2.greet();
