// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("clicked!");
  var userLength = prompt("How long do you want your password to be?", "Enter a number between 8 and 128.");
  if (userLength < 8 || userLength > 128) {
    alert("Please enter a number between 8 or 128.");
    console.log("Did not enter an acceptable number!");
    writePassword();
  } else {
    // confirm("You have entered " + userLength + ". Is this correct?");
    console.log("Acceptable Number!");
    var userUpper = prompt("Would you like uppercase letters?", "Enter 'Yes' or 'No'");
    if (userUpper == "No") {
      console.log("There will be no uppercase letters.");
    } else {
      console.log("There will be uppercase letters.");
    }

  }

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");


  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// const randomNumber = Math.floor(Math.random() = numArray.length);

// console.log(letters[randomNumber]);

function returnRandomChar(array) {
  const randomNumber = Math.floor(Math.random() = array.length);
  return array[randomNumber];
}

