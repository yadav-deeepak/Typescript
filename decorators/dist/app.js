"use strict";
// /**
//  * Understanding Decorators 
//  */
// function LoggerDecorator(logMsg: string){
//     console.log('Logger factory function');
//     function Logger (target: Function){
//         console.log("Logger Decorator called");
//         //  console.log(logMsg);
//         //  console.log(target);
//     }
//     return Logger;
// }
// // Here it will take target parameter and here target is this User class 
// // Here we are specifying the type of target as a function because as we know that the class we create in js uses the constructor function syntax behind the scene 
// // User class behind the scene is a function 
// // Note: In order to use decorators we need to go to tsconfig.json file and uncomment experimentalDecorators: true 
// // Decorator will be called first so first logging and then user constructor is called will be printed
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// function Template(template: string, elementId: string){
//     console.log('Template factory function');
//     return function(target: any){
//         console.log("Template Decorator called");
//         const u = new target();
//         const container = document.getElementById(elementId);
//         if(container){
//             container.innerHTML = template;
//             const h2 = container.querySelector('h2');
//             if(h2){
//                 h2.textContent = 'Hello Mr. ' + u.name;
//             }
//         }
//     }
// }
// @LoggerDecorator('This is a custom decoartor...')
// @Template('<h2>Dynamic Header</h2>', 'container')
// class User{
//     name: string = 'John';
//     age: number = 23;
//     constructor(){
//         console.log('User constructor is called....');
//     }
// }
// Even if we dont create an object then also the decorator will be called whenever this class will be encountered the decorator will be called .
// const u = new User();
/**
 * Property decorator
 */
// function Capitalize(target: any, propertyKey: string): any{
//     // console.log('Capitalize Decorator Called');
//     // console.log("PROPERTY KEY: " + propertyKey); 
//     // console.log("Target: ", target);
//     let value: string;
//     const getter = function(){
//         return value.charAt(0).toUpperCase() + value.slice(1);
//     }
//     const setter = function(newValue: string){
//         value = newValue.toLowerCase();
//     }
//     return {
//         get: getter,
//         set: setter
//     }
// }
// class Product{
//     @Capitalize
//     name: string;
//     price: number;
//     constructor(name: string, price: number){
//         this.name = name;
//         this.price = price;
//     }
// }
// const p = new Product('samsung', 2400);
// // Whenever we create an object and pass the name I want that the names first letter to be a capital letter so for this we are gonna use decorator.
// console.log(p);
/**
 * Accessor Decorator
 */
// function Capitalize(target: any, propertyKey: string): any{
//     // console.log('Capitalize Decorator Called');
//     // console.log("PROPERTY KEY: " + propertyKey); 
//     // console.log("Target: ", target);
//     let value: string;
//     const getter = function(){
//         return value.charAt(0).toUpperCase() + value.slice(1);
//     }
//     const setter = function(newValue: string){
//         value = newValue.toLowerCase();
//     }
//     return {
//         get: getter,
//         set: setter
//     }
// }
// function AccessLogger(target: any, name: string, descriptor: PropertyDescriptor){
//     const getter = descriptor.get;
//     const setter = descriptor.set;
//     descriptor.get = function (){
//         console.log(`Accessing value for property ${name}...`);
//         if(getter){
//             return getter.call(this);
//         }
//         return undefined;
//     }
//     descriptor.set = function(value: number){
//         console.log(`Setting value for property ${name}...`);
//         if(setter){
//             setter.call(this, value);
//         }
//     }    
//     return descriptor;
// }
// class Product{
//     @Capitalize
//     name: string;
//     private _price: number;
//     @AccessLogger
//     get price(){
//         return this._price;
//     }
//     set price(value: number){
//         if(value>0){
//             this._price = value;
//         }
//         else{
//             throw new Error('Price should be greater than 0');
//         }
//     }
//     constructor(name: string, price: number){
//         this.name = name; 
//         this._price = price;
//     }
// }
// const p = new Product('Apple', 2400);
// p.price = 3000;
// console.log(p.price);
/**
 * Method and Parameter Decorator
 */
// function param(target: any, paramName: string, index: number){
//     console.log('Param decorator called');
//     console.log('Target: ', target);
//     console.log('Parameter Name: '+ paramName);
//     console.log('Index: '+ 0);
// }
// function Logger(target: any, methodName: string, descriptor: PropertyDescriptor){
//     console.log('Logger decorator called!');
//     console.log('Target: ',target);
//     console.log('MethodName: '+ methodName);
//     console.log('Property Descriptor: ', descriptor);
// }
// class Person{
//     name: string;
//     constructor(n: string){
//         this.name = n;
//     }
//     @Logger
//     calculateAge(@param dob: string){
//         // calculate date of birth
//     }
// }
// // So here first the parameter decorator is called  and after that the method decorator is called
// const p = new Person('John');
// p.calculateAge('06-15-1998');
/**
 * When a decorator is executed
 */
// function CLS_DECORATOR(target: any){
//     console.log('CLASS DECORATOR CALLED');
// }
// function Prop_Decorator(target: any, propertyKey: string): any{
//     console.log('PROPERTY DECORATOR CALLED');
// }
// function ACC_DECORATOR(target: any,name: string, descriptor: PropertyDescriptor){
//     console.log('ACCESSOR DECORATOR CALLED!');
// }
// function PARAM_DECORATOR(target: any, paramName: string, index: number){
//     console.log('PARAMETER DECORATOR CALLED');
// }
// function METH_DECORATOR(target: any, methodName: string, descriptor: PropertyDescriptor){
//     console.log('METHOD DECORATOR CALLED!');
// }
// @CLS_DECORATOR
// class Person{
//     @Prop_Decorator
//     name: string;
//     constructor(n: string){
//         this.name = n;
//     }
//     @METH_DECORATOR
//     calculateAge(@PARAM_DECORATOR dob: string){
//         //calculate the age
//     }
// }
// When we use multiple decorators on class then the decorator execution will be bottom up
// When we use multiple decorators on the property then the execution will be top to bottom
/**
 * Returning a class from a decorator
 */
// In a class decorator we can modify that class and return that class 
// Inside this class decorator we are going to modify our Person class.
// We are going to create new class and this class must extend the Person class in place of person we can use target because as we have use this Logger decorator on the Person class so for this target we are going to receive the Person class .
// If we specify the target as funtion that doesnt mean that it is a constructor function so we will specify the target type as new (...args: any) => {}
function Logger(target) {
    class LogginClass extends target {
        constructor(...args) {
            super(...args);
            console.log('Creating a new LoggingClass Instace...');
        }
    }
    LogginClass.company = 'Google';
    return LogginClass;
}
// This Logger decorator will return LogginClass and since we are using this Logger decorator on the Person class so it will replace the Person class with the LogginClass
let Person = class Person {
    constructor(n) {
        this.name = n;
    }
};
Person = __decorate([
    Logger,
    __metadata("design:paramtypes", [String])
], Person);
// const p = new Person('John');
// So when we create the object of the class then we can see that it will print the message as creating 
