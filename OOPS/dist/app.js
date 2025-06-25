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
class Employee {
    constructor(empName, salary, baseLocation, isEligible, hikePercent, empId) {
        this.empName = empName;
        this.salary = salary;
        this.baseLocation = baseLocation;
        this.isEligible = isEligible;
        this.hikePercent = hikePercent;
        this.empId = empId;
        // this.empName = name:
        // // this.salary = sal;
        // this.baseLocation = loc;
        // this.isEligible = isEligible;
        // this.hikePercent = hp;
        // Now we dont need to assign these values to the properties it will auotmatically get assigned
    }
    getSalary() {
        if (this.isEligible) {
            return this.getNewSalary();
        }
        return this.salary;
    }
    getNewSalary() {
        return this.salary * this.hikePercent / 100;
    }
}
const employee = new Employee('John Smith', 100000, 'London', true, 20, 101);
console.log(employee);
// employee.salary = 20000; // Error private member cant be accessed outside the class.
employee.baseLocation = 'Banglore'; // No error public members can be accessed outside the class
// employee.getNewSalary(); // Private method cant be accessed outside the class  
