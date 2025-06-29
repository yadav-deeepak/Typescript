/**************
 * Lecture 3: Variables In Typescript 
 */

// let num = 100;
// let Num = 100;
/**here both num and Num are two different variable
 * When the value is assigned to the variable the type of the variable is also decided , so after that we can't assign a different type of data in that variable.
 */

// const str = 'hello world';

/**************
 * Lecture 4: DataTypes In Typescript 
 */

//1. String Datatype 
/*const str1 = 'This is a string created using single quotes';
const str2 = "This is a string created using double quotes";
const str3 = `This is a string created using back ticks ${str1}`;

console.log(str1);
console.log(str3);
*/

//2. Number Datatype
// let num = 12;// stored in the memory as 12.0
// let pi = 3.14;

//3. Boolean Datatype
// let isEligible = true;
// let isEqual = false;
// console.log(Boolean(0));
// console.log(Boolean(100));

// let isGreater = 10 > 5;
// console.log(isGreater); 

/***********************************************
 * Lecture 5: Type Assignment and type inferance 
 */

// function sum(num1: number, num2: number, isPrint: boolean){
//     if(isPrint){
//        let s = num1 + num2;
//        console.log("Sum = " + s); 
//     }
//     return num1 + num2;
// }
// console.log(sum(2,3,true));

// let n1: number = 10;
// let n2: number = 20; 

// console.log(sum(n1,n2, false));

/***********************************************
 * Lecture 6: Object Type in typescript 
 */

// let person: {name: string, age: number} = {
//     name: 'John',
//     age: 30
// };

// console.log(person);
// console.log(person['age']);


/***********************************************
 * Lecture 7: Arrays in typescript
 */

// let person = ['jon',32,'male',1000]; // array storing multiple type of data
// // Inserting any other type of value in the array will give error
// let names = ['suraj','janhvi','shiva','deepak'];
// let number = [1998,2001,2023,2024];

// for(let year of number){
//     console.log(year);
// } 

/***********************************************
 * Lecture 8: Tuples in typescript
 */

// let employee1: [number, string, number, boolean] = [123, 'John', 2000, true];
// console.log(employee1); 


// /***********************************************
//  * Lecture 9: Enums in typescript
//  */

// enum Roles {
//     ADMIN, 
//     READ_ONLY, WRITE_ONLY, READ_WRITE
// }

// const user = {
//     name: 'John',
//     age: 30,
//     gender: 'male',
//     role: Roles.ADMIN
// }

// if(user.role === Roles.ADMIN){
//     console.log('This user is an admin');
// }

/***********************************************
 * Lecture 10: Any type in typescript
 */
// let dynamicData: any;
// dynamicData = 'Hello';

// let test;
// console.log(typeof test);
// console.log(test);  

/***********************************************
 * Lecture 11:  Union type in typescript
 */
 
// let user: {name: string; age: number} | null = null;
// //It means that user object can return both null and the object with string and number type values

// function getUser(){
//     const uname = 'john';
//     const uage = 20;
//     user = {name: uname, age: uage};
//     return user;
// }

// getUser();

// function printStatus(message: string, code: string | number){
//     if(typeof code === 'string'){
//        console.log(`${message}. Status Code: ${code.trim()}`); 
//     }else{
//         console.log(`${message}. Status Code: ${code}`);
//     }
// }

// printStatus('request was successful', 200);
// printStatus('Resource code not found', ' 404');

/*********************
 * Lecture 12: Literal Type In Typescript
 */
// const str = 'Hello, world!';
// let str2 = 'Some string';

// console.log(typeof str);
// console.log(typeof str2);

// function roleMessage(role: string){
//     switch(role){
//         case 'admin':
//             console.log('You have admin permission on this site');
//             break;
//         case 'read':
//             console.log('You have read permission on this site');
//             break;
//         case 'read-write':
//             console.log('You have read write permission on this site');
//             break;
//         default:
//             console.log('unknown user permission');
//     }
// }

// roleMessage('admin');

/*********************
 * Lecture 13: Understanding Type Alias
 */

// type stringOrNumber = string |number;
// function printStatus(message: string, code: stringOrNumber){
//     if(typeof code === 'string'){
//        console.log(`${message}. Status Code: ${code.trim()}`); 
//     }else{
//         console.log(`${message}. Status Code: ${code}`);
//     }
// }

// printStatus('request was successful', 200);
// printStatus('Resource code not found', ' 404');

// type roleType = 'admin' | 'read' | 'read-write';

// function roleMessage(role: roleType){
//     switch(role){
//         case 'admin':
//             console.log('You have admin permission on this site');
//             break;
//         case 'read':
//             console.log('You have read permission on this site');
//             break;
//         case 'read-write':
//             console.log('You have read write permission on this site');
//             break;
//         default:
//             console.log('unknown user permission');
//     }
// }

// roleMessage('admin');

// type User = {firstname: string; lastname: string; age: number};

// function getFullName(user: User){
//     return user.firstname + ' ' +user.lastname;
// }
// function isEligibleForVoting(user: User){
//     return user.age >= 18;
// }

// let user: User = {firstname: 'John', lastname: 'Singh', age: 23};

// console.log(getFullName(user));
// console.log(isEligibleForVoting(user));

/*********************
 * Lecture 14: Function Return Type
 */
// function add(num1: number, num2: number){
//     return (num1+num2); 
// }

/**********************
 * Lecture 15: Function As Type
 */
// type User = {name: string; age: number};

// function greetUser(user: User){
//     const greetmsg = 'Hello, ' + user.name;
//     console.log(greetmsg);
// }

// function sum (num1: number, num2: number){
//     return num1 + num2;
// }

// let greet: (usr: User) => void;
// using this we can assign only a specific type of a function to greet variable only a function with 1 parameter and void return type will be assigned to the greet .

// greet = greetUser;
//Here type of greet is any so if we want to assign any value to the greet variable we can easily assign it but if we want greet to behave as a function only then we can set its type as function
//When we make its type as a function then greet will behave only as a function no other values can be assigned to it.

// let user = {name: 'John', age: 23};
// greet(user);

// greet = sum;
// here we are trying to assign sum() to greet but it will throw an error because we can't assign this type of function to greet

/***************************
 * Lecture 16: Function type for callback 
 */

// function getResult(num1: number, num2: number, print: (str: string, n: number) => void){
//     const result = num1 + num2;
//     print('Sum =', result);
// }

// function display(msg: string, result: number){
//     console.log(msg + result);
// }

// getResult(12,14,display);

/****************************
 * Lecture 17: Unknown Type in Typescript
 */

// let inputVal: unknown;
// let uname: string = 'Something';

// inputVal = 100;
// inputVal = 'Hello World ';

// if(typeof inputVal === 'string'){
//     uname = inputVal;
// }

// console.log(uname);
// console.log(typeof inputVal);

/***************************
 * Lecture 18: Never Type in Typescript
 */

// function greetUser(name: string): void{
//     console.log('hello ,' + name);
// }
// // greetUser('John');

// function createError(errormsg: string, errorCode: number): never{
//     throw {message: errormsg, code: errorCode};
// }

// // createError('Internal server error', 500);

// console.log(greetUser('Mark'));
// console.log(createError('An Error has Occurred', 404)); 