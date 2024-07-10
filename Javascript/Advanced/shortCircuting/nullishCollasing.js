// right hand operand => when the left hand is null or undefined

// let result = a ?? b;

let name = "abc";
// console.log(name);
// let defaultName = "guest";

let displayName = name ?? defaultName;
console.log(displayName);

let count = 0;
console.log(typeof count);
let defaultCount = 10;

let finalCount = count ?? defaultCount;
console.log(finalCount);

let firstName = null;
let secondName = null;
let nickName = "abc";
let defaultName = "guest";

let diaplay = firstName ?? secondName ?? nickName ?? defaultName;
console.log(diaplay);
