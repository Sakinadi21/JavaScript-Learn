//print way
console.log("Mashu");
console.log("Saku");
console.log("Welcome");
console.log("I love JavaScript");

//variable
fullname = "Mashrafi Uddin";
console.log(fullname);
fullName = "Sakiba Belal";
console.log(fullName);
// age = 21;
// console.log(age);
Age = 20;
console.log(Age);
roll=1;
console.log(roll);
x=null;  //jani ki ace kintu vitore khali kicu ace
console.log(x);
y=undefined; //jani na ki ace
console.log(y);
isFollow=false;
console.log(isFollow);

// Variable Rules:
// Variable names are case sensitive; "a" & "A" is different .
// Only letters,digits,underscore(_) or $ should be 1st Character.
// Variable names cannot be reserved keywords.
// Variable names cannot be numbers only.
// Variable names cannot be special characters.
// Variable names cannot be empty strings.
// Variable names cannot be start with a number.
// Variable names cannot be start with a special character.
// Variable names cannot be start with a space.
// Variable names cannot be start with a hyphen (-).

//Camal case 'firstDay' allowed

// var: Variable can be re-declared & updated. A global scope Variable.
// let: Variable cannot be re-declared but can be updated. A block scope Variable.
// const:Variable cannnot be re-declared or updated. A block scope Variable.

let amount =10;
console.log(amount);

// let age=2;
// let age = 3;  error dekai
// const age =5;
// const age =7;
// console.log(age);

let a;
a=5;
console.log(a);

{
    
let a;
a=5;
console.log(a);  //block
}
{
let a;
a=15;
console.log(a);
}
let g =BigInt("123");
let h = Symbol("Assalamualikum");


// Primitive 
// Number,String,Boolean,Undefined,Null,BigInt,Symbol


let age=10;
console.log(age);

const student = {
    fullName : "Mashrafi Uddin",
    age : 21,
    cgpa : 4.00 ,
    isPass : true,

};// ; must 
console.log(student.age);

console.log("age");
console.log(student["age"]);


student["age"]=student["age"]+1;  //change 
console.log(student["age"]);

student ["name "]="Mashu";
console.log(student["name "]);

// const name = "Rahul";
// name = "Saki";
//let update 
//const no update
//but if const obj --> key then update possible


const product ={
    title : "Ball Pen",
    rating : 4,
    offer: 5,
    PromiseRejectionEvent: 270,
};
console.log(product);

/*
"abcd"+123
'abcd123'

"123"+123
123123
*/

const details = {
    name:"Sakiba Belal",
    username :"saki@gmail.com",
    posts:195,
    followers:596,
    isFollow : true,
    isFollowing :false,


};
console.log(details);