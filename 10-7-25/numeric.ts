function fibonacci(n:number): number{
    if(n<2){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2)
};

console.log(fibonacci(8));
console.log(fibonacci(1));


/////
function factorial(n: number): number {
  
  if (n <= 1) {
    return n;
  }
 
  return n * factorial(n - 1);
}


console.log(factorial(5));
console.log(factorial(1));


////////////
function evenOrOdd(n:number):string {
      if(n%2===0){
          return ` ${n}is even`;
      }else{
          return ` ${n} is odd`;
      }
};
console.log(evenOrOdd(9))


//////
function getLength<T>(arr: T[]): number{
  return  arr.length ;
}



const numbers = [10, 20, 30];
const firstNumber =  getLength(numbers); 
console.log(firstNumber); 

const strings = ["hello", "world"];
const firstString = getLength(strings); 
console.log(firstString);


/////
function pickObjects<T,K>(person:T, job:K): T|K{
    return {...person, ...job};
}
 let person={name: "Alice", age: 30 , gender: "male"};
let job={title: "Engineer", salary: 80000, location: "hyderabad"};

const employee = pickObjects( person,job);
console.log(employee);





     
     
    
  
  


