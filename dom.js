// // // console.log("hello!");
// // // alert("apna college");

// // // console.log(window);

// // // //What is DOM?
// // // //When a web page is loaded ,the browser creates a Document Object Model (DOM) of the page.


// // // //concole.log -> print
// // // //window.dir -> document -> prep method

// // // /*                 window
// // //                      |
// // //                      document
// // //                      |
// // //                      html
// // //                      /  \
// // //             meta meta        body
// // //              title link       /  \
// // //                   div h1 p div   script */
   

// // // console.dir(document.body);

// // // //if we use script .js 1st then it gives null output


// // // //DOM Mainpulation


// // // let heading = document.getElementById("heading");//h1
// // // console.dir(heading);

// // // let headings = document.getElementsByClassName("heading-class");
// // // console.dir(headings);
// // // console.log(headings);

// // // let parahs = document.getElementsByTagName("p");
// // // console.dir(parahs);

// // // //Selecting with id
// // // document.getElementById("myId");

// // // //Selecting with class
// // // document.getElementsByClassName("myClass");

// // // //Selecting with tag
// // // document.getAnimations

// // // let firstEl = document.querySelector("p");


// // // //Query Selector

// // // document.querySelector("myId / myClass / tag")
// // // //returns first element

// // // document.querySelectorAll("myId / myClass / tag")
// // // //returns a NodeList

// // // // Properties

// // // tagName : returns tag or element nodes 
// // // innerText : returns the text content of the element and all its children 
// // // innerHTML : returns the plain text or HTML contents in the element 
// // // textContent : returns textual content even or hidden elements


// // let div = document.querySelector("div");
// // console.dir(div);


// // let heading = document.querySelector("h1");

// // let divs = document.querySelectorAll(".box");

// // for(div of divs){
// //     console.log(div);
// //     div.innerText ="he and me";
// //}

// // let h2 = document.querySelector("h2");
// // console.dir(h2.innerText);

// // h2.innerText = h2.innerText + "from sakiba belal";


// // let divs = document.querySelectorAll(".box");
// // console.log(divs);
// // divs[0].innerText = "Mashrafi Uddin";
// // divs[1].innerText = "Chittagong collegiate school"
// // divs[2].innerText = "Notore Daem College";

// // let divs= document.querySelectorAll(".box");

// // let idx = 1;
// // for(div of divs){
// //     div.innerText =`new unique value ${idx}`;
// //     idx++;
// // }


// // Attributes
// // getAttribute(attr) // to get the attribute value
// // setAttribute(attr,value)// to set the attribute val th

// // Style 
// // Node.style


// // let div = document.querySelector("div");
// // console.log(div);

// // let id = div.getAttribute("id");
// // console.log(id);

// // let name = div.getAttribute("name");
// // console.log(id);


// // let para = document.querySelector("p");
// // console.log(para.getAttribute("class"));
// // console.log(para.setAttribute("class","newClass"));

// // let div = document.querySelector("div");
// // div.style.visibility="hidden";
// // div.style.backgroundColor = "pink";

// // div.style.fontSize = "25px";

// // div.innerText ="Mashu";
// // let newBtn = document.createElement("button");
// // newBtn.innerText = "click me !";
// // console.log(newBtn);

// // Insert Elements    let el = document.createElement("div")
// // node.append(el) //adds at the end of node (inside)
// // node.prepend(el) // adds at the start of the node (inside)
// // node.before (el) //adds before the node (outside)
// // node.after(el ) //adds after the node(outside)


// // Delete Element
// // node.remove() // removes the node



// // let newBtn = document.createElement("button");
// // newBtn.innerText="click me !";
// // console.log(newBtn);

// // let div = document.querySelector("div");
// // div.append(newBtn);

// // let div = document.querySelector("div");
// // div.prepend(newBtn);

// // let p = document.querySelector("p");
// // p.after(newBtn);



// // let newHeading = document.createElement("h1");
// // newHeading.innerHTML = "<i> Hi, I am new ! </i>";

// // document.querySelector("body").prepend(newHeading);


// // let para = document.querySelector("p");
// // para.remove();


// // newHeading.remove();



// // let newBtn = document.createElement("button");
// // newBtn.innerText = "click me !";

// // newBtn.style.color = "white";
// // newBtn.style.backgroundColor = "red";

// // document.querySelector("body").prepend(newBtn);



// // //qs2


// // let para = document.querySelector("p");


// /*
// Events in JSONThe change in the state of an object is known as an event.
// events are fired to notify code of "intersting changes" that may affect code execution.


// Mouse events(click , double click etc.)
// Keyboard events (keypress, keyup,keydown)
// Form events (submit etc)
// print event & many more
// */


// //Event handling in JS
// // Node.event = () => {
// //     //handle here
// // }


// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log("evt");
    
//     console.log(evt.type); 
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };
// btn1.onclick = () => {
//     console,log("Handler2");
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
// console.log("you are inside div");
// };

// //Event listeners

// // Node.addEventListener(event,callback)
// // Node.removeEventListener(event,callback)


// btn1.addEventListener("click", () => {
// console.log("button1 was clicked - handler1");
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
//     });


//     const handler3 = () => {
//         console.log("button1 was clicked - handler3");
//     };

// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click", () => {
//             console.log("button1 was clicked - handler4");
//             });

// let div = document.querySelector("div");


let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");

let currMode = "light"//dark

modeBtn.addEventListener("click",() => {
    if (currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");

    } else {
        currMode = "light";
       body.classList.add("dark");
       body.classList.remove("dark");
    }
   console.log(currMode);
})



let div = document.querySelector("#man");


let manDiv = "light"//dark

manDiv.addEventListener("click",() => {
    if (manDiv === "light"){
        manDiv = "dark";
        body.classList.add("dark");
        body.classList.remove("light");

    } else {
        manDiv = "light";
       body.classList.add("dark");
       body.classList.remove("dark");
    }
   console.log(manDiv);
})
