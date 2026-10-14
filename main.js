import { generatePassword } from "./password.js";

const generateButton = document.getElementById("generatePassword");
const outputPassword = document.getElementById("outputPassword");
const lengthValue = document.getElementById("lengthValue");
const passwordLength = document.getElementById("passwordLength");

generateButton.addEventListener("click", () => {
  outputPassword.textContent = generatePassword(Number(passwordLength.value));
});

passwordLength.addEventListener("input", () => {
  lengthValue.textContent = passwordLength.value;
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
document.body.classList.toggle("light");
});