//Current date
const currentDate=new Date();
//console.log(d);

//specified date
const specifiedDate=new Date("1990-12-5");
//console.log(specifiedDate);

// console.log("Year",currentDate.getFullYear());
// console.log("Month",currentDate.getMonth());
// console.log("Day",currentDate.getDay());
// console.log("Hours",currentDate.getHours());
// console.log("Minutes",currentDate.getMinutes());

console.log(currentDate.toDateString());
console.log(currentDate.toLocaleDateString());
