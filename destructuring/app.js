/**Lecture 28: Array Destructuring */
var person = ['John', 'Smith', 28];
//Array Destructuring
var fname = person[0], lname = person[1], age = person[2], _a = person[3], gender = _a === void 0 ? 'Male' : _a;
console.log(fname, lname, age, gender);
console.log(person);
