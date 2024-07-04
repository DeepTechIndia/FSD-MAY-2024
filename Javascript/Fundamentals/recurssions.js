// function camelToSnakeCase(str, index = 0, result = "") {
//   if (index >= str.length) {
//     return result;
//   }

//   // 16 >= 15

//   const char = str[index];
//   // str[4];
//   // char = A;

//   // A >= "A" && A<="Z"

//   // result = result + '_' + char.toLowerCase()

//   //       = this+ '_'+i => this_i
//   // = this_is_a

//   if (char >= "A" && char <= "Z") {
//     result += "_" + char.toLowerCase();
//   } else {
//     result += char;
//   }

//   return camelToSnakeCase(str, index + 1, result);
// }

// // camelToSnakeCase(str, (index = 16), (result = "this_is"));

// const camelCase = "thisIsAnExample";
// const snakeCase = camelToSnakeCase(camelCase);
// // print(snakeCase);
// console.log(snakeCase);

// ----------------------------------------------------------

// function sumArray(arr, index = 0) {
//   if (index >= arr.length) {
//     return 0;
//   }

//   return arr[index] + sumArray(arr, index + 1);
// }

/* sumArray([1, 2, 3, 4, 5], (index = 0));

if(0>= 5) => 
15
1 + sumArray([1, 2, 3, 4, 5], index=1){ 14 
  2 + sumArray([1, 2, 3, 4, 5], indexx =2){ 12
    3 + sumArray([1, 2, 3, 4, 5], indexx =3){ 9
      4 + sumArray([1, 2, 3, 4, 5], indexx =4){ 5
        5 + sumArray([1, 2, 3, 4, 5], indexx =6)
        5 +0
      }
    }
  }
} */

const array = [1, 2, 3, 4, 5];

const sum = sumArray(array);
console.log(sum);

function reverseString(str) {
  if ((str = "")) {
    return "";
  }

  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

l;

// const string = "hello";
// console.log(string.slice(0,3)) => hel

const reversed = reverseString(string);
console.log(reversed);

// "hello" = "" => faslse

// str[5 - 1] => o + reverseString(0,-1) {
//   o + reverseString(hell){
//     o + l => ol + reverseString(str.slice(0,-1)) => hel
//   }
// }
