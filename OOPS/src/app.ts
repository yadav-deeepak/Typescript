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
abstract class Employee{
    public firstname: string;
    public lastname: string;

    abstract getSalary(): number;

    constructor(fn: string, ln: string){
        this.firstname = fn;
        this.lastname = ln;
    }
}

// Since this permanetemployee class is inheriting from abstract Employee class it has to define the definition of the getSalary() method
class PermanentEmployee extends Employee {
    monthlySalary: number;
    constructor(fn: string, ln: string, salary: number){
        super(fn,ln);
        this.monthlySalary = salary;
    }
    getSalary(): number {
        return this.monthlySalary*12;
    }
}

const emp1 = new PermanentEmployee('John','Smith',120000);
console.log(emp1.getSalary());

/**Lecture 47: Private Constructor and Singleton Pattern  */

class Person{
    private static _instance: Person;

    private constructor(){

    }

    static getInstance(){
        if(Person._instance){
            return Person._instance;// if instance already exist then it is going to return the same instance 
        }
        Person._instance = new Person();//If instance doesn't exist then it is going to create an instance
        return Person._instance;
    }
}

const person1 = Person.getInstance();
const person2 = Person.getInstance();

console.log(person1 === person2);

/**Lecture 48: Interface */
// interface User {
//     firstname: string;
//     lastname: string;
    
//     greetUser(): void;
//     getFullName(): string;
// }

// class Admin implements User{
//     constructor(public firstname: string, public lastname: string){

//     }
//     greetUser(): void {
//         console.log("Hello Admin! " + this.getFullName());
//     }
//     getFullName(): string {
//         return this.firstname + ' ' + this.lastname;
//     }
// } 

// class Member implements User{
//     constructor(public firstname: string, public lastname: string){

//     }
//     greetUser(): void {
//         console.log("Hello Member!" + ' ' + this.getFullName());
//     }
//     getFullName(): string {
//         return this.firstname + ' ' + this.lastname;
//     }
// }

// // Here we want to use this same method for calling the greetUser method of both Admin and Member class for that we are creating displayGreetMessage()
// function displayGreetMessage(user: User){ // so here instead of passing both Member and Admin object as parameter we can pass the interface doing this will allow us to pass both Member and Admin class object as parameter

//     user.greetUser();// here we are calling the greetUser method of the class which will be passed as parameter to this function 

// }

// const admin = new Admin('John', 'Smith');
// const member = new Member('Suraj', 'Yadav');

// displayGreetMessage(admin);
// displayGreetMessage(member);

/**Lecture 49: Readonnly and optional property in interface */

// interface User {
//     firstname: string;
//     lastname: string;
//     readonly company: string;
//     location?: string ;// Optional property: we can define it in the class and if we want we can emit it also
    
//     greetUser(): void;
//     getFullName(): string;
// }

// class Admin implements User{
//      company: string = "Google";//now we can not change the value of company because its a readonly property

//     constructor(public firstname: string, public lastname: string){

//     }
//     greetUser(): void {
//         console.log("Hello Admin! " + this.getFullName());
//     }
//     getFullName(): string {
//         return this.firstname + ' ' + this.lastname;
//     }
// } 

// class Member implements User{
//     company: string = "Amazon";
//     location?: string | undefined;
    
//     constructor(public firstname: string, public lastname: string,loc?: string){
//         this.location = loc;// if user doesn't pass the value of location then it will be undefined

//     }
//     greetUser(): void {
//         console.log("Hello Member!" + ' ' + this.getFullName());
//     }
//     getFullName(): string {
//         return this.firstname + ' ' + this.lastname;
//     }
// }

// // Here we want to use this same method for calling the greetUser method of both Admin and Member class for that we are creating displayGreetMessage()
// function displayGreetMessage(user: User){ // so here instead of passing both Member and Admin object as parameter we can pass the interface doing this will allow us to pass both Member and Admin class object as parameter

//     user.greetUser();// here we are calling the greetUser method of the class which will be passed as parameter to this function 

// }

// let admin: User;// if we make this variable as admin then we will not see any error because we have not made company property readonly in admin class

// admin = new Admin('John', 'Smith');
// // admin.company = "Microsoft";// this will give and error because in User interface we have made company property as readonly

// const member = new Member('Suraj', 'Yadav');
// member.company = "Microsoft";

// console.log(admin.company);

// displayGreetMessage(admin);
// displayGreetMessage(member);

/**Lecture 50: Extending Interface */

interface Roles{
    getRole(): string;
}

interface User extends Roles {//Here User interface will contain all the properties and methods of Roles interface also
    firstname: string;
    lastname: string;
    readonly company: string;
    location?: string ;
    
    greetUser(): void;
    getFullName(): string;
}

class Admin implements User{ // we dont need to implement roles here because user interface also contain the properties and methods of roles interface
     company: string = "Google";

    constructor(public firstname: string, public lastname: string){

    }
    greetUser(): void {
        console.log("Hello Admin! " + this.getFullName());
    }
    getFullName(): string {
        return this.firstname + ' ' + this.lastname;
    }
    getRole(): string {
        return "ADMIN";
    }
} 

class Member implements User{
    company: string = "Amazon";
    location?: string | undefined;
    
    constructor(public firstname: string, public lastname: string,loc?: string){
        this.location = loc;

    }
    greetUser(): void {
        console.log("Hello Member!" + ' ' + this.getFullName());
    }
    getFullName(): string {
        return this.firstname + ' ' + this.lastname;
    }
    getRole(): string {
        return "MEMBER";
    }
}

function displayGreetMessage(user: User){ 
    user.greetUser(); 

}

let admin: User;

admin = new Admin('John', 'Smith');
let x = admin.getRole();
console.log(x);

const member = new Member('Suraj', 'Yadav');
member.company = "Microsoft";
let y= member.getRole();

console.log(y); 
console.log(admin.company);

/**Lecture 51: Using interface as function type */

// Way in which we can define the type for the function
// type SumFn = (num1: number, num2: number) => number;

// let add: SumFn;

// add = (n1: number, n2: number) =>{
//     return n1+n2;

// }

// We can also use interface for defining the type for the function.
//We mostly dont use this approach we use the above approach only

interface Sumfn{
    (num1: number, num2: number): number;
}

let add: Sumfn;

add = (n1: number, n2: number) => {
    return n1+n2;
}

