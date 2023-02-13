var generateBtn = document.querySelector("#generate");
function restart() {
  location.reload();
}

// Write password to the #password input
function writePassword() {
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
  console.log("lowerCaseArray: ");
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
  console.log("upperCaseArray: ");
  console.log(upperCaseArray);

  // Numeric CHARACTERS ARRAY
  // total 10 array members
  const numericCaseArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  console.log("numericCaseArray: ");
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
  console.log("specialCaseArray: ");
  console.log(specialCaseArray);

  // AMOUNT OF CHARACTERS for PASSWORD LENGTH
  // the function that checks all the necessary
  // conditions for the user input before
  // they can move on to the next step.
  function passLengthFunction() {
    var amount = prompt(
      "How many characters would you like to make up your Password?"
    );
    // if user made the right Selection,
    // then they will be notified of their choice
    // of password length and can continue
    // answering the rest of the prompts
    if (amount >= 8 && amount <= 128) {
      alert("Your password will be " + amount + " characters long. ");
    }
    // if the password is less than 8 or more than 128
    // or anything thats not a number
    // user will get another chance at making the
    // correct decision
    else {
      alert(
        "Please make sure to enter a number\nBigger than or equal to 8\n  and\nSmaller than or equal to 128"
      );
      amount = passLengthFunction();
    }
    return amount;
  }

  // assigning value developed by The function
  // to the variable passLength for global use
  var passLength = passLengthFunction();

  //SERIES OF CONFIRM METHODS
  var lowerCase;
  var upperCase;
  var numericCase;
  var specialCase;
  confirmSeries();
  function confirmSeries() {
    lowerCase = confirm(
      "Do you want to include lowercase characters?\nYES - Click OK\nNO - Click Cancel"
    );

    //------UPPERCASE
    upperCase = confirm(
      "Do you want to include UPPERCASE characters?\nYES - Click OK\nNO - Click Cancel"
    );

    //------Numeric
    numericCase = confirm(
      "Do you want to include Numeric (0-9) characters?\nYES - Click OK\nNO - Click Cancel"
    );
    //------Special
    specialCase = confirm(
      "Do you want to include Special characters?\n!'()*+,-.#/$:;&<=%>?@[]^_`{|}~  \n\nYES - Click OK\nNO - Click Cancel"
    );
  }

  //-------lowercase logic
  //ACTUAL PASSWORD GENERATION LOGIC

  var userChoice = passLength;
  console.log("Password Length: " + userChoice);
  console.log("lower case: " + lowerCase);
  console.log("UPPER case: " + upperCase);
  console.log("Numeric case: " + numericCase);
  console.log("Special case: " + specialCase);
  var finalSymbols = [];
  let passwordArray = [];
  for (let i = 0; i < userChoice; i++) {
    // if user wants lowercase characters to be included
    if (lowerCase === true) {
      var randomLower = Math.floor(Math.random() * lowerCaseArray.length);
      finalSymbols.push(lowerCaseArray[randomLower]);
    }
    // if user wants UPPERCASE characters to be included
    if (upperCase === true) {
      var randomUpper = Math.floor(Math.random() * upperCaseArray.length);
      finalSymbols.push(upperCaseArray[randomUpper]);
    }
    // if user wants numeric characters to be included
    if (numericCase === true) {
      var randomNumeric = Math.floor(Math.random() * numericCaseArray.length);
      finalSymbols.push(numericCaseArray[randomNumeric]);
    }
    // if user wants special characters to be included
    if (specialCase === true) {
      var randomSpecial = Math.floor(Math.random() * specialCaseArray.length);
      finalSymbols.push(specialCaseArray[randomSpecial]);
    }
    var randomIndex = Math.floor(Math.random() * finalSymbols.length);
    var finalChoice = finalSymbols[randomIndex];
    passwordArray.push(finalChoice);
  }
  if (!lowerCase && !upperCase && !numericCase && !specialCase) {
    alert(
      "Woah, looks like you forgot to select a category for\nthe type of characters you'd like to be included\nin your password.\n[AT LEAST ONE CATEGORY MUST BE SELECTED]"
    );
    location.reload();
  }

  // console.log printing out the final result
  console.log("Password: " + passwordArray.join(""));

  // applying the final result to the HTML
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  document.querySelector("#password").value = passwordArray.join("");
  alert(
    "Congradulations!\nYour Secure Password has been successfully Generated!"
  );
}

//event listener to generate button
generateBtn.addEventListener("click", writePassword);
