/*
Synchronous
Synchronous means the code runs in a particular seuence of instructions given in the program .
Each instruction waits for the previous instruction to complete its execution.

Asynchronous 
Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions,
which causes a delay in the Ul. Asynchronous code execution allows to execute next instructions
 immediately and doesn't block the flow.
*/


// function hello() {
//     console.log("hello");
// }
// setTimeout(hello, 4000); //timeout ;
console.log("one");
console.log("two");

setTimeout(() => {
    console.log("hello");
}, 4000); //timeout

console.log("three");
console.log("four");

//Callbacks 
//A callback is a function passed as an argument to another function.

function sum(a, b){
    console.log(a + b);
}
function calculator(a,b, sumCallback) {
    sumCallback(a,b);
}
calculator(2,3,(a,b) => {
console.log(a+b);
});

//CallBack Hell
//Nested callbacks stacked below one another forming a pyramid structure.
//(Pyramid of Doom)
//This style of programming becomes difficult to understand & manage .
//nesting

let age = 9;
if(age >= 20){
    if(age >=60){
        console.log("senior");
    } else if(age =60) {
        console.log("middle");
    }else {
        console.log("child");
    }
}


for(let i = 0; i<5 ; i++) {
    let str = "";
    for (let j = 0; j < 5; j++ ){
        str = str + j ;
    }
    console.log(i,str);
}


function getData(dataId, getNextData){  //2s
    setTimeout(() => {
      console.log("data",dataId);
      if(getNextData){
        getNextData();
      }
    },2000);
    
}
//callback hell
getData(2, () => {
    console.log("getting data2 .... ");
    getData(3, ()=> {
        console.log("getting data3 .... ");
        getData(4,()=> {
            console.log("getting data4 .... ");
            getData(5);
        });
    });
});


/*Promises 
Promise is for "eventual" completion of task. It is an object in JS.
It is a solution to callback hell.

let promise = new Promise((resolve,reject) => {...})
                           ------function with 2 handlers---------

                           resolve & rejust are callbacks provided by JS 
                           */

// let promise = new Promise((resolve , reject ) => {
//     console.log("I am a promise");
//     resolve("success");
//     reject ("some error occured");
// });


// function getData2(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             console.log("data" ,dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//          },5000);
//         });
// }

/*
Promises 
A javascript promise object can be :
Pending : the result is undefined
Resolved : the result is value (fulfilled)     resolve (result)
Rejected : the result is an error object         reject(error)

*Promise has state (pending,fulfilled) & some 
result ( result for resolve & erro for reject).

.then() & .catch()
promise.then((res) => {...})
promise.catch((err)) => {...})

*/

const getPromise = () => {
    return new promise((resolve, reject) => {
        console.log("I am a promise");
    });
};

let promise = getPromise();
promise.then(() => {
    console.log("promise fulfilled",res);
});
promise.catch((err) => {
    console.log("rejected",err);
});


function asyncFunc2() {
    return new Promise((resolve , reject)=> {
        setTimeout(() => {
            console.log("some data2");
            resolve("success");

        },4000);
    });
}


function asyncFunc3() {
    return new Promise((resolve , reject)=> {
        setTimeout(() => {
            console.log("some data2");
            resolve("success");

        },4000);
    });
}

console.log("fetching data2");
let p2 = asyncFunc2();
p.then((res) => {
    console.log(res);
});

console.log("fetching data3");
let p3 = asyncFunc3();
p.then((res) => {
    console.log(res);
    console.log("fetching data2...");
    let p2 = asyncFunc2();
    p2.then((res) => {
        console.log(res);
    });
});


function getData(dataId){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            console.log("data",dataId);
            resolve("success");
        },5000);
    });
}

//Promise Chain
// let p4 = getData(4);
// p4.then((res)=> {
//     console.log(res);
// });

// getData(2).then((res) => {
//     console.log(res);
//     getData[3].then(()=>{
//         console.log(res);
//     });
// });

// getData[2]
// .then((res) => {
//     return getData[2];
// })
// .then((res)=>{
//     return getData[3];
// });
// .then((res)=> {
//     console.log(res);
// });


//Async - Await
/*
async function always returns a promise.
async function myFunc() {.....}

await pauses the execution of its surronding async function untill the promise is setted.   
*/

function api(){
    return new Promise((resolve , reject) => {
        setTimeout(()=> {
            console.log("weather data");
            resolve[200];
        },2000);
    });
}

async function getWeatherData(){
    await api(), //st
    await api(); //2nd
}

function getData(dataId){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}

//Async-await
async function getAllData(){
    console.log("getting data.......");
    await getData[2];
    console.log("getting data2.......");
    await getData[3];
    console.log("getting data3.......");
    await getData[4];
    console.log("getting data4.......");
    await getData[5];
    console.log("getting data5.......");
    await getData[6];
}

/*

IIFE : Immediately Invoked Function Expression

IIFE is a function that is called immediatley as soon as it defined

(function (){
 //-
})();
(() => {
    //-
    })();

(async()=> {
    //-
    })();
*/