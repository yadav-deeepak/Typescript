"use strict";
/**Lecture 28: Array Destructuring */
var _a;
// const person = ['John','Smith',28];
// //Array Destructuring
// const [fname, lname, age, gender = 'Male'] = person;
// console.log(fname,lname,age,gender);
// console.log(person);
/**Lecture 29: Object Destructuring */
// const user = {
//     forename: 'John',
//     age: 28,
//     gender: 'MALE',
//     city: 'London'
// }
// const {forename: fname, age, city} = user;
// console.log(fname,age,city);
/**Lecture 30: Spread Operator
 */
// const users: string[] = ['John','mark','merry'];
// console.log(users);
// console.log(...users);// This will extract each element from this array into individual values
/**Use Case of spread operator */
//Creating a shalow copy of array 
// const copyArray = [...users];
// copyArray.push('steve');
// console.log(copyArray);
// Any changes that we do in the copyArray wont be reflected in the users array
//Another usecase is creating an array from existing array 
// const extendedUsers: string[] = ['Ravi','Steve',...users];
//Now extendedUsers array will also contain the elements from the users array
// console.log(extendedUsers);
//spread Operator on objects
// const person ={
//     fname: 'John',
//     agae: 28,
//     gender: 'Male'
// };
// const employee = {...person, salary: 120000, company: 'Google'};
// console.log(person);
// console.log(employee);
/**Lecture 31: Rest Pattern & Rest Parameter */
let [a, b, ...rest] = [1, 2, 3, 4, 5];
// Here 1 and 2 will be assigned to a and b remaining 3,4,5 will be packed into an rest array
console.log(a, b);
console.log(rest); //[3,4,5]
//rest operator always comes on the LHS of the assignment operator and spread operator will always come on the RHS of the assignment operator
// let arr = [1,2,...rest];
// console.log(arr);
// function addNumbers(...num: number[]){
//     let count = 0;
//     for(let i of num){
//         count+= i;
//     }
//     return count;
// }
// let x =addNumbers(1,2,3,4,5,6);
// console.log(x);
/**Lecture 32: The Nullish Coalescing Operator */
const value = '';
let storage = value !== null && value !== void 0 ? value : 'Default';
// if the value is null or undefined then the default value will be assigned to the storage variable 
console.log(storage);
/*Lecture 33: Optional Chaining */
const products = [{ name: 'iphone', price: 1200, details: { color: 'black', ram: 8 } }, { name: 'Tshirt', price: 120, details: { color: 'red', size: 32 } }, { name: 'TS Book', price: 50, pages: 120, author: 'Sam' }];
for (let prod of products) {
    console.log('Product Name: ' + prod.name);
    console.log('*************');
    console.log('Product Price: ' + prod.price);
    console.log('Color: ' + ((_a = prod.details) === null || _a === void 0 ? void 0 : _a.color));
    0;
    console.log('\n');
}
/**
 * Lecture 34: Arrow Function
 */
//Function Declaration
function print(message) {
    console.log(message);
}
//Fuction Expression
// const sum = function(num1: number, num2: number){
//     return num1 + num2;
// }
//Arrow Function
const button = document.getElementById('btn');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    console.log('button clicked');
});
/**Lecture 35: Default Function Parameter */
function printDetails(name, age, gender = 'male') {
    const message = `Hi! my name is ${name} and I am ${age} years old ${gender}`;
    console.log(message);
}
printDetails('John', 23);
printDetails('Particia', 24, 'Female');
