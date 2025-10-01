type Greeter = {
    (name: string): void
};

let welcome: Greeter;
welcome = function(name: string): void {
    console.log(`Welcome, ${name}!`);
};
welcome("to Typescript");


// // Define a type alias named AddFunction that represents a function taking two number arguments and returning a number.

// // Create a variable sumNumbers of type AddFunction and assign it a corresponding function implementation

type AddFunction =(x: number,y: number) => number;
let sumNumbers: AddFunction;
sumNumbers=(x,y) => (x+y);
console.log(sumNumbers(6,7));



// Define an interface named StringFormatter that has a single call signature. This function should accept a string and an optional boolean argument (for uppercase/lowercase) and return a string.

// Implement a function that conforms to the StringFormatter interface.


interface StringFormatter{
    ( text: string,toUpperCase?:boolean) :string;
}
let formatString:StringFormatter;
formatString=(text,toUpperCase) =>{
    if (toUpperCase=== true){
        return text.toUpperCase();
    }
    else if(toUpperCase === false){
        return text.toLowerCase();
    }
    else{
        return text;
    }
        
    
}
console.log(formatString("Hello World"));
console.log(formatString("hello world",true));
console.log(formatString("hello world",false));





// interface Processor {
//   (data: string, options?: { trim: boolean, prefix: string }): string;
// }
// Implement a function that correctly satisfies the Processor type. The function should:

// Return the data as is if no options are provided.

// If options.trim is true, remove leading/trailing whitespace.

// If options.prefix is provided, prepend it to the result.


interface Processor {
  (data: string, options?: { trim: boolean, prefix: string }): string;
}

let processor:Processor;
processor=(data,options) =>{
    let result =data;
    if(options){
        if (options.trim === true) {
            result = result.trim();
        }
        if (options.prefix) {
            result = options.prefix + result;
        }
  

 

    }
  return result;
};
    

console.log(processor(" Unify ", { trim: true, prefix: ""}));
console.log(processor(" Unify ", { trim: false, prefix: " Hello,"}));
console.log(processor(" World", {trim:false,prefix:"Hello"}));
console.log(processor(" Welcome To The World", {trim:true,prefix:"Hello"}));
console.log(processor("Manasa"));
processor("Manasa");





   









