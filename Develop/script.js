// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//Define generatepassword()

function generatePassword() {
  let num = '0123456789';
  let special = "!@#$%^&*";
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let len = prompt("Choose a length of at least 8 characters and no more than 128 characters");

  let lower = confirm("Do you want lowercase?");
  let upper = confirm("Do you want Uppercase?");
  let numeric = confirm("Do you want numbers?");
  let specialCharacters = confirm("Do you want special characters?");

  let pass = '';
  let word = '';

  if (lower) {
    pass+=lowercase;
  };

  if (upper) {
    pass+=lowercase.toUpperCase();
  };

  if (numeric) {
    pass+=num; 
  };

  if (specialCharacters) {
    pass+=special;
  };

  for (let i = 0; i < len; i++) {
    word += pass[Math.floor(Math.random()*pass.length)]
  }
  return word;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
