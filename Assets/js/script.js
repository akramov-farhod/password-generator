// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt about password length
// declaring passLength variable in global scope for
// future use
var passLength;
password();
// the function that checks all the necessary
// conditions for the user to enter before
// they can move on to the next step.
function password() {
  var passLength = prompt(
    "How many characters would you like in your Password?"
  );
  // if the password is shorter than 8 characters,
  // user will get another chance at making the
  // correct decision
  if (8 > passLength) {
    alert(
      "Password must have at least 8 characters." +
        " You entered: " +
        passLength
    );
    password();
  }
  // if the password is longer than 128 characters,
  // user will get another chance at making the
  // correct decision
  else if (passLength > 128) {
    alert(
      "Password must have no more than 128 characters." +
        " You entered: " +
        passLength
    );
    password();
  }
  // if user made the right Selection,
  // then they will be notified of their choice
  // of password length and can continue
  // answering the rest of the prompts
  else {
    alert("Your password will be " + passLength + " characters long. ");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
