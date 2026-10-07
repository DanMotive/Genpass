const generatePassword = document.getElementById("generatePassword");
const outputPassword = document.getElementById("outputPassword");
var value = 0;

generatePassword.addEventListener("click", () => {
    value++;
    outputPassword.textContent = value;
})

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light");
});