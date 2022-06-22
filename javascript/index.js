function generatePassword () {
    if (document.getElementById("password-length").value == 0 || isNaN(document.getElementById("password-length").value)) {
        displayMessage("Please choose a valid password length");
        return;
    }
    else if (buildCharacterString() == "") {
        displayMessage("You need to check atleast one box, or include a few characters");
        return;
    }
    removeMessage();
    displayPassword(buildPassword(buildCharacterString()));
    
}

function buildCharacterString () {
    let lowercase_checkbox = document.getElementById("lowercase");
    let uppercase_checkbox = document.getElementById("uppercase");
    let numbers_checkbox =  document.getElementById("numbers");
    let symbols_checkbox = document.getElementById("symbols");
    let special_checkbox = document.getElementById("special");

    let include_input = document.getElementById("include-characters");
    let exclude_input = document.getElementById("exclude-characters");
    let letterArray = "";

    let lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numberCharacters = "1234567890";
    let symbolCharacters = "!@#$%^&-+=;:";
    let specialCharacters = "{}[]()\\*\"'";


    if (lowercase_checkbox.checked) {
        letterArray += lowercaseCharacters;
    }
    if (uppercase_checkbox.checked) {
        letterArray += uppercaseCharacters;
    }
    if (numbers_checkbox.checked) {
        letterArray += numberCharacters;
    }
    if (symbols_checkbox.checked) {
        letterArray += symbolCharacters;
    }
    letterArray = removeCharacters(letterArray, exclude_input.value);
    letterArray += include_input.value;

    return letterArray;
}

function removeCharacters (letterArray, removeCharacters) {
    for (let i = 0; i < removeCharacters.length; i++) {
        letterArray = letterArray.replace(removeCharacters[i], '');
    }
    
    return letterArray;
}

function buildPassword (letterArray) {
    let password_length = document.getElementById("password-length").value;
    let password = "";
    for (let i = 0; i < password_length; i++) {
        password += letterArray[Math.floor(Math.random() * letterArray.length)]
    }
    return password;
}

function displayPassword (password) {
    let password_field = document.getElementById("password-field");
    password_field.value = password;
    
}

function copyText (field) {
    /* Get the text field */
    var copyText = document.querySelector(field);
    
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}

function displayMessage (text) {
    let message = document.getElementById("message");
    message.style.display = "block";
    message.innerHTML = text;
}

function removeMessage () {
    let message = document.getElementById("message");
    message.style.display = "none";
}

document.addEventListener("keydown", () => {
    removeMessage();
});

generatePassword();



