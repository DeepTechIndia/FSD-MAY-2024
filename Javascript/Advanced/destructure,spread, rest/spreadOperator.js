// spreadOpertator => unpack the elements arrays or object

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined);

// [1,2,3,4,5,6]

const arr3 = [1, 2, 3];
// const arr4 = arr3;
// arr4[3] = 4;
// console.log(arr3, arr4);

/* const arr5 = [...arr3];

arr5 = [1, 2, 3];
// arr5.push(arr32])

arr5[3] = 5;
console.log(arr5, arr3); */

// (memory) => console.log(arr4 === arr3); //true
// console.log(arr5 === arr3); //false

const name = "Yogesh";

const fullname = [...name];
console.log(fullname);

const obj1 = { id: 1, name: "qwerty" };

const obj3 = obj1;
obj3["age"] = 25;
console.log(obj3, obj1);
console.log(obj3 === obj1);

const obj2 = { ...obj1 };

console.log(obj2);
console.log(obj2 === obj1);
