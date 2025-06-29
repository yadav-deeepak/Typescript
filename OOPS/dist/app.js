"use strict";
/**
 * Lecture 37: Creating And Using Class
 */
//How to create a class
// class User {
//     firstname: string;
//     lastname: string;
//     age: number;
//     gender: string;
//     constructor(n: string, ln:string, a: number, g: string){
//         this.firstname = n;
//         this.lastname = ln;
//         this.age = a;
//         this.gender = g;
//     }
//     greetUser(salutation: string){
//         const msg = 'Hello' + ' ' + salutation + this.firstname + ' ' + this.lastname;
//         console.log(msg);
//     }
// }
// //Creating an object
// const user1 = new User('Viper','Ankur',23,'Male');
// const user2 = new User('Suraj','Yadav',21,'Male');
// const user3 = new User('Janhvi','Dubey', 20,'Female');
// user1.greetUser('Mr.');
// user2.greetUser('Mr.');
// user3.greetUser('Mrs.');
// console.log(user1);
// console.log(user2);
// console.log(user3);
/**Lecture 39: Access Modifiers */
// class Employee{
//     constructor(public empName: string, private salary: number, public baseLocation: string, public isEligible: boolean, private hikePercent: number,public readonly empId: number){
//         // this.empName = name:
//         // // this.salary = sal;
//         // this.baseLocation = loc;
//         // this.isEligible = isEligible;
//         // this.hikePercent = hp;
//         // Now we dont need to assign these values to the properties it will auotmatically get assigned
//     }
//     getSalary(){
//         if(this.isEligible){
//             return this.getNewSalary();
//         }
//         return this.salary;
//     }
//     private getNewSalary(){ // Private method it cant be accessed outside the class
//         return this.salary * this.hikePercent / 100;
//     }
// }
// const employee = new Employee('John Smith', 100000, 'London', true, 20,101);
// console.log(employee);
// // employee.salary = 20000; // Error private member cant be accessed outside the class.
// employee.baseLocation = 'Banglore'; // No error public members can be accessed outside the class
// employee.getNewSalary(); // Private method cant be accessed outside the class  
/**Lecture 42: Understanding Inheritance */
// class Person{
//     name: string;
//     dob: string;
//     gender: string;
//     constructor(n: string, dob: string, gen: string){
//         this.name = n;
//         this.dob = dob;
//         this.gender = gen;
//     }
//     calculateAge(){
//         return new Date().getFullYear() - new Date(this.dob).getFullYear();
//     }
// }
// class Employeee extends Person{
//     salary: number;
//     bonus: number;
//     constructor(n: string, dob: string, gen: string, sal: number, bon: number){
//         super(n,dob,gen);
//         this.salary = sal;
//         this.bonus = bon;
//     }
// }
// const emp = new Employeee('John Smith', '30-04-2001','male',10000,2000);
// console.log(emp.calculateAge());
// console.log(emp);
/**Lecture 43: Method overriding and protected modifier */
// class Person{
//     name: string;
//     protected dob: string;
//     gender: string;
//     constructor(n: string, dob: string, gen: string){
//         this.name = n;
//         this.dob = dob;
//         this.gender = gen;
//     }
//     calculateAge(){
//         console.log("Calculate age of Person is called");
//         return new Date().getFullYear() - new Date(this.dob).getFullYear();
//     }
// }
// class Employeee extends Person{
//     salary: number;
//     bonus: number;
//     constructor(n: string, dob: string, gen: string, sal: number, bon: number){
//         super(n,dob,gen);
//         this.salary = sal;
//         this.bonus = bon;
//     }
//     calculateAge(): number {
//         console.log("Calculate age of Employee is called");
//         return 2024 - new Date(this.dob).getFullYear(); 
//     }
// }
// const emp = new Employeee('John Smith', '04-28-2001','male',10000,2000);
// console.log(emp.calculateAge());
// console.log(emp);
/**Lecture 44: Getter and Setter Methods */
// class Person{
//     name: string;
//     private _age: number | null = null;
//     get age(){ // Getter method
//         if(this._age != null){
//             return this._age;
//         }
//         throw new Error('Age is not defined for person: ' + this.name);
//     }
//     set age(value: number){ // Setter method
//         if(value > 0){
//             this._age = value;
//         }else throw new Error("Age can't be negative");
//     }
//     constructor(name: string){
//         this.name = name;
//     }
// }
// const person = new Person('Jang');
// person.age = 34; // Calling the setter function
// console.log(person.age); // Calling the getter function
// /**Lecture 45: Static Methods and Properties */
// class Employee{
//     public firstName: string;
//     public lastName: string;
//     public static count: number = 0;// this cant be accessed by an object of the class
//     constructor (firstname: string, lastname: string){
//         this.firstName = firstname;
//         this.lastName = lastname;
//         Employee.count++;
//     }
//     getFullName(){
//         return this.firstName + ' ' + this.lastName;
//     }
// }  
// const emp1 = new Employee('Suraj', 'Yadav');
// console.log(Employee.count); 
// const emp2 = new Employee('Viper','Ankur');
// console.log(Employee.count);
/** Lecture 46: Abstract class */
class Employee {
    constructor(fn, ln) {
        this.firstname = fn;
        this.lastname = ln;
    }
}
// Since this permanetemployee class is inheriting from abstract Employee class it has to define the definition of the getSalary() method
class PermanentEmployee extends Employee {
    constructor(fn, ln, salary) {
        super(fn, ln);
        this.monthlySalary = salary;
    }
    getSalary() {
        return this.monthlySalary * 12;
    }
}
const emp1 = new PermanentEmployee('John', 'Smith', 120000);
console.log(emp1.getSalary());
/**Lecture 47: Private Constructor and Singleton Pattern  */
class Person {
    constructor() {
    }
    static getInstance() {
        if (Person._instance) {
            return Person._instance; // if instance already exist then it is going to return the same instance 
        }
        Person._instance = new Person(); //If instance doesn't exist then it is going to create an instance
        return Person._instance;
    }
}
const person1 = Person.getInstance();
const person2 = Person.getInstance();
console.log(person1 === person2);
class Admin {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.company = "Google"; //now we can not change the value of company because its a readonly property
    }
    greetUser() {
        console.log("Hello Admin! " + this.getFullName());
    }
    getFullName() {
        return this.firstname + ' ' + this.lastname;
    }
}
class Member {
    constructor(firstname, lastname, loc) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.company = "Amazon";
        this.location = loc; // if user doesn't pass the value of location then it will be undefined
    }
    greetUser() {
        console.log("Hello Member!" + ' ' + this.getFullName());
    }
    getFullName() {
        return this.firstname + ' ' + this.lastname;
    }
}
// Here we want to use this same method for calling the greetUser method of both Admin and Member class for that we are creating displayGreetMessage()
function displayGreetMessage(user) {
    user.greetUser(); // here we are calling the greetUser method of the class which will be passed as parameter to this function 
}
let admin; // if we make this variable as admin then we will not see any error because we have not made company property readonly in admin class
admin = new Admin('John', 'Smith');
// admin.company = "Microsoft";// this will give and error because in User interface we have made company property as readonly
const member = new Member('Suraj', 'Yadav');
member.company = "Microsoft";
console.log(admin.company);
displayGreetMessage(admin);
displayGreetMessage(member);
