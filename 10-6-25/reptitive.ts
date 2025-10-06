// //// occurance of each char


// function countCharacters(str:string) :{[key:string]:number}{
//     const charCount : {[key:string]:number} ={}
//     for (let char of str){
//         charCount[char]=(charCount[char] || 0) + 1;
//     }
//     return charCount;
// }
// console.log(countCharacters("kdwnwknwiw"));



// ////most repitive char and count

// function countRepitiveCharacters(str:string) :{char:string,count:number} {
//     const charCount : {[key:string]:number} ={};
//     let maxCount =0;
//     let maxChar="";
//     for (let char of str){
//         charCount[char]=(charCount[char] || 0) + 1;
//     }
//     for (let char  in charCount){
//         if(charCount[char]> maxCount){
//             maxCount=charCount[char];
//             maxChar=char;
//         }
//     }
//     return {char:maxChar,count:maxCount};
// }
// console.log(countRepitiveCharacters("kdwnwknwiw"));



// to count a specific character
function countSpecificChar(str:string,charToCount:string):number{
    let count=0;
    for(let char of str){
        if(char === charToCount){
            count++;
        }
    }
    return count;
}
console.log(countSpecificChar("hello how are you","h"))
console.log(countSpecificChar("hello how are you",""))










