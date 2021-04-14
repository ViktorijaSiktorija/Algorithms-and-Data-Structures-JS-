// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Resenje 1, moje resenje
function palindrome(str) {
    let reversed = str.split("").reverse().join("")
    if (reversed === str) {
        console.log("true")
        return true
        
    }
    else {
        console.log("false")
        return false
    }
}

console.log(palindrome("baab"))

// Resenje 2, njegovo, truthy i falsy

function palindrome(str) {
    const reversed = str.split("").reverse().join("")
    
    return str === reversed;
    // ako jeste jednako onda je truth,ako ne onda je false
}


console.log(palindrome("baab"))

// Resenje 3, sa every; lose je jer radi duplo, uporedjuje svaki element sa svakim elementom areja

function palindrome(str) {
    return str
    .split("")
    .every((char,i)=>{  return char === str[str.lenght -i -1];  })
}


console.log(palindrome("baab"))

module.exports = palindrome;
