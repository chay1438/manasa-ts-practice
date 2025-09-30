// Https status checker
// we are using switch in place if condition statements.switch(status)
// case (for the value to be compared )-  case https.ok:




enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500
}

// Function to print custom messages for each HTTP status
function printStatusMessage(status: HttpStatus): void {
  switch(status){
      case HttpStatus.OK:
      console.log("200: Success! Everything is OK.")
      break;
      case HttpStatus.BadRequest:
      console.log("400: Bad Request! Please check your input.")
      break;
      case HttpStatus.Unauthorized:
      console.log("401: Unauthorized! Access is denied.")
      break;
      case HttpStatus.NotFound:
      console.log("404: Not Found! The resource does not exist.")
      break;
      case HttpStatus.InternalServerError:
      console.log("500: Internal Server Error! Something went wrong on the server.")
      break;
       default:
      console.log("Unknown status code!")
  }
}

printStatusMessage(HttpStatus.OK);
printStatusMessage(HttpStatus.Unauthorized);
printStatusMessage(HttpStatus.InternalServerError);


////



enum Days{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
    
}

function isWeekend(day:Days):   boolean{
    return day ===Days.Saturday  || day ===Days.Monday;
}
console.log(isWeekend(Days.Friday));
console.log(isWeekend(Days.Monday));


///

enum MediaTypes {
  Image = 'image',
  Video = 'video',
  Audio = 'audio'
}

const selectedType: MediaTypes = MediaTypes.Image;
console.log(selectedType)


const associatedText: string = MediaTypes.Image;
console.log(associatedText)
