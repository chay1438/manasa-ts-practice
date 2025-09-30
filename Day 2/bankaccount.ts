interface BankAccount{
    accountNumber: number;
    holderName : string;
    balance : number;
    deposite(amount:number) : any;
    withdraw(amount:number) : any;
    
}

let myaccount: BankAccount ={
    accountNumber: 45287387,
    holderName: "mukesh",
    balance : 2000,
    deposite(amount){
        this.balance += amount;
        console.log(`deposited ${amount}. balance is ${this.balance}`);
        
     
    },
    withdraw(amount) {
        if (amount > this.balance){
            console.log("Insufficient funds")
        }
        else{
        this.balance -= amount;
        console.log(`withdraw amount is ${amount}. balance left is ${this.balance}`);
        }
    }
};
myaccount.deposite(1000);
myaccount.withdraw(500);
myaccount.withdraw(3500);




// readonly
interface Car {
  readonly model: string;
  year: number;
}

let car: Car = { model: "Tesla", year: 2023 };
car.year = 2024; 
car.model ="honda"; // it wil assign coz it readonly property
console.log(car);



// index signature
interface Scoreboard {
  [player: string]: number;
}

const scores: Scoreboard = {
  Alice: 90,
  Bob: 85,
  kishore: 95
};

scores["Charlie"] = 78; 
console.log(scores);
console.log(scores.Alice);
console.log(Object.keys(scores).length);
console.log(Object.keys(scores));



////////

interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(`Point coordinates: (${p.x}, ${p.y})`);
}

// let pointA = { x: 3, y: 7 }; 
console.log(printPoint({x:6,y:7}));
