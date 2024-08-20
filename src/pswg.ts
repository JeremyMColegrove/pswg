import * as crypto from 'crypto';

// Define character sets
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()-_=+[]{}|;:,.<>?';    

interface PSWGOptions {
    length?: number;
    excludeSymbols?: boolean;
    excludeNumbers?: boolean;
    excludeUppercase?: boolean;
}

// Function to generate a secure random password
export default function pswg(options?: PSWGOptions): string {
    let ALL_CHARACTERS = LOWERCASE;
    if (!options?.excludeUppercase) {
        ALL_CHARACTERS += UPPERCASE;
    }
    if (!options?.excludeNumbers) {
        ALL_CHARACTERS += NUMBERS;
    }
    if (!options?.excludeSymbols) {
        ALL_CHARACTERS += SYMBOLS;
    }

    // Array to store the password characters
    let password = '';

    const length = options?.length || 18;
    // Convert each byte to a character from the defined character set
    for (let i = 0; i < length; i++) {
        // generate secure random number
        const randomIndex = crypto.randomInt(0, ALL_CHARACTERS.length);
        password += ALL_CHARACTERS[randomIndex];
    }

    return password;
}

