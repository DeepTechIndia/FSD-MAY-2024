//index => numerical representation of the position element

// let a = "Hello"; //5

// H e l l o
// 0 1 2 3 4 =>index
// 1 2 3 4 5 => length

// length

/* let str1 = "Hello";
console.log(str1.length); //5

let str2 = "Hello, World!";
console.log(str2.length); //13
 */
//charAt
//returns the ccharacter at a specified index

/* console.log(str1.charAt(0)); //H
console.log(str1.charAt(1)); //e
console.log(str1.charAt(2)); //l
console.log(str1.charAt(3)); //l
console.log(str1.charAt(4)); //o

let str = "Javascript";
console.log(str.charAt(5)); //c
 */

//charCodeAt
//unicode value of specified index
/* 
var str = "ABCabc";
console.log(str.charCodeAt(4)); //65
 */

//concat()
/* 
let str1 = "Hello";
let str2 = "World";
let str3 = "!";

console.log(str1.concat(str2)); //HelloWorld
console.log(str1.concat(" ", str2, str3)); //Hello World!
 */

// includes => string contains a specfic value

/* let str = "Hello World!";
console.log(str.includes(" ")); //true
 */

// indexof() => indexof the first occurance os specified value
/* 
let str = "Hello World! World";
console.log(str.indexOf("World")); //6
 */

// lastIndexOf() => last occurance of specified value
/* let str = "Hello World! World";
console.log(str.lastIndexOf("o")); //14
console.log(str.lastIndexOf("World")); //13
 */

// replace => replace a value with specified value
/* 
let str = "Hello Yogesh";
let newStr = str.replace("Yogesh", "Shakthi");
// console.log(str.replace("Yogesh", "Shakthi")); //Hello Shakthi
console.log(newStr);

let example = "foo bar foo";
let exmple2 = example.replace("foo", "baz");
console.log(exmple2); //baz bar baz
 */

// replaceAll() => replace all the occurance
/* 
let example = "foo bar foo";
let exmple2 = example.replaceAll("foo", "baz");
console.log(exmple2); //baz bar baz
 */

// split => string to array of substrings

// let a = [1, 2, 3, "Name1", "123"];
/* 
let str = "Hello,World,vidya,shree,harish,kumar";
let arr = str.split(",");
console.log(arr);
 */

// slice => extracts part of string and returns  a new string
/* 
let str = "Hello, World!";
console.log(str.slice(0, 5)); //Hello  //0-4
console.log(str.slice(7)); //World!
console.log(str.slice(7, 12)); //World  //0-11
 */

//substring
/* let str = "Hello, World!";
console.log(str.substr(0, 5)); //Hello  //0-4
console.log(str.substr(7)); //World!
console.log(str.substr(7, 12)); //World  //0-11
 */

//toLowerCase() => convert to lowercase
/* 
let str = "HELLO World";
console.log(str.toLowerCase()); //hello world
 */

//toUpperCase => convert to uppercase
/* 
let str = "Hello World";
console.log(str.toUpperCase()); //HELLO WORLD
 */

// trim() => remove whitespace from both ends of a string

/* 
let str = "      Hello,    World!   ";
console.log(str, str.length);

let trimComplete = str.trim();
console.log(trimComplete, trimComplete.length);

let startTrim = str.trimStart();
console.log(startTrim, startTrim.length);

let endTrim = str.trimEnd();

console.log(endTrim, endTrim.length);
 */

//startsWith() //check if a string starts with specified value
/* 
let str = "Hello World";
console.log(str.startsWith("World")); //fale
console.log(str.startsWith("Hello")); //true
 */

//endsWith()//check if a string ends with specified value
/* 
let str = "Hello World";
console.log(str.endsWith("World")); //true
console.log(str.endsWith("Hello")); //false
 */

// toString()

//repeat()
/* let str = "Hello";
console.log(str.repeat(4)); //HelloHelloHelloHello
 */
// padstart

/* let str = "5";
console.log(str.padStart(2, "0")); //005
console.log(str.padStart(5, "0")); //00005

// padEnd
console.log(str.padEnd(3, "0")); //500
console.log(str.padEnd(5, "0")); //50000
 */
