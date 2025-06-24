/**
 * Lecture 37: Creating And Using Class
 */

//How to create a class
class User {
    firstname: string;
    lastname: string;
    age: number;
    gender: string;

    constructor(n: string, ln:string, a: number, g: string){
        this.firstname = n;
        this.lastname = ln;
        this.age = a;
        this.gender = g;
    }
    greetUser(salutation: string){
        const msg = 'Hello' + ' ' + salutation + this.firstname + ' ' + this.lastname;
        console.log(msg);
    }
}

//Creating an object
const user1 = new User('Viper','Ankur',23,'Male');
const user2 = new User('Suraj','Yadav',21,'Male');
const user3 = new User('Janhvi','Dubey', 20,'Female');

user1.greetUser('Mr.');
user2.greetUser('Mr.');
user3.greetUser('Mrs.');

console.log(user1);
console.log(user2);
console.log(user3);