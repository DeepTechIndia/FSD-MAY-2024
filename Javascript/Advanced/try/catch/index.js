// try/catch => allows you to handle the errors

/* try{
    // code that ,ay throw an error
    line 1
    line 2
    line 3
}
catch(error){
// handles the errort
} */

try {
  let result = 10 / 0;
  console.log(result);

  let obj = null;
  console.log(obj.name); //throw error
} catch (error) {
  console.log("An error occured", error.message);
}

try {
  let age = -1;
  if (age < 0) {
    throw new Error("Age Cannot be negative");
  }
} catch (error) {
  console.log("Error", error.message);
}
