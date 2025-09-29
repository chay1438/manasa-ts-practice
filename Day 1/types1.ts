//Enum type


enum WeekDays { Monday, Tuesday, Wednesday, Thursday, Friday }
let today: WeekDays = WeekDays.Wednesday;
console.log(today);


//


enum UserStatus {
  Pending = 0,
  Active = 1,
  Inactive = 2
}

let userStatus: UserStatus = UserStatus.Active; 
if (userStatus === UserStatus.Active) {
    console.log("Welcome!")
 
}


//  Q.Create a TypeScript enum named TShirtSize with members for Small, Medium, and Large. Assign the sizes string values of "S", "M", and "L", respectively. Then, write a function that takes a TShirtSize and prints a message indicating the selected size


enum TShirtSize{
    small ="s",
    medium="m",
    large ="l"
}
let size: TShirtSize = TShirtSize.small;
console.log(size);


 //ANY type
 //baically it is not practicised in TS
 
 let myVariable: any = "Hello, TypeScript!";
console.log(myVariable.length); //string 
myVariable = 10;
console.log(myVariable.toFixed(2));  //number
myVariable = { name: "Alice" };
console.log(myVariable.name); //  object




// void type

function sayHello(): void {
  console.log("Hello there!");
}
let result = sayHello(); 
console.log(result); 


//
function calculateSum(x: number, y: number): number {
  return x + y; 
}

let total = calculateSum(5, 10);
console.log(total); 

//

function logGreeting(name: string): void{
  console.log(`Hello, ${name}!`); 
}

let result = logGreeting("Alice");
console.log(result); 

//

//Object

let userConfig: object =  {
  theme: 'dark',
  notifications: true
};
console.log(userConfig["theme"]);
userConfig = ['settings', 'profile', 'logout'];

console.log(userConfig);
console.log(userConfig[1]);

//
let myVariable: object = {
  id: 1,
  name: "Alice"
};
console.log(myVariable);


myVariable = {
  productId: "P101",
  price: 99.99,
  inStock: true
};

console.log(myVariable);
//