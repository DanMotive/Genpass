import { generatePassword } from "./password.js";

const generatePassword = document.getElementById("generatePassword");
const outputPassword = document.getElementById("outputPassword");
let value = 0;

generateButton.addEventListener("click", () => {
    outputPassword.textContent = generatePassword(12);
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light");
});