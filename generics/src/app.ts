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
// function swap<T>(arr: T[], index1: number, index2: number): T[]{
//     //SWAPPING LOGIC
//     if(index1 < 0 || index1 > arr.length || index2 < 0 || index2 >= arr.length){
//         throw new Error ('Invalid Index');
//     }
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]]; //array destructuring syntax
//     return arr;
// }

// console.log(swap([1,2,3,4,5],0,2));
// console.log(swap(['Hello','Hi', 'How are you'],1,2));

// //Example using multiple generics
// function expand<T, U>(obj1: T, obj2: U){
//     return Object.assign(obj1,obj2);//Here we are going to need to use constraints here 
// }

// let combined = expand({name: 'John', age: 28}, {name: 'John', gender: 'Male'});
// // console.log(combined.name);//here it is giving an error because it doesnt know that object which it is returning have name property or not. To solve this problem we have to set generic type for obj1 and obj2

/**Lecture 60:  Working with the constraints */
//Example using multiple generics
// Generic costraints are powerful feature in typescript that allows you to define limitations on the types of data that can be used with generic code

// function expand<T extends object, U extends object>(obj1: T , obj2: U){
//     return Object.assign(obj1,obj2);//Here common properties will be take from the object and new object will be created and it will be  returned
//     //Here it is expecting the first argument to be empty so here we want to tell TS that first value to be object and the second value is also going to be object 
//     // Basically we wanna make a constraint to T that its type should be object nothing else
// }
// Now as we have set T extends object so now we can't pass any other type of value to obj1 we can pass any type of value for obj2

// let combined = expand({name: 'John', age: 28}, {name: 'John', gender: 'Male'});
// console.log(combined.name);
// console.log(combined);

/**Lecture 61: The keyof constraints */
function getPropValue<T extends object, U extends keyof T>(obj: T, key: U){
    // So here whatever key(U) we are getting it should be the keyof object T 
    return obj[key];//Here we wanna return obj[key] for example lets say that the obj has a name and age property and the key has age property so this obj[key] will retrun that value of that age property
    // So here we are getting an error because TS doesnt know wheater this object is going to have a key(whatever value we will pass for this key TS doesnt know wheater this value is present in the object or not)
    //To solve this again here we can use generic type
}
getPropValue({name: 'John', age: 28}, 'name');
//So here we want that this function should extract the name property from the given object {name: 'John', age: 28}

/**Lecture 62: Creating a generic class */

type Book = {
    name: string;
    pages: number;
    price: number;
}

type Cloth = {
    name: string;
    size: string;
    price: number;
}

//Here we want to use this class ShoppingCart to add both Book and Cloth type product for our cart for that we have to use generic type
// So here we are able to use this ShoppingCart class for storing both Book and Cloth type values

// class ShoppingCart<T> {
//     private items: T[] = [];

//     addItem(item: T){
//         this.items.push(item);
//     }

//     getItems(){
//         return this.items;
//     }
// }

// const bookCart = new ShoppingCart<Book>();
// //bookCart can store the values of type Book
// bookCart.addItem({name: 'a', pages: 223, price: 24});
// bookCart.addItem({name: 'B', pages: 273, price: 26});
// console.log(bookCart.getItems());//returns array of books 

// const clothCart = new ShoppingCart<Cloth>();// clothCart can store the values of type cloth
// clothCart.addItem({name: 'T-shirt', size: 'M', price: 354});
// clothCart.addItem({name: 'Jeans', size: 'M', price: 1200});
// console.log(clothCart.getItems());//returns array of cloths

// //We can also use it to store normal type of values
// const strKart = new ShoppingCart<string>();
// strKart.addItem('Hello');
// strKart.addItem('world');
// console.log(strKart.getItems());//returns array of string 

/**Lecture 63: Generic VS Union Type */
//As we can see in above example we are creating an instance of the class and while creating an instance we are specifying the type.
// So using generics TS enforces the type that we give while creating an instance and only that type of value will be allowed if we give any other type of value we will get and error
//For Example:

// class ShoppingCart<T> {
//     private items: T[] = [];

//     addItem(item: T){
//         this.items.push(item);
//     }

//     getItems(){
//         return this.items;
//     }
// }

//We can also use it to store normal type of values
// const strKart = new ShoppingCart<string>();
// strKart.addItem('Hello');
// strKart.addItem('world');
// console.log(strKart.getItems());//returns array of string 

//Same example using Union type

// class ShoppingCart {
//     private items: string[] | number[] = [];

//     addItem(item: string  | number){
//         this.items.push(item);//Here we are getting an error because items can be either array of string or array of number but here its both so here it is showing an error
//         // So this is the difference between the union and generic type in generic type we give the type during the run time there we dont have the concept of either/or 
//         // Whatever type we will specify during the runtime will be the type of the item as well so there will be no concept of either/or(either this type of value or that type of value)
//     }

//     getItems(){
//         return this.items;
//     }
// }
// const strKart = new ShoppingCart();
// strKart.addItem('Hello');
// strKart.addItem('world');
// strKart.addItem(100);// Here this will not show an error
// console.log(strKart.getItems());//returns array of string 

//The purpose of generics is u write the code once and adapt it to different datatype by specifying the type during the usage. It ensures type safety throughout the code catching potential errors at compile time
//But union type represents a value that can be one of several specific types they combine multiple types using the pipe symbol . The purpose of union type is to handle multiple datatypes with union type we might need to perform type checks or use type guarding to determine the actual type at runtime

/**Lecture 64: Partial and readonly Generics */
interface UserSettings{
    username: string;
    email: string;
    darkMode: boolean;
    language: string;
}

function updateUserSettings(partialSettings: Partial<UserSettings>){// here it will make the properties of user object as optional
    partialSettings.darkMode = true;
    partialSettings.language = 'fr';
}
// Here we want to send object to the updateUserSetting() with only these two properties darkMode and language for that we can use partials
// Using partial generics we can make the properties of an object optional using partials we can make the properties of a type as optional
// We can use partials in such scenarios where only partial data is required

const user: Readonly<UserSettings> = {
    username: 'John Smith',
    email: 'johnsmith@gmail.com',
    darkMode: false,
    language: 'en'
}

// user.username = 'something';// this will throw an error because user is readonly

const newSettings = {
    darkMode: true,
    language: 'fr '
}

updateUserSettings(newSettings);

let arr: Readonly<string[]> = ['john','mark'];
//  
console.log(arr);
// we wanna make this array readonly so here we will use readonly generic which will not allow to write anything inside this arr