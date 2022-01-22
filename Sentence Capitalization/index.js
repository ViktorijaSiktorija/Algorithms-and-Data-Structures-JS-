// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Prvo resenje for of 

function capitalizes(str) {
    words = [];
    
    for (let word of str.split(" ")){
       words.push(word[0].toUpperCase() + word.slice(1))
        
    }
    return words.join(" ");
}

console.log(capitalizes("cao ja sam vika"))

// For loop, substring

function capitalized(str) {
    let capi = str.toLowerCase().split(' ')

    for(let i = 0; i < capi.length; i++) {
        capi[i] = capi[i].substring(0, 1).toUpperCase() + capi[i].substring(1)
    }
    return capi.join(' ')
}

console.log(capitalized('I love javaScript'))

// Map, high order array function - sa substr

function capitalizeLetter(str) {
    return str
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substr(1))
        .join(' ')
}

console.log(capitalizeLetter('ja trenutno sedim'))

// RegEx

function regEx(str) {
    return str.replace(/\b[a-z]/gi, char => char.toUpperCase())
}

console.log(regEx('cao cao cao cao ojojoj'))

function capitalize(str) {
    let result = str[0].toUpperCase();
    
    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === " "){
            result += str[i].toUpperCase();
        } else {
            result += str[i]
        }
        
    }
    return result;
}
console.log(capitalize("cao ja sam vika"))


//module.exports = capitalize;
