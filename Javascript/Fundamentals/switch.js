// switch statement => perform different actions based on the differrent condition

// switch(expression){
//     case value1;
//     //code execution
//     break;

//     case value2;
//     //code execution
//     break;

//     case value3;
//     //code execution
//     break;

//     default :

// }

// Grade System

let grade = "A";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;

  case "B":
    console.log("Good");
    break;

  case "C":
    console.log("Fair");
    break;

  case "D":
    console.log("Poor");
    break;

  case "F":
    console.log("Fail");
    break;

  default:
    console.log("Invalid Grade");
}

// Traffic Sytem

let lightColor = "green";

switch (lightColor) {
  case "red":
    console.log("Stop");
    break;

  case "green":
    console.log("Go");
    break;

  case "Yellow":
    console.log("Prepare");
    break;

  default:
    console.log("Invalid Color");
}

// simple calculator

let operator = "%";
let a = 5;
let b = 3;

let result;

switch (operator) {
  case "+":
    result = a + b;
    break;

  case "-":
    result = a - b;
    break;

  case "*":
    result = a * b;
    break;

  case "/":
    result;
    result = a / b;
    break;

  default:
    result = "Invalid Operator";
}

console.log(result);

// user Roles

let role = "admin";
let permissions;

switch (role) {
  case "admin":
    permissions = "Full  access";
    break;

  case "editor":
    permissions = "Edit access";
    break;

  case "viewer":
    permissions = "view  access";
    break;

  default:
    permissions = "No access";
}

// console.log(permissions);

console.log("Role: ", role + ", Permissions: ", permissions);
