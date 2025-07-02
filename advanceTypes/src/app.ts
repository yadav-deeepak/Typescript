/**Lecture 52: Intersection type in typescript */

// Using this type keyword we can create our custom types

// type stringOrNumber  = string | number;// tyoe can be either string or number 

// type boolOrNumber = boolean | number;// type can be either boolean or number

// type myNumberType = stringOrNumber & boolOrNumber;//Here we are using intersection type so we can assign the type which is common in both stringOrNumber and boolOrNumber that is number so we can assign number type of value to this myNumberType
// // Other type of value cant be assigned to this myNumberType

// // let x: stringOrNumber = "Hello";// we can assign it with either string type value or number type

// let x: myNumberType = 20;// we can only assign number type to this x variable if we try to assign any other type then it will give an error
// console.log(x);

// So when we use intersection on type alias then it will take the common type between them and make it as the type 

//# How this works for complex types?

// type user = {
//     name: string,
//     age: number, 
// }

// Instead of type we can also use interface

interface user {
    name: string,
    age: number, 
}

// type admin = {
//     name: string,
//     role: string,
// }

interface admin {
    name: string,
    role: string,
}

// Suppose we wanna create a third type that is adminUser type which will contain the value name, age, role so we can create it using intersection between user and admin type.

type adminUser = user & admin; // here type of adminUser is user & admin so it will conatin the common type of both 

let user1: adminUser = {
    name: 'John',
    age: 23,
    role: "ADMIN"
} // So here now user1 must have name, age, role (common and non common both properties are present here) property if any one is not present then it will give an error  

// So when we use intersection on complex type then all the properties from all the types will be considered 

//## Use case of intersection type

function processOrder(order: Order & {status: string}){
    console.log(order.id, order.items, order.status);

}

interface Order{
    id: number,
    items: string[]
}

processOrder({id: 123, items: ["Item1", "Item2"], status: "Shipped"});


/**Lecture 53: Type Guards in Typescript */

//-> Type guards are the powerfull mechanism that allows you to refine the type of a variable based on runtime checks and this enhances code relaibility and maitainability by providing more precise type information to the compiler
//-> type guards are expression that typically return a boolean value or the variable itself cast to a more specific type they are used within conditional blocks like if statement or function return types to narrow down the type of variable after a type check 
//-> This enables you to safely access properties or methods that might only exist on certain subtypes

//### COMMON TYPE GUARD TECHNIQUES  ###

// type StringOrNumber = string | number; 

// function addition (a: StringOrNumber, b: StringOrNumber){

//     // So here we are doing type guarding using typeof operator we can do type guarding

//     if(typeof a === 'string' || typeof b === 'string'){// if it's type is string then we will do concatenation
//         return a.toString() + b.toString();
//     }// if it is not string then we will add them
//     return a + b;
//     //Here it will give an error because + operator can be used to add or concatenate but it can't be used on custom type
//     // So here we are going to do the type checks and based on the type checks we are going to return results

// }

// addition('Hello','World');// Here we want concatenation HelloWorld
// addition(2,3);// Here we want addition to happen 5
// addition('Hello',3);// Here also we want concatenation Hello3

//## Using complex types ##

//#### CLASS ####

// class Animal{
//     makeSound(){
//         console.log("Generic animal sound");
//     }
// }

// class Dog extends Animal{
//     bark(){
//         console.log("woof woof");
//     }
// }

// //## So here we are gonna use intanceof operator we can't use typeof operator to check the type because typeof class will always return object 
// // So while working with classes we are gonna use instanceof operator

// function makeCreatureSound(creature: Animal){
//     // creature.bark();// here as we can see it will throw an error because animal class doesnt have bark function
//     // So here also we need to do type check before calling the method
//     if(creature instanceof Dog){ // Type guarding is done like this here using instanceof operator
//         creature.bark();
//     }
//     else{
//         creature.makeSound();
//     }
// }
// //Here as Dog class is inheriting the properties of Animal class so we can pass both Dog class object and Animal class object to the function

// let animal = new Animal();
// let dog = new Dog();

// makeCreatureSound(animal);
// makeCreatureSound(dog);

//#### Interface ####
// interface User{
//     name: string,
//     email?: string,
// }

// function greetUser(user: User){
//     if('email' in user){
//          console.log(`Hello ${user.name}. Your email is ${user.email}`);
//     }
//      console.log(`Hello ${user.name}.`);
// }
// //Now in case email is passed then the output will be Hello John. Your email is john@gmail.com otherwise it will give output as Hello mark.

// greetUser({name: 'John', email: 'john@gmail.com'});// Hello John. Your email is john@gmail
// greetUser({name: 'mark'});// Hello mark. Your email is undefined 

// // Here as we can see in the second one we are getting your email is undefined we want to avoid this for that we will use type guarding here
// // So when we are not passing the email we are getting the output as undefined 
// // Here we can't do type check using instanceof and typeof so here we will use in type guard

/**Lecture 54: Discriminated Union  */
//-> It is one way of implementing type guard in typescript. It is also called as tagged union its a data structure that can hold one of different types of values but it includes extra piece of information that tells you exactly which type it is
// This helps us to ensure that your code behaves correctly and avoid any errors

interface circle{
    kind: 'circle'; // here circle is not a value for kind its a type literal type
    radius: number;
}

interface square{
    kind: 'square';
    length: number;
}

type Shape = circle | square;

// function calArea(shape: Shape){// We dont know what kind of object we are gonna get in this shape property we can get either square or circle so here we need to do type guarding
//     if('radius' in shape){
//         return 3.14* shape.radius*shape.radius;
//     }else('length' in shape){
//         return shape.length * shape.length;
//     }// so if we use this approach then we have to check for each shape so here instead of this approach we can use discriminated union approach
//     // shape.radius//gives an error
// }

// So we can create the calArea() like this using discriminated union

function calArea(shape: Shape){
    switch(shape.kind){
        case 'circle':
            return 3.14*shape.radius*shape.radius;
        case 'square':
            return shape.length*shape.length;
    }
}

let x = calArea({kind: 'circle', radius: 2});
let y = calArea({kind: 'square', length: 10});

console.log(x,y);

// So in this way we are doing type guarding using discriminated union by creating a kind property and using literal type . 

/**Lecture 55: Type Casting in Typescript */
// It allows you to explicitly tell the complier to treat a variable as a different type.

let fname = document.querySelector('#fname')! as HTMLInputElement;
// Here TS is infering it's type as Element | null
// Using ! we are tell typescript that we know that this element exist and it will not return null

fname.value  = 'John';// Now we have done type casting it will not show any error
// here it is giving error because fname is of type element and property value doesnt exist on element and not all html element will have value property and TS dont know which html element it is returning
// so here we need to tell TS compiler which type of value it is going to return 
// We know that it is going to return an html element so we need to do type casting to tell the compiler that it is going to return htmlElement type value

// There are two ways to do type casting 
// 1. <HTMLInputElement>document.querySelector('#fname')!; -> So here we are using <type> we will write type inside angular brackets 
//Eg: <HTMLInputElement>document.querySelector('#fname')!; // here we are type casting it to HTMLInputElement

// 2. Using as keyword
// Eg: let fname = document.querySelector('#fname')! as HTMLInputElement;
// We will use this as keyword where we are not able to use the first way
// Eg: When we are using react there the first method will not work so there we will use this as keyword because there jsx will try to infer it as a jsx element 
// It will not think of it as type casting , it will think of it as a jsx element 

let someValue: any = 'Hello typescript!';
let strlenth: number = (someValue as string).length;

console.log(strlenth);

/**Lecture 56: Index Properties*/
// In typescript index properties offers a way to create objects that can hold a dynamic set of properties where the property names aren't known beforehand. 

interface Product {
    id: number;
    name: string;
    [prop: string]: string | number;
}
//we want to create a property here which can be replaced by any property name and for this we use index properties.
// We can create any number of properties after we have used index properties

//### Use Case 1 ###
// We can use index properties in TS when we wanna have dynamic properties for our entity

const prod1: Product = {
    id: 1,
    name: 'Tshirt',
    color: 'red',
    price: 123,
}

const prod2: Product = {
    id: 2,
    name: 'mug',
    material: 'Ceramic',
    capacity: 300,
    price: 123,
}
// Here as you can see we are able to create products with different properties

//### Use Case 2 ###
// When you wanna store the setting or preferences where the exact property might change depending on the context

interface Settings{
    [props: string]: boolean | string | number;
}

const mySettings: Settings = {
    darkMode: true,
    fontSize: 16,
    customTheame: 'Pink'
}
// Here we are creating some settings and configurations and settings might change depending on the context and in such cases also we need to use index properties

//### Use Case 3 ###
// When we want to represent collections where the elements have properties that are not known in advance

interface User{
    name: string,
    [prop: string]: any;
}

const users:  User[] = [
    {name: 'John', age: 30, gender: 'Male'},
    {name: 'Mark', interest: ['music','football'], location: 'London'}
]
// Here as you can see we have different user with different properties