/**Lecture 28: Array Destructuring */

const person = ['John','Smith',28];

//Array Destructuring
const [fname, lname, age, gender = 'Male'] = person;

console.log(fname,lname,age,gender);
console.log(person);