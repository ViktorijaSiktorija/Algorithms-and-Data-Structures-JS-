// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
    const obj = {};
    let maxNum = 0;
    let maxChar = "";

    // oba rade: 

    // str.split('').forEach(char => {
    //     if (obj[char]) {
    //         obj[char]++
    //     } else {
    //         obj[char] = 1
    //     }
    // })

    for (let char of str) {
        obj[char] = obj[char] + 1 || 1;
    }

    for (let char in obj) {
        if (obj[char] > maxNum) {
            maxNum = obj[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(maxChar("sussssssssssssssssssssbiduiiiiiiiiii"))

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
