// Interface

interface user {
    name: string;
    age : number
}
let user1: user={name: "manasa", age :50};
console.log(user1);

let user2: user={name: "manasa"};
console.log(user2);

//

interface Product {
    readonly id: number;
    name: string;
    description?: string; 
}

let product: Product = { id: 101, name: "Laptop" };
console.log(product)
product.name = "Tablet"; 
console.log(product.name);

// car ques
interface car{
    make :string;
    model : string;
    year : number;
    isElectric?: boolean;
     getCarInfo: () => string; 
};


let car1: car ={make:"toyota", model :"corolla", year:2023 ,getCarInfo: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }};

console.log(car1);

let car2: car ={make:"Honda", model :"civic", year:2024 ,getCarInfo: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }};
console.log(car2);

console.log(car1.getCarInfo());



// area of rectangle
interface Rectangle{
    width:number;
    height: number;
    getArea(): number;
};

let  rectangle:Rectangle ={ width:10, height:5, getArea: function(){
    return  this.width * this.height;
    }

    
};
console.log(rectangle.getArea());

// create no limit string and number and add new playr and score.

interface Scoreboard {
    [playerName: string]: number; 
}
const scores: Scoreboard = {
    Alice: 90,
    Bob: 85,
    Charlie: 78
};
scores.David = 92;
console.log(scores);
console.log("Bob's score:", scores.Bob);
console.log("Charlie's score:", scores.Charlie);







