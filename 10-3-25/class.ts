// here class is a keyword which defines the structure of the object ,we are using constructor for initialization. 


class Car{
    make:string;
    model:string;
    year:number;
    
    
    constructor(make:string,model:string,year:number){
        this.make=make;
        this.model=model;
        this.year=year
    }
    getCarInfo() : string{
        return `This car is ${this.year} ${this.make} ${this.model}.`;
    }
}
let myCar= new Car("Honda", "Civic", 2024);
console.log(myCar.getCarInfo());


///inheritance (extending the class) "extends keyword"  and "super() in the child constuctor to acces the parent constructor"

class Vechile{
    color:string;
    
    constructor(color:string){
        this.color=color
    }
      startEngine(): string {
           return "Engine started. Ready to move.";
      }
}
let vechile=new  Vechile("red");
console.log(vechile);
console.log(vechile.startEngine())



class Car extends Vechile {
    model:string
    
    constructor(color: string, model: string) {
          super("red");
           this.model = model;
    }
    getCarInfo():  string{
        
        return `Details of the car:  ${this.color} colour  and model ${this.model}.`;
    }
}
let car =new Car( "","Honda");
console.log(car);
console.log(car.getCarInfo())





    
  

   
  
        
       
  

 




