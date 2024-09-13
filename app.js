const student = {
    fullName : "sakiba belal",
    marks: 94.4,
    printMarks: function() {
        console.log("marks = ",this.marks);
    },
};


const employee = {
    calcTax() {
        console.log("tax rate is 20%");

    },
    calcTax2 : function() {
       console.log("tax rate is 20%");
    }

};


const karanArjun = {
    salary : 50000,
};

karanArjun.__proto__ = employee;
/* prototypes in js 
A javascript object in an entity having state and behavior (properties and method)
JS objects have a special property called prototype.
We can set prototype using -- proto --


If object & prototype have same method,
object's method will be used
*/
/*
Classes in JS
Class is a program-code template for creating objects .
Those objects will have some state (variables) & some behaviour (functions) inside it.

class MyClass{
 constructor() {.....}
 myMethod(){....}
 }

 let myObj = new MyClass();
*/

class ToyotaCar {
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;

    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");

    }

    setBrand(brand) {
        this.brandName = brand;
    }
}
let fortuner = new ToyotaCar("fortuner", 20);
console.log(fortuner);
// fortuner.setBrand("fortuner");
let lexus = new ToyotaCar("lexus",22);//constructor
console.log(lexus);
// lexus.setBrand("lexus");

/*
Constructor() method is : 
automatically invoked by new
initializes object 


class MyClass {
constructor() {...}
myMethod(){...}
}
*/

/*
Inheritance is passing down properties & methods from parent class to child class.


class Parent {
}
class Child extends Parent {
}

if child & parent have same method,child's method will be used . [Method Overriding]
*/


class Parent {
    hello () {
        console.log("hello");
    }
}
class Child extends Parent {}

let obj = new Child();



class Person {

    constructor(name) {
    this.name = name ;
        // console.log("enter parent constructor");
        this.species = "homo sapiens";
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work(){
        console.log("do nothing");
    }
}

class Engineer extends Person {

    constructor(branch){
        console.log("enter child constructor");
        super();//to invoke parent class constructor 
        this.branch = branch;
        console.log("exit child constructor");
    }
    work() {
        console.log("solve problems,build something");
    }
}

class Doctor extends Person {
    work() {
        super.eat();
        console.log("treat patients");
    }
}
let engObj = new Engineer("Mashu");


/* Super Keyword 
The super keyword is used to call the constructor of its parent class to access the parent's 
properties and methods .

super(args) // calls Parent's constructor 
super.parentMethod(args)
*/

let DATA = "secret information";
class User {
    constructor(name,email){
        this.name = name;
        this.emai = email;
    }

    viewData() {
        console.log("data = ",DATA);

    }
}
class Admin extends User{
    constructor (name,email){
        super(name,email);
    }
    editData() {
        DATA = "some new value";
    }
}

    let student3 = new User("Mashu","mashu@gmail.com");
    let student2 = new User("Saku","saku@gmail.com");
    let teacher2 = new User("Dean","dean@college.com");
     let Admin2 = new Admin("admin","admin@college.com");


     /* Error Handling
     
     
     try-catch 
     try{
     ..normal code 
} catch(err) {
 ...handling error 
}  */
let a = 5;
let b = 0;
console.log("a =",a);
console.log("b =",b);
console.log("a + b =",a + b);
console.log("a - b =",a - b);
console.log("a * b =",a * b);
console.log("a / b =",a / b);
try{
    console.log("a + b = ", a + c); //error 
} catch (err) {
    console.log(err);
    
}

