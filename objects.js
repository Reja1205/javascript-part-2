//Creating an object, adding property in object, adding methods,accessing object,delete object
const person={
    name:"Rejaur",
    age:34,
    country:"Bangladesh",
    add:function(a,b){
    return a+b;
    },
    sub:function(a,b){
    return a-b;
    }

}

//person.city="Dhaka";
//console.log(person.add(10,20));
//console.log(person.sub(10,20));
//delete person.add;
delete person.name;
//console.log(person)

//Objects are mutable: They are addressed by reference, not by value.

let cars={
    brand:'Toyota',
    color:'red',
    model:2024
    
}

let newCars=cars;

newCars.price=20000;
console.log(newCars);
console.log(cars);
