console.log("Hello World");
/**Lecture 58: GENERICS */
// Generics in TS are essentially placeholders for data types . They allow you to write flexible and reusable code that can work with different types of data without sacrificing type safety.

// When we are creating the funciton we dont know what kind of array are we going to receive
// What we can do here is instead of using any type use generics
//Generic simply means that we are creating a genrealised function which we can use with any datatype

// function swap<T>(arr: T[], index1: number, index2: number): T[]{// Here T is the placeholder for any data type so we need to mention what are we going to use for that inside wickets EG: <T> so here we are gonna use T for any datatype
//     //Here whatever type of value we pass for an array it will also be the return type of the function



//      //swapping logic
//      return [];
// }

// // We wanna access the string array and wanna perform some of the string function on them but that we can't do because the return type here is any

// swap([1, 2, 3], 0, 2);
// swap(['Hello','Hi','How are you'],1,2);//Not allow us to use string methods on this string array because we as a developer know that as we are passing here array of string so we should be able to perform string methods but compiler doesn't know that it knows that return type of this function can be any

// //In TS we have some built in generics like array
// // Array in TS are defined like Array<T> , T will be replaced with any type

// const num: Array<Number> = [10,20,30]; // Array<Number> = number[]

// In the same way promises are also generic in TS so we are able to specify that what type promise should be resolved to
// const p: Promise<Number> = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve(100);// Here this promise can resolve to any value (boolean,string,number) and we will not get any error because promises are generic type
//     }, 1000);
// })
// Here as we have set its type to number so now  resolve can only be resolved to a number it will always return number type value  
//Generics are not available in JS 

/**Lecture 59: Creating a generic function */
// A generic function uses a type parameter (like T) to indicate that the function can accept arguments of any type and return the same or related type
function swap<T>(arr: T[], index1: number, index2: number): T[]{
    //SWAPPING LOGIC
    if(index1 < 0 || index1 > arr.length || index2 < 0 || index2 >= arr.length){
        throw new Error ('Invalid Index');
    }
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]; //array destructuring syntax
    return arr;
}

console.log(swap([1,2,3,4,5],0,2));
console.log(swap(['Hello','Hi', 'How are you'],1,2));

// //Example using multiple generics
// function expand<T, U>(obj1: T, obj2: U){
//     return Object.assign(obj1,obj2);//Here we are going to need to use constraints here 
// }

// let combined = expand({name: 'John', age: 28}, {name: 'John', gender: 'Male'});
// // console.log(combined.name);//here it is giving an error because it doesnt know that object which it is returning have name property or not. To solve this problem we have to set generic type for obj1 and obj2

/**Lecture 60:  Working with the constraints */
//Example using multiple generics
// Generic costraints are powerful feature in typescript that allows you to define limitations on the types of data that can be used with generic code

function expand<T extends object, U extends object>(obj1: T , obj2: U){
    return Object.assign(obj1,obj2);//Here common properties will be take from the object and new object will be created and it will be  returned
    //Here it is expecting the first argument to be empty so here we want to tell TS that first value to be object and the second value is also going to be object 
    // Basically we wanna make a constraint to T that its type should be object nothing else
}
// Now as we have set T extends object so now we can't pass any other type of value to obj1 we can pass any type of value for obj2

let combined = expand({name: 'John', age: 28}, {name: 'John', gender: 'Male'});
console.log(combined.name);
console.log(combined);