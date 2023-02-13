var generateBtn = document.querySelector("#generate");

// lowercase CHARACTERS ARRAY
// total 26 array members
const lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
console.log(lowerCaseArray);

// UPPERCASE CHARACTERS ARRAY
// total 26 array members
const upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
console.log(upperCaseArray);

// Numeric CHARACTERS ARRAY
// total 10 array members
const numericCaseArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(numericCaseArray);

//SPECIAL CHARACTERS ARRAY
//was unable to make \ act as a symbol
//did not want to include space as a possible input
//total 31 array members
const specialCaseArray = [
  '"',
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
console.log(specialCaseArray);

// AMOUNT OF CHARACTERS for PASSWORD LENGTH
// the function that checks all the necessary
// conditions for the user input before
// they can move on to the next step.

function passLengthFunction() {
  var amount = prompt(
    "How many characters would you like to make up your Password?"
  );
  // if the password is less than 8 or more than 128
  // user will get another chance at making the
  // correct decision
  if (amount < 8 || amount > 128) {
    alert("Password must have at least 8 and no more than 128 characters");
    amount = passLengthFunction();
  }
  // if user made the right Selection,
  // then they will be notified of their choice
  // of password length and can continue
  // answering the rest of the prompts
  else {
    alert("Your password will be " + amount + " characters long. ");
  }
  return amount;
}

// assigning value developed by The function
// to the variable passLength for global use
var passLength = passLengthFunction();
console.log("Number of Characters: " + passLength);

//SERIES OF CONFIRM METHODS
// VERY DRY CODE TO MAKE THIS PASSWORD GENERATOR WORK -_____-
// FOR SOME REASON I WAS UNABLE TO WRAP ALL THE CONFIRM METHODS
// INTO ONE SINGLE FUNCTION AND MAKE THE RESULTS BE AVAILABLE
//IN GLOBAL SCOPE

var categoryCounter = 0;

//-------lowercase logic
var lowerCase = confirm(
  "Do you want to include lowercase characters?\nYES - Click OK\nNO - Click Cancel"
);
if (lowerCase == true) {
  categoryCounter++;
}
console.log("lowercase: " + lowerCase);
console.log("Category Counter: " + categoryCounter);

//------UPPERCASE
var upperCase = confirm(
  "Do you want to include UPPERCASE characters?\nYES - Click OK\nNO - Click Cancel"
);
if (upperCase == true) {
  categoryCounter++;
}
console.log("UPPERCASE: " + upperCase);
console.log("Category Counter: " + categoryCounter);

//------Numeric
var numericCase = confirm(
  "Do you want to include Numeric (0-9) characters?\nYES - Click OK\nNO - Click Cancel"
);
if (numericCase == true) {
  categoryCounter++;
}
console.log("Numeric: " + numericCase);
console.log("Category Counter: " + categoryCounter);

//------Special
var specialCase = confirm(
  "Do you want to include Special characters?\n!'()*+,-.#/$:;&<=%>?@[]^_`{|}~  \n\nYES - Click OK\nNO - Click Cancel"
);
if (specialCase == true) {
  categoryCounter++;
}
console.log("Special: " + specialCase);
console.log("Category Counter: " + categoryCounter);

//if someone forgets to select at least one category they will be directed
//to this series of alerts
if (categoryCounter == 0) {
  alert(
    "You must select at least 1 category of character type\nto proceed with Secure Password Generation!"
  );
  alert(
    "Unfortunately i'm not skilled enough just yet\nto make this user friendly and simply direct you back to the \nYES/NO prompts\nInstead please work with me and just hit refresh\nand don't forget to select at least 1 category <3"
  );
  //i would insert the function to run the series of prompts in here,
  //but for some reason i was unable to figure out how to pull out
  //4 independent boolean values from function-local to global scope
  //
}
// console.log("******TESTING******");
// console.log("lowercase: " + lowerCase);
// console.log("UPPERCASE: " + upperCase);
// console.log("Numeric: " + numericCase);
// console.log("Special: " + specialCase);
// console.log("******TESTING******");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//ACTUAL PASSWORD GENERATION LOGIC

// var userChoice = passLength;
// console.log("userChoice: " + userChoice);

// for (let i = 0; i < userChoice; i++) {
//   if (lowerCase == true) {
//     console.log("Testing my FOR LOOP: -----------");
//     console.log("Only choose if lowercase is TRUE");
//   } else if (upperCase == true) {
//     console.log("Only choose if UPPERCASE is TRUE");
//   } else if (numericCase == true) {
//     console.log("Only choose if Numeric is TRUE");
//   } else if (specialCase == false) {
//     console.log("Only choose if SpecialCase is TRUE");
//   } else {
//     alert(
//       "At least 1 category for character type must be selected.\n(lowercase, UPPERCASE, Numeric, Special Characer)\nPlease try again."
//     );
//     alert(
//       "OMG my apologies, this task was waaaaaaaaay more time consuming than\nI have been expecting, for now, please just refresh the page\n and just select at lest one of the categories <3"
//     );
//   }
// }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// random category assignment

// random index assignment based on the category size

// Write password to the #password input
function writePassword() {
  function generatePassword() {}
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
