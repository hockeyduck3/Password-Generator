// For the length of the password
const range = document.querySelector('.custom-range');
const lengthNumber = document.querySelector('#number');

range.oninput = function() {
    lengthNumber.textContent = range.value;
}

// Variables for the checkboxes
const lowerCheck = document.querySelector('#customCheck1');
const upperCheck = document.querySelector('#customCheck2');
const specialCheck = document.querySelector('#customCheck3');
const numberCheck = document.querySelector('#customCheck4');

// Event listeners for the checkboxes
lowerCheck.addEventListener('change', isChecked);
upperCheck.addEventListener('change', isChecked);
specialCheck.addEventListener('change', isChecked);
numberCheck.addEventListener('change', isChecked);

// Function to enable the generate password button
function isChecked() {
    if (lowerCheck.checked || upperCheck.checked || specialCheck.checked || numberCheck.checked) {
        generateBtn.disabled = "";
    } else {
        document.querySelector('#generateBtn').disabled = "disabled";
    }
}

// Variable for the generate password button
const generateBtn = document.querySelector('#generateBtn');

// Event listner for the generate password button
generateBtn.addEventListener('click', passwordMaker);


// Password Maker function
function passwordMaker() {
    
    // Empty character string
    let characters = '';

    // Strings for the other characters
    const lowerSet = 'abcdefghijklmnopqrstuvwxyz';

    const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const specialSet = `!@#$%^&*(),.?":{}|<>`;

    const numberSet = '0123456789';

    // Added characters to the characters string based on the user's input
    if (lowerCheck.checked) {
        characters += lowerSet;
    }

    if (upperCheck.checked) {
        characters += upperSet;
    }

    if (specialCheck.checked) {
        characters += specialSet;
    }

    if (numberCheck.checked) {
        characters += numberSet;
    }

    // Empty password string for the user's generated password
    let userPassword = '';

    // Function for creating the passw
    passwordCreation();

    function passwordCreation() {
        // Loop through the length of the range and add it to the empty string of userPassword
        for (let i = 0; i < range.value; i++) {
            userPassword += (characters.charAt(Math.floor(Math.random() * characters.length)));
        }

        // Function to check the password
        passwordChecker();
    }

    // This function is to check and make sure that the generated password meets the user's criteria
    function passwordChecker() {
        // If the lowercase checkbox is checked
        if (lowerCheck.checked) {
            // Check and see if the password contains any lowercase letters
            if (userPassword.match(/[a-z]/) == null) {
                console.log(`${userPassword} did not contain any lowercase letters.`);
                // If the generated password does not contain any lowercase letters then reset the password to an empty string
                userPassword = '';
                // Then run the passwordCreation function again
                passwordCreation();
            }
        }

        // If the uppercase checkbox is checked
        if (upperCheck.checked) {
            // Check and see if the password contains any uppercase letters
            if (userPassword.match(/[A-Z]/) == null) {
                console.log(`${userPassword} did not contain any uppercase letters.`);
                // If the generated password does not contain any uppercase letters then reset the password to an empty string
                userPassword = '';
                // Then run the passwordCreation function again
                passwordCreation();
            }
        }

        // If the special characters checkbox is checked
        if (specialCheck.checked) {
            // Check and see if the password contains any uppercase letters
            if (userPassword.match(/[!@#$%^&*(),.?":{}|<>]/) == null) {
                console.log(`${userPassword} did not contain any special characters.`);
                // If the generated password does not contain any special characters then reset the password to an empty string
                userPassword = '';
                // Then run the passwordCreation function again
                passwordCreation();
            }
        }

        // If the numbers checkbox is checked
        if (numberCheck.checked) {
            // Check and see if the password contains any numbers
            if (userPassword.match(/[0-9]/) == null) {
                console.log(`${userPassword} did not contain any numbers.`);
                // If the generated password does not contain any numbers then reset the password to an empty string
                userPassword = '';
                // Then run the passwordCreation function again
                passwordCreation();
            }
        }
    }
}