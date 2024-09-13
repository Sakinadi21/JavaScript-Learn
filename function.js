// console.log("hello");

// "abc".toUpperCase()
// "xyz".toUpperCase
// [1,2,3].push[4];

// Block of code that performs a specific TextTrackList, can be invoked whenever needed.

// Function definition

// function functionName(){
//     //do some work
// }

// function call 
// functionName();



function MasHu(){
    console.log("I am a student");
    console.log("I am a tecacher");
    console.log("I am hardworking");
}

MasHu();


function MasHu(saku , mashu){
    console.log("saku & mashu");
    //parameter -> input
}

MasHu("Mashu"); //argument


//Function -> 2 numbers,sum

// function sum(x,y){ //local variable
//     sum = x+y;
//     return sum;
// }
// let val =sum(2,13);
// console.log(val);


function sum(x,y,z){
    sum = x+y+z;
    return sum;
}
let val = sum(13,2,3);
console.log(val);



// Arrow functions
// Compact way of writing a function
// const functionName=(param1,parm2...) => {
//     //do some work
// }

// sum function
function sum(a,b){
    return a*b;
}



const arrowSum = (a , b )  => {
    console.log(a+b);
}


// //function diye 
// function countVowels(str){

//     let count = 0;
//     //Mashrafi Uddin , count = 4
//     for(const char of str){
       

//     if(char == "a" || 
//         char == "e" ||
//         char == "i" ||
//         char == "o" ||
//         char == "u" 
//     ){
//         count ++;
//     }
// }
//    return count;
// }

// //arrow function diye
// const countVow = (str)=>{

//     let count = 0;
//     //Mashrafi Uddin , count = 4
//     for(const char of str){
       

//     if(char == "a" || 
//         char == "e" ||
//         char == "i" ||
//         char == "o" ||
//         char == "u" 
//     ){
//         count ++;
//     }
// }
//    return count;
// }



// //for Each loop arrays
// arrowSum.forEach(callBackFunction)
// CallbackFunction : Here , it is a function to execute for each element in the Array
// * A callback is a function passed as an argument to another function.
//Higher order function / methods

// arr.forEach((val)=>{
//     console.log(val);
// })


// let arr = ["ctg", " dhaka"];

// arr.forEach((val,idx) => {
//     console.log(val,idx);
// });


// let nums = [67,52,39];
// let calSquare = (num) => {
//     console.log(num * num);

// };
// nums.forEach(calSquare);



//Map
// Creates a new array with the results of some operation. The value its  callback returns are used to Form
// new array 

// arrowSum.map(callbackFnx(value,index,array))

// let newArr = arr.map ((val) =>{
//     return val*2;
// })


//  let nums = [67,52,39];

 
// nums.map((val)=> {
//     console.log(val);
// });

// let calcSquare = (num) => {
//     console.log(num*num);

// };

//Some More Array Methods
// FileSystemEntryCreates a new array of elements that give true for a condition / filter .
// Eg: all even elements 

// let newArr = arr.filter () (val)=>{
//     return val %2 === 0;
// })


// let arr =[1,2,3,4,5,6,7];

// let evenArr = arr.filter ((val)=> {
// return val % 2 === 0;
// });

// console.log(evenArr);



// Some More Array Methods 
// Performs some operations & reduces the array to a single value . 
// It returns  that single value.

// let arr =[1,2,3,4];

// const output = arr.reduce((res,curr) => {
//     return res + curr;
// });

// console.log(output);


// let arr = [5,6,2,1,101,3];

// const output = arr.reduce ((prev , curr) =>{
//     return prev < curr ? prev : curr ;
// });
// console.log(output); 


let n = prompt("enter a number : ");
 
let arr = [];

for (let i=1;i<=n ;i++ ){
    arr[i-1] = i; // 1(o) , 2(1) , 3(),4
}
console.log(arr);


arr.reduce((res,curr) =>{
    return res+ curr;
})

console.log("sum = ",sum);


let factorial = arr.reduce((res,curr) => {
    return res*curr;
});
console.log("factorial =",factorial);