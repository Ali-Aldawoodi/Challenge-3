var generateBtn = document.querySelector("#generate");

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

  var randomArr = [];

  if (lowerCase) {
    randomArr = randomArr.concat(lowerArr)
  }

  if (upperCase) {
    randomArr = randomArr.concat(upperArr)
  }

  if (specialChar) {
    randomArr = randomArr.concat(specialArr)
  }

  if (numbers) {
    randomArr = randomArr.concat(numbersArr)
  };

  var password = "";

  for (var i = 0; i < input; i++) {
    password += randomArr[Math.floor(Math.random() * randomArr.length + 1)];
  }

  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);

