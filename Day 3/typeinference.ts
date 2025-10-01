
let quantity = 500; 
let productTitle = "Wireless Mouse";
let isAvailable = true;

console.log(`Quantity is a: ${typeof quantity}`);
console.log(`Product Title is a: ${typeof productTitle}`);



////
const httpMethod = "GET"; 
const httpStatus = 200; 
const dimensions = { width: 10, height: 20 };


console.log(`httpMethod is a: ${typeof httpMethod} `);
console.log( ` The width is :${dimensions.width}`);

////
let value = 10; 
let message = "Hello, TypeScript!"; 

function add(a: number, b: number) {
    return a + b;
}

let sum = add(5, 7); 
console.log(sum)

////
const isOnline = true;
const lastLogin = new Date(); 

const userProfile = {
    username: "coder123",
    isActive: isOnline,
    roles: ["admin", "editor"],
    lastSeen: lastLogin,
}; 


let inferredType1 = userProfile; 
console.log(inferredType1.roles[0])
//

const timeout = 5000;
const defaultRoute = '/home';
const isOnline = true;
const settings = [
    timeout, 
    "light", 
    isOnline, 
    defaultRoute
];

// let inferredType2 = settings;
console.log(`the type: ${ typeof settings}`);





