// Returns : Current Time Stamp Value
function getTimeStamp(){
    var date = new Date();
    var timeStamp = date.getTime();
    return timeStamp.toString();
}

// Parms   : num - Integer Value
// Returns : corresponding capital string
function getCapitalCharacter(num){
    let character = '', temp;
  
    while (num > 0) {
        temp = (num - 1) % 26;
        character = String.fromCharCode(65 + temp) + character;
        num = (num - temp)/26 | 0;
    }
    return character;
  }

// Parms   : num - Integer Value
// Returns : corresponding small string
function getSmallCharacter(num){
    let character = '', temp;
  
    while (num > 0) {
        temp = (num - 1) % 26;
        character = String.fromCharCode(97 + temp) + character;
        num = (num - temp)/26 | 0;
    }
    return character;
}

// Parms   : num - Integer Value
// Returns : corresponding special character
function getSpecialCharacter(num){
    let character = '', temp;
    if(num % 2 == 0){
        while (num > 0) {
            temp = (num - 1) % 15;
            character = String.fromCharCode(33 + temp) + character;
            num = (num - temp)/15 | 0;
        }
    }
    else{
        while (num > 0) {
            temp = (num - 1) % 7;
            character = String.fromCharCode(58 + temp) + character;
            num = (num - temp)/7 | 0;
        }        
    }
    return character;    
}

// Parms   : userStr - String Value
// Returns : corresponding integer
function getNumber(userStr) {
    userStr = userStr.toUpperCase();
    let intValue = 0, len = userStr.length;
    for (i = 0; i < len; i++) {
      intValue += (userStr.charCodeAt(i) - 64) * Math.pow(26, len - i - 1);
    }
    return intValue.toString();
  }

function generatePassword(userName) {
    //validate userName
    
    //Check the type of userName if it is string, else convert it to a string
    if (typeof(userName) !== "string") throw new TypeError("Invalid Username : It must be of type string!");
    //Check the length of userName, else throw an error
    if(userName.length <= 3) throw new Error("Invalid Username : Length must be greater than 3!");
    
    //generate password
    var timeStamp = getTimeStamp()
    var lengthOfTimeStamp = timeStamp.toString().length
    const capital = timeStamp.slice(lengthOfTimeStamp/2, (lengthOfTimeStamp/2) + 4); 
    const small = timeStamp.slice((lengthOfTimeStamp/2) + 4, lengthOfTimeStamp - 1); 
    const spchar = timeStamp.slice(lengthOfTimeStamp-1); 

    //Captial Letter
    var partA = getCapitalCharacter(parseInt(capital))

    //Small Letter
    var partB = getSmallCharacter(parseInt(small))

    //Special Character
    var partC = getSpecialCharacter(parseInt(spchar))

    //Integer
    var partD = getNumber(userName.slice(0,4))

    return partA + partB + partC + partD
}

module.exports = generatePassword;