//passing data as parameter
function myFunction(name, country){
    console.log("My name is "+name+" I'm from "+country);
}

//myFunction("Rejaur","USA");


function calculetor(num1,num2){
   let  result=num1+num2;
   return result;
}

let result =calculetor(15,15);
//console.log(result);

function myFunction2(money){
    let eggPrice=15;
    let quantity=money/eggPrice;
    return quantity;
}

let numberOfEggs=myFunction2(500);
//console.log(numberOfEggs);

//Passing object as parameter by creating object datatype

const devices ={
    name:'Iphone',
    price:1200,
    colour:'Black'
}

function products(myDevices){
//console.log(`My device is ${myDevices.name} and price is ${myDevices.price}`);
}

products(devices);

//Passing object as parameter by creating object as arguments by calling method 

function myFunction3(myDevices){
    //console.log(`My device is ${myDevices.name} and price is ${myDevices.price}`)

}

myFunction3({
    name:'Dextop',
    price:500,
    colour:'Blue'

})

//Passing Array as parameter by creating Array datatype
let ary=[10,12,14,16];

function myFunction4(anyArrays){
//console.log(`My arrays are ${anyArrays} last number of array is ${anyArrays[3]}`)
}

myFunction4(ary);

//Function definition

function addition(num1,num2,num3){
    return num1+num2+num3;
}

//console.log(addition(10,20,30));

//Function expression without giving function name
let calculation=function(num1,num2,num3){
    return num1+num2+num3;
}

console.log(calculation(10,50,100));
