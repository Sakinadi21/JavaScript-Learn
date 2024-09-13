console.log("Hello");

let a = 5;
let b = 2;

//Arithmetic Operators 
// console.log("a=",a, " &b = ",b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b=", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b=", a ** b);

//Uniary Operators
// console.log("a =",a," & b = ", b);
// a = a + 1; //6
// console.log("a++ = ",a++);  //5
// console.log(" a =",a);
// a = a - 1;
// console.log("a =",a); //4

// console.log("++a = ", ++a ); 6
// console.log("a = ",a); 6

// console.log("--a = ", --a );//4
// console.log("a = ",a);//4


// console.log("a-- = ", a-- );//5
// console.log("a = ",a);//4


a += 4; //a = a+4
console.log("a = ",a); //9


a -= 4; //a = a-4
console.log("a = ",a); //5


a *= 4; //a = a*4
console.log("a = ",a); //20

a /= 4; //a = a/4
console.log("a = ",a); //1.25


a **= 4; //a = a**4
console.log("a = ",a); //625

//Comparison Operators

console.log("5 == 5", a == b);
console.log("5 != 2", a != b);

let x = 5; //number
let y = "5"; // string -> number

console.log("a === b" , a ===b);

console.log("a !== b" , a !==b);
console.log("5 > 3",a > b);
console.log("5 < 3",a < b);
console.log("5 >= 3",a >= b);
console.log("5 <= 3",a <= b);

//logical Operators

let p =6;
let q=7;
console.log("p && q", p && q); //7
console.log("cond1 && cond2 =",a < b && a === 6);
console.log("cond1 || cond2 =",a < b || a === 6);
console.log("!(6<5) =", !(a < b)); //false


//Conditional Statements

// let age = 18;
// if(age >= 18){
//     console.log("you can vote");
// }
// if(age < 18){
//     console.log("you can not vote");
// }


// let mode = "dark";
// let color;
// if(mode === "dark"){
//     color="black";
// }
// if(mode === "light"){
//     color = "white";
// }
// console.log(color);


// let num = 18;
// if(num %2 == 0){
//     console.log(num," is even");
// }
// else {
//     console.log(num,"is odd");
// }


// let mode = "blue";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// else if(mode === "blue"){
//     color = "blue";
// }
// else {
//     color = "white";
// }
// console.log(color);

/* 
if (mode === "dark") {
     console.log(mode);
    }*/




// let age = 25;
//  age >= 18? console.log("adult") : console.log("not adult");  
// // age >= 18 ? "adult" : "not adult"; //simpler,compact if -else

// let num = prompt("enter a number : ");
// if (num % 3 === 0) {
//     console.log(num,"is a multiple of 3");
// }
// else {
//     console.log(num,"is NOT a multiple of 3");
// }


let score = prompt("enter your score (1 - 100)");
let grade;

if(score >=90 && score <= 100){
    grade = "A";
}
else if(score >=70 && score <=89){
    grade = "B";
}
else if(score >=60 && score <=69){
    grade = "C";
}
else if(score >=50 && score <=59){
    grade = "D";
}
else if(score >=0 && score <=49){
    grade = "F";
}
console.log("according to your scores, your grade was : ",grade);