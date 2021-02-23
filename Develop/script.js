// Assignment Code
var generateBtn = document.querySelector("#generate");
var userPassword = [];
const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~", "`", "{", "}", "[", "]", "|", ";", ":", "'", ",", "<", ">", ".", "?", "/"];

// Write password to the #password input
function generatePassword() {
  userPassword = [];
  console.log("clicked!");
  //Confirm Password Length
  var userLength = prompt("How long do you want your password to be?", "Enter a number between 8 and 128.");
  if (userLength === null) {
    return;

  } else if (isNaN(userLength)) {
    alert("Please enter a number.");
    console.log("Not a number.");
    return generatePassword();

  } else if (userLength < 8 || userLength > 128 || isNaN(userLength)) {
    alert("Please enter a number between 8 and 128.");
    console.log("Did not enter an acceptable number!");
    return generatePassword();

  } else {
    console.log("Acceptable Number!");
    var confirmLength = confirm("You have entered " + userLength + ". Is this correct?");
    if (confirmLength === false) {
      console.log("Starting Over!");
      return generatePassword();
      } else {
        var passwordLength = parseInt(userLength);
      }
    }

  //Confirm uppercase
  var confirmUpper = confirm("Your password will be " + userLength +" characters. Do you want to have uppercase letters? Press 'Cancel' for No.");
    if (confirmUpper === true) {
      for (var i = 0; i < upperCaseChar.length; i++) {
        userPassword.push(upperCaseChar[i]);
      }
    }

  //Confirm lowercase
  var confirmLower = confirm("Do you want to have lowercase letters? Press 'Cancel' for No.");
  if (confirmLower === true) {
    for (var i = 0; i < lowerCaseChar.length; i++) {
      userPassword.push(lowerCaseChar[i]);
    }
  }

  // Confirm numbers
  var confirmNumber = confirm("Do you want to have numbers? Press 'Cancel' for No.");
  if (confirmNumber === true) {
    for (var i = 0; i < numArray.length; i++) {
      userPassword.push(numArray[i]);
    }
  }

  //Confirm special characters
  var confirmSpecial = confirm("Do you want to have special characters? Press 'Cancel' for No.");
  if (confirmSpecial === true) {
    for (var i = 0; i < specialArray.length; i++){
      userPassword.push(specialArray[i]);
    }
  }

  console.log(userPassword);

  //Generate Password Based on user parameters
  var randomPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    randomPassword+= userPassword[
      Math.floor(Math.random() * userPassword.length)
    ];
    
  }
  return randomPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









