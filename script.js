// For the length of the password
const range = document.querySelector('.custom-range');
const lengthNumber = document.querySelector('#number');

range.oninput = function() {
    lengthNumber.textContent = range.value;
}