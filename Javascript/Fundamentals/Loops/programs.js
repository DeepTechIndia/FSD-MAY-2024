// camelCase to snake_case

function camelToSnake(camelCaseStr) {
  let snakeCaseStr = "";
  for (let i = 0; i < camelCaseStr.length; i++) {
    const char = camelCaseStr[i];
    if (char === char.toUpperCase() && char != char.toLowerCase()) {
      snakeCaseStr += "_" + char.toLowerCase();
    } else {
      snakeCaseStr += char;
    }
  }

  return snakeCaseStr;
}

// snake_case_string to camelCaseString

// //i=0
// snakeCaseStr=""
// char = t

// if(t === T && t != t ) => false

// else
// snakeCaseStr = "" + t => t

// //i=1
// char = h
// if(h === H && h != h ) => false
// snakeCaseStr = "t"+"h" => "th"

// //i=2
// if(i === I && i != i ) => false
// snakeCaseStr = "th"+"i" => "thi"

// // i=3
// if(s === S && s != s ) => false
// snakeCaseStr = "thi"+"s" => "this"

// // i=4
// if(I === I && I!= i) => true
// snakeCaseStr = "this" + '_' + i => "this_is_c"

// console.log(camelToSnake("thisIsCamelCase"));

// Nested for loops

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(`i=${i}, j=${j}`);
//   }
// }

/* // o/p => 
i=0, j=0;
i=0 , j= 1
i=0, j=2

i=1; j=0;
i=1; j=1;
i=1, j=2

i=2; j=0;
i=2; j=1 */

for (let i = 1; i <= 5; i++) {
  console.log(`Multiplication Table for ${i}`);

  for (let j = 1; j <= 10; j++) {
    let result = i * j;
    console.log(`${i} x ${j} = ${result}`);
  }

  console.log("---------------------------------");
}

// *
// * *
// * * *
// * * * *
// * * * * *

function printPattern(size) {
  for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }

  //   console.log(pattern);
}

printPattern(5);

// i = 1;

// pattern = "";

// (j = 1), j <= 1;

// pattern = "" + "*"; => "*"

// (j = 2), j <= 1;

// i=2,
// pattern =  ""
// i=2=>
// j=1; j<=2

// pattern = "" + * => "*"

// j=2; j<=2
// pattern = "*" + "*" => "**"

// j=3; j<=2 => flase
