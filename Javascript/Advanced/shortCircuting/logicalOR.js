// short circuitng => give the values if first value is false

// logical or - short circuiting => it will always return the first truthy operand.

let a = true || false;
console.log(a);

let b = false || true;
console.log(b);

console.log(10 < 5 || 10 > 5);
// true | false => true

false || true;

let c = 0 || 42;
console.log(c);

let d = null || "hello";
console.log(d);

let value = 0;
let fallback = 42;
let defaultValue = 1;
let result = value || fallback || defaultValue;

console.log(result);

let x = 0 || false || false || false || 0;
console.log(x);
// render => button 1 || button 2
