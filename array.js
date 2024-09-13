// let marks = {
//     stu1 : 93,
//     stu2 :82
// };
// console.log(marks);


let marks = [97,82,75,64,36];
console.log(marks);
console.log(marks.length); 

let heros = ["Mashrai Uddin","Sakiba Belal"];
console.log(heros);



let names = ["Sakiba","Sumaiya","Samaia","Tasnia","Rafia","Rafa","Helen","Tawsia"];
// for (let i = 0 ; i < names.length ; i++){
//     console.log(names[i]);
// }


//for of 
for(let name of names){
console.log(name);//jdi names ditam 8bar asto
}


let cities = ["delhi","pune","mumbai","hyderabad","guragon"];

for (let city of cities){
    console.log(city);//console.log(city.toUpperCase()); shb capital e deka jabe
}



let mark = [85,97,44,37,76,60];
let sum = 0;
 for (let val of mark){
    sum += val;
 }
 let avg = sum/mark.length;
 console.log(`avg mark of the class = ${avg}`);



 let items = [250, 654 , 300 , 900 , 50];
 console.log(items.toString()); //string e convert kre array ke
//  let i = 0;
//  for (let val of items){
//     console.log(`value at index ${i} =${val} `);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
//  }
for (let i = 0; i<items.length;i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);



let foodItems = ["chocolate","chips","lichi","juice","fruit"];
foodItems.push("burger","panner");
console.log(foodItems);
console.log(foodItems.toString());
foodItems.pop();
console.log(foodItems);

let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("deleted",deletedItem);



let marvelHeroes = ["thor","spiderman","ironman"];
let dcHeroes = ["superman","batman","aquaman"];
let BangladeshiHeroes = ["Rfiq","Shofiq","Jobbar"];
let heroes = marvelHeroes.concat(dcHeroes,BangladeshiHeroes);
console.log(heroes);

marvelHeroes.unshift("spiderman");
let val = marvelHeroes.shift();
console.log("deleted",val);

console.log(marvelHeroes.slice(1));

let arr = [1,2,3,4,5,6,7];


arr.splice(2,2,101,102);
//Add element
arr.splice(2, 0, 101);
//Delete element
arr.splice(3,1);
//Replace element
arr.splice(3,1,101);


let companies = ["Bloomberg", "Uber", "Google" , "IBM" , "NetBeans","Microsoft"];
companies.shift();
companies.splice(2,1,"Ola");
companies.push("Amazon");