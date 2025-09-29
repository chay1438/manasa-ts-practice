// Boolean type

let isready : boolean= true;
let notcomplete: boolean =false;

if( notcomplete){
    console.log("yes,completed")
}
else{
    console.log("no,it's going on")
}



// number type(it includes all types int,float,hexadecimal )

let age: number = 25;
let price: number = 99.99;
let hexadecimal: number = 0xff; // it will return the the value in number

console.log(age);
console.log(price);
console.log(hexadecimal);




// sting type

let studentname:string ="poojitha";
let greet: string ="Hello, " +  studentname;
console.log(greet);
let  age: string= "25";  //or let age: number =25;
let message: string = `${greet} ,i am ${age} years old.`; //used template literals.
console.log(message);


// array 

let numbers: number[] = [10, 20, 30, 40];
let names: string[] = ["John", "Paul", "George", "Ringo"];
let istrue : boolean[] = [true];
console.log(istrue)

console.log(numbers[0]); 
console.log(names.length);
console.log(numbers[3]);
names.push("manasa");
console.log(names);

numbers.pop();
console.log(numbers.pop());
numbers.unshift(56);
console.log(numbers);


//generic type
let numbers:Array<number> = [10, 20, 30, 40];
let names:Array<string> = ["John", "Paul", "George", "Ringo"];

console.log(numbers);
console.log(names);


//tuple

let employee: [number, string] ;//=[101,"hrushik reddy"];
employee = [101, "Alice Johnson"];
employee.push("manasa")
console.log(employee);
console.log(employee.length);
console.log(employee[1]);
// We can't make any changes in middle coz, the tuple is fixed.