/**
 * Understanding Decorators 
 */
function LoggerDecorator(logMsg: string){
    console.log('Logger factory function');
    function Logger (target: Function){
        console.log("Logger Decorator called");
        //  console.log(logMsg);
        //  console.log(target);
    }
    return Logger;
}
// Here it will take target parameter and here target is this User class 
// Here we are specifying the type of target as a function because as we know that the class we create in js uses the constructor function syntax behind the scene 
// User class behind the scene is a function 
// Note: In order to use decorators we need to go to tsconfig.json file and uncomment experimentalDecorators: true 
// Decorator will be called first so first logging and then user constructor is called will be printed

function Template(template: string, elementId: string){
    console.log('Template factory function');
    return function(target: any){
        console.log("Template Decorator called");
        const u = new target();
        const container = document.getElementById(elementId);
        if(container){
            container.innerHTML = template;
            const h2 = container.querySelector('h2');
            if(h2){
                h2.textContent = 'Hello Mr. ' + u.name;
            }
        }
    }
}

@LoggerDecorator('This is a custom decoartor...')
@Template('<h2>Dynamic Header</h2>', 'container')
class User{
    name: string = 'John';
    age: number = 23;

    constructor(){
        console.log('User constructor is called....');
    }
}
// Even if we dont create an object then also the decorator will be called whenever this class will be encountered the decorator will be called .

// const u = new User();