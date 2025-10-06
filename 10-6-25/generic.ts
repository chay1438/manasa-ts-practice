function getFirstElement<T>(array:T[]){
    return array[0]
}
const numbers=[1,2,3,]
console.log(getFirstElement(numbers));

const string=["m" ,"a", "n", "a", "s", "a","swapna"]
console.log(getFirstElement(string));


//// length method

function processAny<T extends {length:number}>(value: T){
  console.log(value.length); 
  return value;
}
processAny("hello")
//processAny(567)
processAny([23,34,4])


//
//reverse
function reverseArray<T>(arr:T[]):T[]{
    return arr.reverse();
}
// let originalarr=[6,7,8,9];
// let reversearr=reverseArray(originalarr);
// console.log(reversearr);

let str=["Hello","how","are", "you"];
console.log(reverseArray(str));


//nor string reverse  (reverse is an array method)
let str="hello how are you";
let reversestr= str.split("").reverse().join("");
console.log(reversestr)






