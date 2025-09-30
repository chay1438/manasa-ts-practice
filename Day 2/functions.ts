// functions
function add(a: number, b: number): number {
  return a + b;
}
console.log(add (5,6));
///
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}
console.log(greet("Hrushik"))
//// expressions

const subtract = function (x: number, y: number): number {
  return x - y;
};
console.log(subtract(5,8));
const multiply = (x: number, y: number): number => {
  return x * y;
};
console.log(multiply(5,8));



//rest parameters
//using reduce method
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num);
}
console.log(sumAll(1, 2, 3)); 

// using for of loop
function sumAll(...numbers: number[]): number {
    let sum=0;
    for(let char of numbers){
        sum += char
        
    }
    return sum;
}

console.log(sumAll(5,6,8))




//Calculate Average: Create a function calculateAverage that accepts any number of numeric grades as a rest parameter. The function should return the average of those grades.

function CalculateAverage (...grades: number[]){
    let sum=0;
    
    for (let num of grades){
        sum += num;
    }
    return sum/grades.length;
  
}

console.log(CalculateAverage(9,9.5,8,8.5));




// Combine Strings: Write a function combineStrings that takes a separator string as its first argument and any number of additional strings as a rest parameter. The function should join all the strings with the given separator


function combineStrings( separator:string, ...grades:number[]){
    return  grades.join(separator);
}
//console.log(combineStrings(",","nskjq","jnkq","knld"));
console.log(combineStrings("*",5,6,10,7))

// Logging with a Tag: Create a function logWithTag that takes a required tag: string as its first argument, followed by a rest parameter of messages: string[]. The function should prepend the tag to each message and log them to the console.



function logWithTag(tag:string,...messages:string[]){
    for (let char of messages){
        console.log (`[${tag}]: ${char}`)
       
    }
}
console.log(logWithTag("Info", "pending","processing","completed"));











 