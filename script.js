// Assignment Code
var inputFlag = true;
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

  // uppercaseCharacters [1]
  do{
    inputFlag = true;
    var numCharacter = prompt ("How many characters would you like your password to contain? (8-128)");
      numCharacter = parseInt (numCharacter);

    if (numCharacter < 8 || numCharacter > 128 || isNaN(numCharacter)){
        alert("Please select valid entry");
        inputFlag = false;  
      }
      console.log(inputFlag);
  } while (inputFlag === false);



    do{
        characterType = true;
        var characters = confirm ("Click OK to confirm including special characters");
        var numbers = confirm ("Click OK to confirm including numeric characters");
        var uppercases = confirm ("Click OK to confirm including uppercase characters");
        var lowercases = confirm ("Click OK to confirm including lowercase characters");

        if (characters === false && numbers === false && uppercases === false && lowercases === false){
            characterType = false;
            alert("Please make a selection");
        }
    } while (characterType === false);
    
    


  // ARRAY SECTION

  if (numbers){
    resultArray = resultArray.concat(numericCharacters);
    }


  if (uppercases){
    resultArray = resultArray.concat(uppercaseCharacters);
  }


  if (lowercases){
    resultArray = resultArray.concat(lowercaseCharacters);
  }


  if (characters){
    resultArray = resultArray.concat(specialCharacters);
  }

  console.log(resultArray)


  for (var i = 0; i < numCharacter; i++) {
        
      userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
    }  

      return userArray.join("") ;


}  

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);