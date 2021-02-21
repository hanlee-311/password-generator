// Assignment Code
var generateBtn = document.querySelector("#generate");
const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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
    writePassword();

  } else {
    console.log("Acceptable Number!");
    var confirmLength = confirm("You have entered " + userLength + ". Is this correct?");
    if (confirmLength === false) {
      writePassword();
      }
    }

  //Confirm uppercase
  var confirmUpper = confirm("Your password will be " + userLength +" characters. Do you want to have uppercase letters? Press 'Cancel' for No.");
    if (confirmUpper === true) {
      
    }

}

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");


  // passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








// const randomNumber = Math.floor(Math.random() = numArray.length);

// console.log(letters[randomNumber]);

function returnRandomChar(array) {
  const randomNumber = Math.floor(Math.random() = array.length);
  return array[randomNumber];
}

