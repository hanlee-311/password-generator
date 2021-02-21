// Assignment Code
var generateBtn = document.querySelector("#generate");
const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~", "`", "{", "}", "[", "]", "|", ";", ":", "'", ",", "<", ">", ".", "?", "/"];

// Write password to the #password input
function writePassword() {
  console.log("clicked!");
  //Confirm Password Length
  var userLength = prompt("How long do you want your password to be?", "Enter a number between 8 and 128.");
  if (userLength === null) {
    return;

  } else if (userLength < 8 || userLength > 128) {
    alert("Please enter a number between 8 and 128.");
    console.log("Did not enter an acceptable number!");
    return writePassword();

  } else {
    console.log("Acceptable Number!");
    var confirmLength = confirm("You have entered " + userLength + ". Is this correct?");
    if (confirmLength === false) {
      return writePassword();
      }
    }

  //Confirm uppercase
  var confirmUpper = confirm("Your password will be " + userLength +" characters. Do you want to have uppercase letters? Press 'Cancel' for No.");
    if (confirmUpper === true) {
      for (var i = 0; i < confirmUpper.length; i++) {
      
      }
    }

  //Confirm lowercase
  var confirmLower = confirm("Do you want to have lowercase letters? Press 'Cancel' for No.");
  if (confirmLower === true) {
    for (var i = 0; i < confirmLower.length; i++) {

    }
  }


  //Confirm special characters
  var confirmSpecial = confirm("Do you want to have special characters? Press 'Cancel' for No.");
  if (confirmSpecial === true) {
    for (var i = 0; i < confirmSpecial.length; i++){

    }
  }

}

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








// const randomNumber = Math.floor(Math.random() = numArray.length);

// console.log(letters[randomNumber]);

function returnRandomChar(array) {
  const randomNumber = Math.floor(Math.random() = array.length);
  return array[randomNumber];
}

