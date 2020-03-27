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
        document.querySelector('#generateBtn').disabled = "";
    } else {
        document.querySelector('#generateBtn').disabled = "disabled";
    }
}
