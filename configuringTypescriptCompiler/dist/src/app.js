"use strict";
let test = 'Hello world!';
const PI = 3.14;
console.log("Value of PI is:" + PI);
const button = document.getElementById('btn');
function clickHandler(message) {
    console.log(message);
}
button.addEventListener('click', clickHandler.bind(null, 'Button is clicked'));
