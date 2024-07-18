// Dates => Dates object

// let now = new Date();
// console.log(now.toString());

// UTC4
// constructor => construct

// let specificDateTimeComponent = new Date(2023, 6, 10, 10, 30, 45, 100);
// console.log(specificDateTimeComponent.toString());

// jan => 0
// feb => 1
// mar => 2
// apr => 3
// may => 4
// jun => 5
// jul => 6
// aug => 7

// Jan 1, 1970
// let miliseconds = new Date(123456789000000);
// console.log(miliseconds.toString());

// methods

let now = new Date();
let year = now.getFullYear();
console.log(year);

console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());

// 24hrs =>

console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

// toISOString() => ISO format

let newDate = now.toISOString(); //yyyy-MM-DDTHH:mm //UTC
// console.log(newDate.toString());

console.log(now.toTimeString());

//format date //DD/MM/YYYY
function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

console.log(formatDate(new Date()));

// [{
//     date : 02/01/1234;
//     datas : [1,2,23,4,]
// },
// {
//     date : 02/04/1234;
//     datas : [1,2,23,4,]
// },]

//calculate the future dates

function futureDate(daysToAdd) {
  let currentDate = new Date();
  //   console.log(currentDate.getTime());
  let future = new Date(
    currentDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000
  );
  return future.toString();
}

console.log(futureDate(7));

// 7 * 24 * 60 * 60 * 1000;
