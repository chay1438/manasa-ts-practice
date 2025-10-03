class Person {
    public name: string;
   
    private socialSecurityNumber: string; 
    
    protected _baseSalary: number;

    constructor(name: string, socialSecurityNumber: string, _baseSalary: number) {
        this.name = name;
        this.socialSecurityNumber = socialSecurityNumber;
        this._baseSalary = _baseSalary;
    }
    
  
    public showSocialSecurityNumber(): string {
        return `Person's SSN is: ${this.socialSecurityNumber}`;
    }
}

class Employee extends Person {
    public department: string;
    

    constructor(name: string, socialSecurityNumber: string, _baseSalary: number, department: string) {
       
        super(name, socialSecurityNumber, _baseSalary);
        
        this.department = department;
    }
    

    public getEmployeeSalary(): number {
       
        return this._baseSalary;
    }
}


const details = new Employee(
    "John Smith",       
    "999-88-777",       
    65000,              
    "Accounts"          
);


console.log(`Employee Name: ${details.name}`);
console.log(`Employee Department: ${details.department}`);
console.log(`Calculated Salary: $${details.getEmployeeSalary()}`); 

//readonly

class User{
    readonly id:number;
    public name:string;
    
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    changeName(newName:string){
        this.name=newName;
        //this.id=7855;
    }
}
let user=new User( ,"manasa")
user.changeName("sheri Manasa")

console.log(user);
const alice = new User(101, "manasa");
alice.changeName("prasadhini");
console.log(alice);







