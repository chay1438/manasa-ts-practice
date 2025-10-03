type StatusOption = "online" | "away"| "offline";
type UserID = number | string;
let updateStatus =(userid: UserID, status: StatusOption): void =>{
    console.log(`UserID : ${userid} status updated: ${status}`);
};
console.log(updateStatus("101","away"));
//console.log(updatedStatus("101","busy"));
console.log(updateStatus(67,"offline"));



///
// Create an Interface named StylingProps that includes two optional properties: className (a string) and style (an object or any for simplicity).

// Create an Interface named DataProps that includes two required properties: title (a string) and count (a number).

// Create a Type Alias named CardProps that is the Intersection of DataProps and StylingProps.

// Create a function renderCard that accepts a CardProps object and prints its properties


interface StylingProps {
    className:string;
    Style: object|any;
}
interface DataProps {
    title: string;
    count :number;
}
type CardProps = DataProps & StylingProps;
let renderCard =(cards:CardProps): void =>{
    console.log(` Rendering Card: ${cards.title}`);
    console.log(`Count Value: ${cards.count}`);
    console.log(`Style Object Presence: ${cards.Style}`); 
    console.log(`Classname: ${cards.className}`);
}
const mycard: CardProps={
    
    title :"Quarterly Sales",
    count: 1500,
    className: "highlighted-card",
    Style: { color: 'red' }
};
renderCard(mycard);





    

   
    





