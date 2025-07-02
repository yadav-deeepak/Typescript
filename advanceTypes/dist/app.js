"use strict";
/**Lecture 52: Intersection type in typescript */
let user1 = {
    name: 'John',
    age: 23,
    role: "ADMIN"
}; // So here now user1 must have name, age, role (common and non common both properties are present here) property if any one is not present then it will give an error  
// So when we use intersection on complex type then all the properties from all the types will be considered 
//## Use case of intersection type
function processOrder(order) {
    console.log(order.id, order.items, order.status);
}
processOrder({ id: 123, items: ["Item1", "Item2"], status: "Shipped" });
// function calArea(shape: Shape){// We dont know what kind of object we are gonna get in this shape property we can get either square or circle so here we need to do type guarding
//     if('radius' in shape){
//         return 3.14* shape.radius*shape.radius;
//     }else('length' in shape){
//         return shape.length * shape.length;
//     }// so if we use this approach then we have to check for each shape so here instead of this approach we can use discriminated union approach
//     // shape.radius//gives an error
// }
// So we can create the calArea() like this using discriminated union
function calArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return 3.14 * shape.radius * shape.radius;
        case 'square':
            return shape.length * shape.length;
    }
}
let x = calArea({ kind: 'circle', radius: 2 });
let y = calArea({ kind: 'square', length: 10 });
console.log(x, y);
// So in this way we are doing type guarding using discriminated union by creating a kind property and using literal type . 
/**Lecture 55: Type Casting in Typescript */
// It allows you to explicitly tell the complier to treat a variable as a different type.
let fname = document.querySelector('#fname');
// Here TS is infering it's type as Element | null
// Using ! we are tell typescript that we know that this element exist and it will not return null
fname.value = 'John'; // Now we have done type casting it will not show any error
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
let someValue = 'Hello typescript!';
let strlenth = someValue.length;
console.log(strlenth);
//we want to create a property here which can be replaced by any property name and for this we use index properties.
// We can create any number of properties after we have used index properties
//### Use Case 1 ###
// We can use index properties in TS when we wanna have dynamic properties for our entity
const prod1 = {
    id: 1,
    name: 'Tshirt',
    color: 'red',
    price: 123,
};
const prod2 = {
    id: 2,
    name: 'mug',
    material: 'Ceramic',
    capacity: 300,
    price: 123,
};
const mySettings = {
    darkMode: true,
    fontSize: 16,
    customTheame: 'Pink'
};
const users = [
    { name: 'John', age: 30, gender: 'Male' },
    { name: 'Mark', interest: ['music', 'football'], location: 'London' }
];
// Here as you can see we have different user with different properties
