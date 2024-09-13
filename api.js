/*
The fetch ApI provides an interface for fetching (sending/receiving) resources.
it uses reuest and response objects
The fetch() method is used to fetch a resoursce(data)

let promise = fetch(url,[options])


*/
const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");



// let promise = fetch(URL);
// console.log(promise);

// const getFacts = async () => {
//     console.log("getting data ...");
//     let response = await fetch(URL);
//     console.log(response);

//     let data = await response.json();
//     //console.log(data);
//     factPara.innerText = data[2].text;
// };


function getFacts() {
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data)=> {
        console.log(data);
        factPara.innerText = data[2].text;
    });
}
btn.addEventListener("click",getFacts);

//Undestanding terms
// AJAX is Asynchronous JS & XML
// JSON is Javascript Object Notation 
// JSON() method : returns a second promise that resolves with the result of parsing the 
// response body text as JSON . (Input is JSON, output is JS object)


/*
reuests and response
HTTP Verbs
Response Status Code

*HTTP response headers also contain details about the responses , such as content type,
HTTP status code etc. */
