// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page




// Click the generate password button
// All code will be written within the writePassword function.

// Prompt shows up asking users HOW MANY CHARACTERS they want
// Must be 8 or more characters and less than or equal to 128 characters
// Create a variable that will hold the user's response to a prompt.
// var input = prompt("How many characters would you like your password to contain?");
// if statement to check whether the user input is LESS THAN 8 or MORE THAN 128
// If less than 8, send alert('Password length must be at least 8 characters');
// if more than 129, send alert('Password length must be no more than 128 characters')
// program stops.




// Series of confirms asking the user whether they want to include certain categories of characters (numers, upper, lower, special)
// Create logic for how we want to handle when a user says YES to certain categories, and when they say NO to other categories.
// var lowerCase = confirm('Click OK to confirm including lowercase characters.)
// var upperCase = confirm('Click OK to confirm including uppercase characters.)
// var specialChars = confirm('Click OK to confirm including special characters.)
// var numbers = confirm('Click OK to confirm including numerical characters.)




// create an array that contains characters for each category
// lowerArr = ['a', 'b', 'c']
// upperArr = ['A', 'B', 'C']
// specialArr = ['!', '@', '#']
// numArr = [1, 2, 3]

// Logic to EXCLUDE arrays based on what the users want or not
// ex. If lowerCase === true, randomly select characters from the lowerArr.
// Randomly select characters from each array (Look up how to create a random number)
// Math.floor(Math.random() + arr.length)
// Store all of the randomly selected characters, from the various arrays, into a new ARRAY?



// var generatedPassArr = ['!', 2]; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// var generatedPass = '!2';
// Password is generated and displayed on the screen
// Don't touch the following lines:
// var passwordText = document.querySelector("#password");
// passwordText.value = password;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var input = prompt('How many characters do you want?');
    if (input < 8 || input > 128 || isNaN(input)) {
      alert("nope")
      return
    } else {
      console.log("input is: " + input)
    };



  var lowerCase = confirm("Click okay to confirm to include lowercase letters.");
  var upperCase = confirm(" Click okay to confirm to include uppercase letters.");
  var specialChar = confirm(" Click okay to confirm to include special characters.");
  var numbers = confirm(" Click okay to confirm to include numbers.");

  lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  specialArr = ["!", "@", "#", "$", "%", "^", "&", "*"];
  numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];



  var lowerRandom = lowerArr[Math.floor(Math.random() * lowerArr.length)]; 
  var upperRandom = upperArr[Math.floor(Math.random() * upperArr.length)];
  var specialRandom = specialArr[Math.floor(Math.random() * specialArr.length)];
  var numbersRandom = numbersArr[Math.floor(Math.random() * numbersArr.length)];

  var randomArr = [lowerRandom, upperRandom, specialRandom, numbersRandom];


function generatedPass () {

  if (lowerCase) {
    var lowerRandom = lowerArr[Math.floor(Math.random() * lowerArr.length)];
  } else {

  }

  if (upperCase) {
    var upperRandom = upperArr[Math.floor(Math.random() * upperArr.length)];
  } else {

  }
  
  if (specialChar) {
    var specialRandom = specialArr[Math.floor(Math.random() * specialArr.length)];
  } else {
    
  }
  
  if (numbers) {
    var numbersRandom = numbersArr[Math.floor(Math.random() * numbersArr.length)];
  } else {

  };
}


  console.log(generatedPass.join(""));

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

