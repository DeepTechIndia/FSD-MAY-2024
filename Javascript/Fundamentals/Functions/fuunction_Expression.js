//function are treated normal function values
//first class citizien

// let isEven = function()

// function functionName(){}

// const functionName = function(parameters){}

// function isPositive(number) {
//   if (number > 0) {
//     return "Positive Number";
//   } else {
//     return "Negative Number";
//   }
// }

// let op = isPositive(3);
// console.log(isPositive(3));
/* 
const numCheck = function (number) {
  if (number > 0) {
    return "Positive Number";
  } else {
    return "Negative Number";
  }
};

console.log(numCheck(3));

 */

// const evaluateGrade = function (score) {
//   if (score >= 90) {
//     return "A";
//   } else if (score >= 80) {
//     return "B";
//   } else if (score >= 70) {
//     return "C";
//   } else if (score >= 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// };

// console.log(evaluateGrade(85)); //B
// console.log(evaluateGrade(72)); //C
// console.log(evaluateGrade(30)); //F

// console.log(canVote(20)); //Eligible to Vote

let canVote = function (age) {
  let vote = age > 18 ? "Eligible to Vote" : "No Eligible";
  return vote;
};

console.log(canVote(20)); //Eligible to Vote
