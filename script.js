// Assignment Code

var userInput = "";
var inputFlag = true;
// inputFlag was inserted in case an invalid entry was selected
var characterType = true;
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["!", "@", "#", "$", "%", "~", "^", "&", "*", "(", ")", "-", "+"];

  // EMPTY ARRAY
  
  var resultArray = [];
  var userArray = [];


  //do...while taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
  //in case user selects an invalid answer or character
  do{
    inputFlag = true;
    var numCharacter = prompt ("How many characters would you like your password to contain? (8-128)");
      numCharacter = parseInt (numCharacter);

    if (numCharacter < 8 || numCharacter > 128 || isNaN(numCharacter)){
        alert("Please select valid entry"); // user must select a valid entry between 8-128 in length, no non-numerical answers
        inputFlag = false;  
      }
      console.log(inputFlag);
  } while (inputFlag === false);


//do...while was added in case user selects none of the options
    do{
        characterType = true;
        var characters = confirm ("Click OK to confirm including special characters");
        var numbers = confirm ("Click OK to confirm including numeric characters");
        var uppercases = confirm ("Click OK to confirm including uppercase characters");
        var lowercases = confirm ("Click OK to confirm including lowercase characters");

        if (characters === false && numbers === false && uppercases === false && lowercases === false){
            characterType = false;
            alert("Please make a selection"); //user MUST make at least one selection
        }
    } while (characterType === false);
    
    


  // ARRAY SECTION


  if (numbers){
    resultArray = resultArray.concat(numericCharacters);
    userArray.push(numericCharacters[Math.floor(Math.random() * numericCharacters.length)])
    numCharacter = numCharacter - 1;
    }


  if (uppercases){
    resultArray = resultArray.concat(uppercaseCharacters);
    userArray.push(uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)]);
    numCharacter = numCharacter - 1;
  }


  if (lowercases){
    resultArray = resultArray.concat(lowercaseCharacters);
    userArray.push(lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)]);
    numCharacter = numCharacter - 1;
  }


  if (characters){
    resultArray = resultArray.concat(specialCharacters);
    userArray.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
    numCharacter = numCharacter - 1;
  }

  console.log(resultArray)


  for (var i = 0; i < numCharacter; i++) {
        
      userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
    }  
    userArray = shuffle(userArray);
    return userArray.join("") ;


}  


//https://javascript.info/task/shuffle/
//the following code was taken from this snippet to truly randomize my password generator

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);