// Array of special characters to be included in password
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',',
  ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let length = parseInt(prompt("How many characters should your password contain?"));

  // Validate password length
  while (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128.");
    length = parseInt(prompt("How many characters should your password contain?"));
  }

  let specialCharacter = confirm("Click OK to include special characters in your password.");
  let numericCharacter = confirm("Click OK to include numeric characters in your password.");
  let lowercaseCharacter = confirm("Click OK to include lowercase characters in your password.");
  let uppercaseCharacter = confirm("Click OK to include uppercase characters in your password.");

  // Validate at least one character type is selected
  while (!specialCharacter && !numericCharacter && !lowercaseCharacter && !uppercaseCharacter) {
    alert("You must select at least one character type.");
    specialCharacter = confirm("Click OK to include special characters in your password.");
    numericCharacter = confirm("Click OK to include numeric characters in your password.");
    lowercaseCharacter = confirm("Click OK to include lowercase characters in your password.");
    uppercaseCharacter = confirm("Click OK to include uppercase characters in your password.");
  }

  return {
    length: length,
    specialCharacter: specialCharacter,
    numericCharacter: numericCharacter,
    lowercaseCharacter: lowercaseCharacter,
    uppercaseCharacter: uppercaseCharacter
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  let allCharacters = [];
  let generatedPassword = '';

  if (options.specialCharacter) {
    allCharacters = allCharacters.concat(specialCharacters);
  }
  if (options.numericCharacter) {
    allCharacters = allCharacters.concat(numericCharacters);
  }
  if (options.lowercaseCharacter) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
  }
  if (options.uppercaseCharacter) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
  }

  for (var i = 0; i < options.length; i++) {
    generatedPassword += getRandom(allCharacters);
  }

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input or display in an alert
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  // Option to display in an alert or write to the page
  alert(password);  // Display the password in an alert
  passwordText.value = password;  // Write the password to the page
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
