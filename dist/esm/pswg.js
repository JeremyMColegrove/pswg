import * as crypto from 'crypto';
// Define character sets
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()-_=+[]{}|;:,.<>?';
// Function to generate a secure random password
export default function pswg(options) {
    let ALL_CHARACTERS = LOWERCASE;
    if (!(options === null || options === void 0 ? void 0 : options.excludeUppercase)) {
        ALL_CHARACTERS += UPPERCASE;
    }
    if (!(options === null || options === void 0 ? void 0 : options.excludeNumbers)) {
        ALL_CHARACTERS += NUMBERS;
    }
    if (!(options === null || options === void 0 ? void 0 : options.excludeSymbols)) {
        ALL_CHARACTERS += SYMBOLS;
    }
    // Array to store the password characters
    let password = '';
    const length = (options === null || options === void 0 ? void 0 : options.length) || 18;
    // Convert each byte to a character from the defined character set
    for (let i = 0; i < length; i++) {
        // generate secure random number
        const randomIndex = crypto.randomInt(0, ALL_CHARACTERS.length);
        password += ALL_CHARACTERS[randomIndex];
    }
    return password;
}
