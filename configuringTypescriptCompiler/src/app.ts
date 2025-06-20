let test: String = 'Hello world!';
const PI = 3.14;

console.log("Value of PI is:" +   PI);

const button = document.getElementById('btn')!;
//Here we are telling ts that ofcourse we are going to receive the button element
// ! simply assures ts that we are going to get the element here
// The question here is that how does ts knows that document.getElementById will retrun the element and how does it know about addEventListener how does it know about all these things 

function clickHandler(message: string){
    console.log(message);
}

button.addEventListener('click', clickHandler.bind(null,'Button is clicked')); 