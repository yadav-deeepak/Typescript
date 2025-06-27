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

class Employee{

    constructor(public empName: string, private salary: number, public baseLocation: string, public isEligible: boolean, private hikePercent: number,public readonly empId: number){
        // this.empName = name:
        // // this.salary = sal;
        // this.baseLocation = loc;
        // this.isEligible = isEligible;
        // this.hikePercent = hp;
        // Now we dont need to assign these values to the properties it will auotmatically get assigned
    }

    getSalary(){
        if(this.isEligible){
            return this.getNewSalary();
        }
        return this.salary;
    }

    private getNewSalary(){ // Private method it cant be accessed outside the class
        return this.salary * this.hikePercent / 100;

    }
}

const employee = new Employee('John Smith', 100000, 'London', true, 20,101);
console.log(employee);
// employee.salary = 20000; // Error private member cant be accessed outside the class.
employee.baseLocation = 'Banglore'; // No error public members can be accessed outside the class
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

class Person{
    name: string;
    private _age: number | null = null;

    get age(){ // Getter method
        if(this._age != null){
            return this._age;
        }
        throw new Error('Age is not defined for person: ' + this.name);
    }

    set age(value: number){ // Setter method
        if(value > 0){
            this._age = value;
        }else throw new Error("Age can't be negative");
    }
    constructor(name: string){
        this.name = name;
    }
}

const person = new Person('Jang');
person.age = 34; // Calling the setter function
console.log(person.age); // Calling the getter function