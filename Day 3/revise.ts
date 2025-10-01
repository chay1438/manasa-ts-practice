// Greeting Function: Write a function called greet that takes a name (string) as input and returns a string like "Hello, [Name]! Welcome."

// Addition: Create a function add_two_numbers that accepts two numbers and returns their sum.

// Area of a Circle: Write a function calculate_circle_area that takes the radius as input and returns the area (πr 
// 2
//  ). Use π≈3.14159.

// Maximum of Two: Define a function maximum_of_two that takes two numbers and returns the larger one.

// String Length Check: Write a function is_long_string that takes a string and returns True if its length is greater than 10, otherwise False



let greet =(name : string):string=>{
     return `Hello, ${name}! Welcome.`;
}

console.log(greet("prasadhini"));


/////
let add =(x:number, y:number):number => x+y;
console.log(add(5,8));

//area
let area =(radius:number, pi:number = 3.14): number => (pi*radius)**2;
console.log(area(2));


//maximum of 2num

let max=(x:number,y:number): number =>
Math.max(x,y);
console.log(max(8,11));
//template literal
let max=(x:number,y:number): number => x>y?x:y;
 console.log(max(8,11))

//length
let lengthcheck = (name:string):boolean =>{
    if(name.length > 10){
        return true;
    }else{
        return false;
    }
};
console.log(lengthcheck("jwjknmsqmsqlkjs"))


//factorial
let factorial =(n:number): number =>{
    if(n===0 || n===1){
        return 1;
    }
    if (n<0){
        throw new Error ("not applicable for neagative numbers!")
    }
    let result=1;
    for(let i=2;i<=n; i++){
        result *=i;
    }
    return result;
    
}

console.log((`factorial of n: ${factorial(5)}`));
console.log((`factorial of n: ${factorial(0)}`));
console.log((`factorial of n: ${factorial(-5)}`));
    
   
        
        






















