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

function Capitalize(target: any, propertyKey: string): any{
    // console.log('Capitalize Decorator Called');
    // console.log("PROPERTY KEY: " + propertyKey); 
    // console.log("Target: ", target);
    let value: string;
    
    const getter = function(){
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    const setter = function(newValue: string){
        value = newValue.toLowerCase();

    }
    return {
        get: getter,
        set: setter
    }
}

class Product{
    @Capitalize
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }
}

const p = new Product('samsung', 2400);
// Whenever we create an object and pass the name I want that the names first letter to be a capital letter so for this we are gonna use decorator.
console.log(p);