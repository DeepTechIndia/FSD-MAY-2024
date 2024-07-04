// // operators - special symbol or a keyword perform some operation on variables or values

// // 1. Arithmetic operator

// // 2+3
// console.log(2+3);

// let a = 5;
// let b = 3;

// // console.log(a+b);

// let sum = a+b;

// console.log(sum);

// // substraction

// console.log(2-3);
// var c = 5;
// var d = 6;

// var difference = c- d;

// console.log(difference);

// // Multiplication

// let product = a * b;
// console.log(product);

// // Modulus => returns the remainder of a division operation %

// // 5/3 => 2

// let remainder = 4%2 ;
// console.log(remainder);

// let rem = 9%2;
// console.log(rem);

// // Division
// let qoutient = a/b;
// console.log(qoutient);

// // Exponentiation

// let power = a**3;
// console.log(power);

// // 5*5*5*5*5e

// let equation = 12 + 2 - 4 + (10/2) + (2*2)
// console.log(equation);

// 2.Assignment Operator

// Assign a value to a variable

// let a = 5;
// let b = a;

// Additional Assignment

// let a = 10;

// // let b = a + 1;

// a+= 1; //a = a+ 1; => a = 10 + 1 => 11

// console.log(a);

// let b = 5;
// b+=b; // b = b +  b
// console.log(b);

// // Substraction Assignment

// a -= 3;
// console.log(a); //8

// let c = 15;
// c -=c;
// console.log(c);

// c-=6;
// console.log(c);

// // Multiplication Assignment
// c*=2;
// console.log(c);

// c*=a;
// console.log(c);

// // Division Assignment

// let d = 12;

// d/=4 // d = d / 4 => 12/4 => 3
// console.log(d);

// Unary Operator

// prefix and postfix

// Increment Operator ++

// Postfix Increment

// let x = 5;
// console.log("Value of X before Postfix increment", x); //5

// let y = x++; //y is 5, x is now 6
// console.log("Value of X after Postfix increment", x); //6

// console.log("value of y", y); //5

// let z = y++ ;
// console.log("value of z", z); //5
// console.log("value of y", y); //6

// Prefix Increment

// let e = 5;
// let f = ++e; //6 , e 6

// let i =5;
// let result = ++i + 2; // => ++5 + 2 => 6 + 2  => 8
// console.log(result);  //8

// console.log(i);

// Decrement Operator

// var p = 5;
// let q = p--; //q = 5, p = 4

// // type of value

// console.log("p is", p);
// console.log("q is", q);

// prefix

// let r = --p; //r=3 , p =3

// console.log("r is ", r);
// console.log("p is "+ p);

// let val1 = 1;
// let val2 = 2;

// let res = val1++ + ++val2 //4

// comparision operator
// returns two values true or false

// Equal (==) check if two values are equal

// let a = 1;
// let b = '1';

// let isEqual = (a==b); //false
// console.log(isEqual);

// // Strict Equal (===) checks if the two values or equal or not (value and also data type)

// let strictEqual = (a===b)
// console.log(strictEqual);

// // notEqual  (!=)

// let isNotEqual = (a!="1") //true
// console.log(isNotEqual);

// // strictNotEqual

// let isStrictNotEqual = (a!== "1") //true
// console.log(isStrictNotEqual);

// // GreaterThan (>)
// console.log(5>6);//false

// // greaterThan or Equal (>=)
// console.log(5>=5); //true
// console.log(5>=6); //false

// // LessThan
// console.log(5<5); //false

// // lessthan or equal (<=)
// console.log(5<=5); //true

// Logical Operator

// 1 1 = 1;
// 1 0 = 0;
// 0 1 = 0;
// 0 0 = 1;

// 1 => true
// 0 => false

// Logical and (&&) => returns true or false

// let isBothTrue = (5>0 && 2>0); //true
// console.log("isBothTrue", isBothTrue);

// let a = 10;
// let b= 20;

// let checkTrue = (a>b && b>a);  //false
// console.log("checkTrue", checkTrue);

// let flasy = (a>b && b<a);  //false
// console.log("flasy",flasy);

// // Logical OR(||)

// console.log(1>1 || 1>0); //true

// console.log(1>0 || 1>1); //true

// let check = (b< 0 || a>0) ; //true
// console.log("check",check);

// // Logical Not (!)

// console.log(!(1>0)); //flase

// let isNotTrue = !(b>a) //=> !(true) => true X false
// console.log("isNotTrue", isNotTrue);

// Operator Precedence


