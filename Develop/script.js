// Assignment code here
//function object
/*const random = {
  lower : randomLower,
  upper : randomUpper,
  number : randomNumber,
  symbols : randomSymbol
}*/
// get random 

//var randomLenght = function() {
//passwordLenght = 6;
//}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {

  var randomLower = function(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  
  var randomUpper = function (){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  var randomNumber = function (){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  var randomSymbol = function (){
    const symbols = ' !@#$%^&*()_+{}|<>? '
    return symbols [ Math.floor(Math.random() * symbols.length)];
  }
  var passwordLength = window.prompt ('how many characters  would you like your password to contain?')
  if ( passwordLength < 8 || passwordLength > 128) {
    window.alert('Password has to be between 8 and 128 characters')
    return passwordLength
  }

  var chosenPassword = ""

    //uppercase character
  var upperCharacter = window.confirm("'ok' to include uppercase letters");
  if (upperCharacter) {
      chosenPassword += randomUpper();
  }

  //lowercase character

  var lowerCharacter = window.confirm("'ok' to include lowercase letters");
  if (lowerCharacter) {
    chosenPassword += randomLower();
  }

  //Numbers
  var numbers = window.confirm("'ok' to include numbers");
  if (numbers) {
    chosenPassword += randomNumber();
  }

  //symbols
  var symbols = window.confirm("'ok' to include symbols");
  if (symbols) {
    chosenPassword += randomSymbol();
  }

  var password = ""
  for (var i = 1; 1 <= passwordLength; i++) {
    var index =Math.floor(Math.random() * chosenPassword.length)
    password += chosenPassword[index]
  }

  //password = chosenPassword 
  console.log (password)

  return password

}
