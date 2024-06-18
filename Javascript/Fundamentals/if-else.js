// statements : based on some condition we will execute code 
// if the condition is true then only the statement will execute


// if (condition){
//     //code to execute if condition is true
// }

// Examples

/*

let isRaining = false;


if(isRaining){
    console.log("Take an umbrella");
}else {
    console.log("Dont take the umbrella");
}
*/


// let hour = 12;

// if(hour < 12){
//     console.log("Good Morning");
// }else{
//     console.log("good afternoon");
// }


// let number = 5;

// if(number >= 0){
//     console.log(number, "is positive");
// }else{
//     console.log(number,"is negative");
// }


// -3 -2 -1 0 1 2 3 4 5

// let age = 17;

// if(age >=18){
//     console.log("You can vote");
// }else{
//     console.log("you can't vote");
// }


// let num = 8;

// if(num%2 == 0 ){
//     console.log(num + " is a Even Number");
// }
// else{
//     console.log(num + " is a odd Number");
// }



// 7%2 => 1 => true
// 0 => false

// 0 === 0 => true




// let username = "admin"
// let password = "password1234"

// if(username === "admin" && password === "password123"){
//     console.log("Login Successful");
// }
// else{
//     console.log("Login Failed");
// }






let num = "word";

// type=text

// let number = hjsdfjsdb




// console.log(num > 0);

// if(num>=0){
//     console.log("positive number");
//     if(num%2 === 0){
//         console.log("even number");
//     }else{
//         console.log("odd number");
//     }
// }
// else{
//     console.log("negative number");
// }



// let a = 1;
// let b = "1";

// console.log(a==b); //true

// console.log(a===b); //false


// 2%2 => 0 

// console.log("123" - 4);

// let a = "3"
// let b =  a%2; //number
// console.log(typeof b);
// console.log(b);


let score = 59;

if(score >= 90){
    console.log("Grade : A")
}
else if (score >= 80){
    console.log("Grade : B")

}
else if(score >= 70){
    console.log("Grade : C")
}
else if(score >= 60){
    console.log("Grade : D")
}
else{
    console.log("Grade : F")
}

//-------------------------------------------------

let lightColor = "chinamina"

if(lightColor === "red"){
console.log("Stop");
}

else if (lightColor==="yellow"){
console.log("prepare");
}
else  if(lightColor==="green") {
    console.log("go")
}

else{ console.log("invalid color");}

// --------------------------------

let number = 31

if(number>=1 && number <=10){
    console.log("Number is between 1 and 10");
}
else if (number>=11 && number <=20){
    console.log("Number is between 11 and 20");
}
else if(number>=21 && number <=30){
    console.log("Number is between 21 and 30");
}
else{
   
        console.log("Numnber is out of the range");
    
}