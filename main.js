const generatePassword = document.getElementById("generatePassword");
const outputPassword = document.getElementById("outputPassword");
var value = 0;

generatePassword.addEventListener("click", () => {
    value++;
    outputPassword.textContent = value;
})