//for loop
//let i =5;

for(let i=0;i<=10;i++){
    //console.log(i);
}
//console.log(i);

//for in loop
const person = {
        fname:"John", 
        lname:"Doe", 
        age:25
    };

for(let x in person){
    //console.log(x, person[x]);
}

//for of loop
const cars = ["BMW", "Volvo", "Mini"];

for(let x of cars){
    //console.log(x);// Getting the value 
}

//While loop
let j=0;
while(j<10){
    //console.log(j);
    j++;
}

//do whole loop

let d=0;

do{
    console.log(d);
    d++;
}
while(d<5);
