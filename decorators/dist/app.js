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
function Capitalize(target, propertyKey) {
    // console.log('Capitalize Decorator Called');
    // console.log("PROPERTY KEY: " + propertyKey); 
    // console.log("Target: ", target);
    let value;
    const getter = function () {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    const setter = function (newValue) {
        value = newValue.toLowerCase();
    };
    return {
        get: getter,
        set: setter
    };
}
function AccessLogger(target, name, descriptor) {
    const getter = descriptor.get;
    const setter = descriptor.set;
    descriptor.get = function () {
        console.log(`Accessing value for property ${name}...`);
        if (getter) {
            return getter.call(this);
        }
        return undefined;
    };
    descriptor.set = function (value) {
        console.log(`Setting value for property ${name}...`);
        if (setter) {
            setter.call(this, value);
        }
    };
    return descriptor;
}
class Product {
    get price() {
        return this._price;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error('Price should be greater than 0');
        }
    }
    constructor(name, price) {
        this.name = name;
        this._price = price;
    }
}
__decorate([
    Capitalize,
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    AccessLogger,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Product.prototype, "price", null);
const p = new Product('Apple', 2400);
p.price = 3000;
console.log(p.price);
