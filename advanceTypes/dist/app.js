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
