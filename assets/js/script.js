// arrays of characters
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specChars = "!@#$%^&*()";

var askLowerCase = confirm("Do you want to include lowercase letters in your password?");
 
var askUpperCase = confirm("Do you want to include UPPERCASE letters in your password?");

var askNumbers = confirm("Do you want to include numbers in your password?");

var askSpecChar = confirm("Do you want to include special characters in your password?");

var numOfChars = prompt("how many characters do you want your password to have?");


  function generatePassword() {
    var finalCharacterArray = [];
    
    if (askLowerCase) {
      finalCharacterArray = 
      finalCharacterArray.concat(lowerCaseChars.split(""));
    }

    if (askUpperCase) {
      finalCharacterArray =
      finalCharacterArray.concat(upperCaseChars.split(""));
    }

    if (askNumbers) {
      finalCharacterArray =
      finalCharacterArray.concat(numbers.split(""));
    }

    if (askSpecChar) {
      finalCharacterArray =
      finalCharacterArray.concat(specChars.split(""));
    }

    return finalCharacterArray;
  } 

  function init() {
    var arrayOfChars =
    generatePassword();

    var intNumberOfChars =
    parseInt(numOfChars);

    for (var i = 0; i < intNumOfChars; i++) {
      var randomIndex = math.floor(math.random() * arrayOfChars.length);

      password = arrayOfChars[randomIndex];
    }
  }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
