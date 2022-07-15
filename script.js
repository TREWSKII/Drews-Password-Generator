// ? Assignment Code?
var generateBtn = document.querySelector("#generate");

// TODO We need varibles
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// TODO we need this to also be upper case
const blankUpper = [];
const makeUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//TODO the remainig varibles symbols and numbers
const symbols = ["!", "#", "$", "^", "*", "+", "=", "&"];
//const phrases = ["who3ver-Thru-that-Paper-your_MOM's_a_Hoe", "look-at-all-does-chickens", "fuck-you", "okay-Boom3r", "lawlz" ];
const numbers = ["12", "23", "34", "45", "56", "67", "78", "89", "90", "01"];

let selectPassword = [];
let finalPasswword = [];

// TODO Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  finalPasswword = [];
}

//!gathering user input

// TODO Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  passwordLength =prompt("Choose between 8 and 128 for your Password length");
  console.log("PasswordLength" + passwordLength);

  if(passwordLength >= 8 && passwordLength <= 128) {
    selectLowercase = confirm("Do you want Lowercase letters?");
    console.log("Lower case" + selectLowercase);
    selectMakeUpper = confirm("Do you want Uppercase Letters?");
    console.log("Upper case" + selectMakeUpper);
    selectNumbers = confirm("Do you want numbers?");
    console.log("Numbers" + selectNumbers);
    //selectPhrases = confirm("Do you want a phunny phrase?");
    //console.log("Phrases" + selectPhrases);
    selectSymbols = confirm("Do you want symbols?");
    console.log("Symbols" + selectSymbols);
  //password genterator
  if(selectLowercase === true) {
    selectPassword = selectPassword.concat (lowerCase)
  } 
  if(selectMakeUpper === true) {
    selectPassword = selectPassword.concat (makeUpper)
  }
  if(selectNumbers === true) {
    selectPassword = selectPassword.concat (numbers)
  }
  if(selectSymbols === true) {
    selectPassword = selectPassword.concat (symbols)
  }
  //if(selectPhrases === true) {
    //selectPassword = selectPassword.concat (phrases)
  //}
console.log(selectPassword);

// ! why
for(let i = 0; i < passwordLength; i++) {
  finalPasswword.push(selectPassword[Math.floor(Math.random() * selectPassword.length)])
}


return(finalPasswword)
  } else {
    alert("PLEASE MAKE SURE PASSWORD IS MORE THAN 8 CHARACTERS AND LESS THAN 128")
  }





  //1. need to prompt the user for the password criteria
  //  a. password length 8 - 128
  //  b. lowercase, uppercase, numbers, symbols
  // 2. validate the input  (insure that the above is met, and that one of each chrecter type is being selected)
  // 3. Generate password based sa criteria 
  // 4. display the generator password on the page. 
  // for loop at the end 
    return "Generated password will go here"
  }