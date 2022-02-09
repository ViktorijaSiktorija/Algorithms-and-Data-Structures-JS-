// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// for of

function maxChar(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = "";

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(maxChar("sussssssssssssssssssssbiduiiiiiiiiii"))

// forEach

function maxCharNum(str) {
    const charMap = {}
    let maxNum = 0
    let maxChar = ''

    str.split('').forEach(char => {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    })

    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char]
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(maxCharNum('javaaaaascript'))

module.exports = maxChar;
