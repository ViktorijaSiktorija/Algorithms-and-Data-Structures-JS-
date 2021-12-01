// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// First solution

function reverse(str) {
    return str
        .split("")
        .reverse()
        .join("");
}
console.log(reverse("Built in"));

// First sol. shorthand

const reversed = str => str.split("").reverse().join("")
console.log(reversed("Shorthand"))

// First sol. spread operator, bez split

const reversee = str => [...str].reverse().join("")
console.log(reversee("Spread operator"))

// Decrementing for loop

function decrForLoop(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]
    }
    return reversed
}
console.log(decrForLoop("Decrementing for loop"))

// Incrementing for loop

function incrForLoop (str) {
    let reversed = ""
    for (let i = 0; i <= str.length; i++) {
        reversed = str[i] + reversed 
    }
    return reversed
}
console.log(incrForLoop("Incrementing for loop"))

// Second; for of loop

// empty string called "reversed"
// for each character in provided string
// take the character and add it to the start of "reversed"
// return the var "reversed"

function reverse(str) {
    let reversed = "";

    for (let character of str){
        reversed = character + reversed;
    }
    return reversed;
}
console.log(reverse("For of loop"));

// Foreach higher order array method

function forEachLoop (str) {
    let reversed = ""
    str.split("").forEach(char => reversed = char + reversed)
    return reversed
}
console.log(forEachLoop("Foreach Loop"))

// Third; reduce helper higher order array method

function reverse(str) {
    return str.split("").reduce((reversed, char) => char + reversed,'')
}
console.log(reverse("Reduce helper"));

// 

function reverseString(str) {
    // check input
    if (!str || str.length < 2 || typeof str !='string') {
        return 'not good'
    }
    const reversed = []
    const totalItems = str.length - 1
    for (let i = totalItems; i >= 0; i--) {
        reversed.push(str[i])
    }
    return reversed.join('')
}
console.log(reverseString('Dugacka funkcija'))

module.exports = reverse;

