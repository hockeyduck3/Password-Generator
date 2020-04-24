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
        generateBtn.disabled = '';
    } else {
        document.querySelector('#generateBtn').disabled = 'disabled';
    }
}

// Variable for the generate password button and copy button
const generateBtn = document.querySelector('#generateBtn');
const copyBtn = document.querySelector('#copyBtn');

// Variable for the password text area
const passwordText = document.querySelector('#placeHolder');

// Event listner for the generate password button
generateBtn.addEventListener('click', passwordMaker);


// Password Maker function
function passwordMaker() {
    let characters = '';

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

    let userPassword = '';

    passwordCreation();

    function passwordCreation() {
        // Loop through the length of the range and add it to the empty string of userPassword
        for (let i = 0; i < range.value; i++) {
            userPassword += (characters.charAt(Math.floor(Math.random() * characters.length)));
        }

        failedPassword = false;

        passwordChecker();
    }

    // This function is to check and make sure that the generated password meets the user's criteria
    function passwordChecker() {
        if (lowerCheck.checked) {
            // Check and see if the password contains any lowercase letters
            if (userPassword.match(/[a-z]/) === null) {
                console.log(`${userPassword} did not contain any lowercase letters.`);
               
                userPassword = '';

                passwordCreation();
            }
        }

        if (upperCheck.checked) {
            // Check and see if the password contains any uppercase letters
            if (userPassword.match(/[A-Z]/) === null) {
                console.log(`${userPassword} did not contain any uppercase letters.`);
                
                userPassword = '';

                passwordCreation();
            }
        }

        if (specialCheck.checked) {
            // Check and see if the password contains any uppercase letters
            if (userPassword.match(/[!@#$%^&*(),.?":{}|<>]/) === null) {
                console.log(`${userPassword} did not contain any special characters.`);

                userPassword = '';

                passwordCreation();
            }
        }


        if (numberCheck.checked) {
            // Check and see if the password contains any numbers
            if (userPassword.match(/[0-9]/) === null) {
                console.log(`${userPassword} did not contain any numbers.`);
                
                userPassword = '';

                passwordCreation();
            }
        }
    }

    // Present the generated password to the user
    passwordText.textContent = userPassword;

    // Enable the copy button
    copyBtn.disabled = '';

    // Event listener for the copy button
    copyBtn.addEventListener('click', function() {
        passwordText.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();

        $('.copied').slideDown('slow');
        
        // Wait 5 seconds
        setTimeout(function() {
            $('.copied').slideUp('slow');
        }, 5000)
    })
}