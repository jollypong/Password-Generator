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
};

function getrandom(array){
    let random = Math.floor(Math.random() * array.length)
    return random; 
}

function generatePassword() { 
    //criteria for passcode
    let criteria = getCriteria();
    console.log(criteria)

    let passwordPool = [];
    if (criteria.includeNumber === true){ 
        passwordPool =passwordPool.concat(number);    
    };
    if (criteria.includeAlpha === true){ 
        passwordPool =passwordPool.concat(alphabet);       
    };
    if (criteria.includeALPHA ===true){
        passwordPool =passwordPool.concat(ALPHABET);
    };
    if (criteria.includeSymbols ===true){
        passwordPool =passwordPool.concat(character);
    };
    console.log(passwordPool);
    
    let tempPassword = [];
    for (let i = criteria.passwordLength; i > 0; i--){
    passwordPool[Math.floor(Math.random() * criteria.passwordLength)];
    tempPassword.push(passwordPool); 
    console.log(tempPassword);
    }
};

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
};



//button
generateBtn.addEventListener("click", writePassword);

// function criteria(){ 
// let temppassword = []
//     if (includeNumbers === true){ 
//             temppassword.concat(numbers);
//             console.log(temppassword);
//         }
//     if (includealpha === true){ 
//             temppassword.concat(alphabet);
//             console.log(temppassword);
//         }
//     if (includeALPHA ===true){
//             temppassword.concat(ALPHABET);
//             console.log(temppassword);
//     }
//     if (includeSymbols ===true){
//             temppassword.concat(Symbol);
//             console.log(temppassword);
//     }
// return temppassword; 

//     }
    // function randompicker(){ 
    //     do { 
    //         let random = number[Math.floor(Math.random() * passwordLength)];
    //         console.log(random);
    //         newPassword.push(random);
    //         console.log (newPassword);
    //         passwordLength--; 
    //     }
    //     while (passwordLength > 0);
    //         console.log(newPassword);
    //         console.log(newPassword.join(""));
    //         return newPassword;
//     };

//     // if (passwordLength > 8 && passwordLength < 128){ 
//     //     if (confirm("Do you require alphabets?")== true){ 
//     //         number = number.concat(alphabet);
//     //         console.log(number);
//     //         randompicker();
            
//     //     }else if (confirm("Do you require your letters to be capitalized?")==true){
//     //         number = number.concat(alphabet, ALPHABET); 
//     //         console.log(number);
//     //         randompicker();

//     //     }else if (confirm("Do you require special character?")== true){ 
//     //         number = number.concat(alphabet,ALPHABET, character);
//     //         console.log(number);
//     //         randompicker();

//     //     }else
//     //     randompicker;
    
//     }else 
//     alert("That was not a valid input! \n Please make sure your length of password is between 8 and 128");
// 