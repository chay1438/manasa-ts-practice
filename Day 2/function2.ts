// // The compiler only sees this single signature
// 
function log(message: string | number): void {
  console.log(message);
}
log( "hello" ); 
log( 123 );     



// function overload # no big difference 
function log(message: string): void;
function log(message: number): void;
function log(message: string | number): void { // signature implementation
  console.log(message);
}
log("hello"); 
log(123);    
//log(true); 


//call signature

type BinaryFunction = (x: number, y: number) => number;
let add: BinaryFunction;
let subtract: BinaryFunction;
let mul:BinaryFunction;
add = (a, b) => a + b;
subtract = (a, b) => a - b;
mul =(a,b) => a*b;
console.log(add(10, 5)); 
console.log(subtract(10, 5)); 
console.log(mul(10, 5)); 



