// Define a type alias called Converter with a call signature that accepts a value: number and a rate: number. It must return a number.

// Implement a function that conforms to Converter and returns the product of the two arguments



type Converter=(value:number, rate:number)=> number;
 let product: Converter;
 product =(a,b) => (a*b);
console.log (product(5,6));


// Define an interface called Validator with a single call signature that accepts a username: string and returns a boolean (indicating if the username is valid).

// Implement a function that conforms to Validator and returns true only if the username is longer than 5 characters.

interface Validator{
    (username: string) : boolean;
}
const isValidUsername:Validator = (username)=>{

    if(isValidUsername.length >5){
        return true;
    }else{
        return false;
    }
};
console.log(isValidUsername("jkdhwiduw"));
console.log(`User: 'alice' | Valid: ${isValidUsername('alice')}`);


//  Define a type alias called Logger that is:
// Callable: Takes a message: string and returns void.
// Has a property: count: number to track the total messages logge
// Implement the function/object. When the function is called, it should print the message to the console and increment its internal count property.

type Logger ={
    (message:string):void;
    count:number;
}
let logger:Logger=(() =>{  //IIFE (immediate invoke function expression)
    const countFunction=(message:string) =>{
        console.log(`(count: ${countFunction.count}) ${message}`);
    countFunction.count++;
        
    }
   

countFunction.count=0;
return countFunction as Logger;


})();

logger("dudhwdbhwd");
logger("All got executed");








    





 