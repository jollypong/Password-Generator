//Variables for DOM Elements
let generateBtn = document.querySelector("#generate");

//Variables for Password Characters
let character= [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", ']', "^", '_', "`", "{", "|", "}", "~", "]"];
let alphabet= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let ALPHABET= alphabet.map(alphabet=> alphabet.toUpperCase());
let number= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let password = [];

function getCriteria() { 
    let passwordLength = prompt("What is the length of your new password? \n Enter a number between 8-128");
    console.log(passwordLength);
    if (passwordLength<8 || passwordLength>128) {
        alert ("Please enter a valid number between 8 and 128");
    } else {
        let includeNumber = confirm("Do you require numbers?")
        console.log(includeNumber);
    
        let includeAlpha = confirm("Do you require alphabets?")
        console.log(includeAlpha);
    
        let includeALPHA = confirm("Do you require your letters to be capitalized?")    
        console.log(includeALPHA);
    
        let includeSymbols = confirm("Do you require special character?")
        console.log(includeSymbols);

        let passwordCriteria = { 
            passwordLength: passwordLength,
            includeNumber: includeNumber,
            includeAlpha: includeAlpha,
            includeALPHA: includeALPHA,
            includeSymbols: includeSymbols
        }
        return passwordCriteria
    }
};

function generatePassword() { 
    //criteria for passcode
    let criteria = getCriteria();

    let passwordPool = [];
    let guaranteedchar = [];

    if (criteria.includeNumber ===true){ 
        guaranteedchar.push(number[Math.floor(Math.random() * number.length)]);
        passwordPool = passwordPool.concat(number);    
        console.log(passwordPool)
    };
    if (criteria.includeAlpha ===true){ 
        guaranteedchar.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
        passwordPool = passwordPool.concat(alphabet);     
        console.log(passwordPool)  
    };
    if (criteria.includeALPHA ===true){
        guaranteedchar.push(ALPHABET[Math.floor(Math.random() * ALPHABET.length)]);
        passwordPool = passwordPool.concat(ALPHABET);
        console.log(passwordPool)
    };
    if (criteria.includeSymbols ===true){
        guaranteedchar.push(character[Math.floor(Math.random() * character.length)]);
        passwordPool = passwordPool.concat(character);
    };

    console.log(guaranteedchar);
    console.log(passwordPool);
    console.log(typeof(passwordPool));
    
    let tempPassword = [];
    for (let i = 0; i < criteria.passwordLength; i++){
    char = passwordPool[Math.floor(Math.random() * passwordPool.length)];
    tempPassword.push(char);
    console.log(char)
    console.log(tempPassword);
    }

    for (let index = 0; index < guaranteedchar.length; index++) {
        tempPassword[index] = guaranteedchar[index] ;
    } 

    let finalPassword = tempPassword.join("") 

    return finalPassword;
};

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
};

//button
generateBtn.addEventListener("click", writePassword);