const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

lengthValue.textContent = lengthSlider.value;

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

const passwordBox = document.getElementById("password");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    const length = Number(lengthSlider.value);
    let password = "";

    //these four lines are done for the guarantee that the password contains at least one uppercase letter, lowercase letter, digit, and symbol.
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    //Fisher-Yates shuffle
    //It fixes predictability of character positions.
    //After the Fisher–Yates shuffle: 
    // •Character types are randomly distributed
    // •Any character type can appear at any index
    // •All permutations of the password are equally likely

    let chars = password.split(""); //Strings in JS are immutable, which means you cannot swap characters inside them. This splits the string at every character and returns an array of single-character strings.
    //Example: "Aq7!".split("") --> ["A", "q", "7", "!"]
    //This array can now be modified.

    for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    password = chars.join("");
    passwordBox.value = password;

}

function copyPassword() {
    navigator.clipboard.writeText(passwordBox.value);
}


