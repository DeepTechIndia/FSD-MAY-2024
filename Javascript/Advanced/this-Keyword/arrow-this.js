//this => doesnt have their own this, window objecrt
//this keyword that will be inherit from parent function

let name = "abc";
const arr = () => {
  console.log("am logging", this.name);
};

// window.name;

const obj = {
  name: "qwerty",
  /* norFunction: function () {
      console.log(this.name);
    },
    arrfunction: () => {
      console.log(this.name);
    }, */

  greet: function () {
    const arrFunction = () => {
      console.log(this.name);
    };
    arrFunction();
  },
};

obj.greet();

// diff bw normal fun and arrow function =>

// obj.norFunction(); //qwerty

// obj.arrfunction(); //undefined

const team = {
  name: "Development team",
  member: ["abc", "xyz", "pqr"],
  displayMember: function () {
    this.member.forEach((member) => {
      console.log(`${member} is a part of ${this.name}`);
    });
  },
};

team.displayMember();
// member: ["abc", "xyz", "pqr"],

// arrow function should not be used as methods of objects if you need this to reffer to the object itstelf
