// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let length = parseInt(prompt("How many characters should your password to contain?"));
  let specialCharacter = confirm("If you want special special characters to be included click OK");
  let numericCharacter = confirm("If you want special numeric characters to be included click OK");
  let lowercaseCharacter = confirm("If you want special lower characters to be included click OK");
  let uppercaseCharacter = confirm("If you want special uppercase characters to be included click OK");

  let passwordOptions = {
    length: length,
    specialCharacter: specialCharacter,
    numericCharacter: numericCharacter,
    lowercaseCharacter: lowercaseCharacter,
    uppercaseCharacter: uppercaseCharacter
  };

  return passwordOptions;

}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  console.log("Generating password...");

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

// Write password to the #password input

function writePassword() {
  console.log("writePassword function called");
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);




