function printID(id: string|number){
    return `The type of id : ${typeof id}`;
}
console.log(printID("manasa"));
console.log(printID(56));
//console.log(printID(true));


//////////////
function checkVal(id: string | number) {
      if (typeof id === "string") {
   
    console.log(id.toUpperCase()); 
  } else {
    
    console.log(id.toFixed(0));
  }
}
checkVal("chaitanya");
checkVal(672.8);// toFixed(0|1|2|3|...) it wil return the output in decimal value (the number of values to be placed after decimal).

////////

type Loggable = string | string[];

function logItems(Items: Loggable) {
    
    if (typeof Items === "string") {
        
        
        console.log(`Item: ${Items.trim()}`);

    } else {
        
        
        console.log(`[LIST] Found ${Items.length} items.`); 
        Items.map(item => {
            console.log(` => ${item}`);
        });
    }
}


logItems("    Apple   ");
logItems(["Banana", "Cherry", "Date"]);



//////

type MessageData = string | string[];
function formatMessages(data: MessageData): string[] {
   
    if (Array.isArray(data)) {
        
       
        return( data.map(message => message.toUpperCase()));

    } else {
   
       return[data.toLowerCase()] ;
    }
}



const singleMessage = "please submit your form.";
const multipleMessages = ["nxbjahxamn", "njhggwys", "manxaytxai"];
const originalArray = ['do not change me','mndkhwdjkmd'];

console.log("Single Input Output:", formatMessages(singleMessage));
console.log("Array Input Output:", formatMessages(multipleMessages));
console.log("Checking Immutability (Original Array):", originalArray);






