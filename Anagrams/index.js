// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// regex (/[^\w]/g,""), toLowercase,
//char maps,  count keys in 1 object/count lenth of chars

// Moje resenje, samo uporedila duzine stringova i regex
// function anagrams(stringA, stringB) {
        
//         stringA = stringA.replace(/[^\w]/g,"").toLowerCase();
//         stringB = stringB.replace(/[^\w]/g,"").toLowerCase();

//         if (stringA.length === stringB.length) {
//             console.log("true")
//         } else console.log("false")

//     return stringA,stringB;
// }

// console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))

// char map, helper function, compare keys
function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    }

    for (let char in aCharMap){
        if (aCharMap[char] !== bCharMap[char]){
            return false;
        }
    }
    return true;
}

function buildCharMap(str){
    const charMap = {};
    for (let char of str.replace(/[^\w]/g,"").toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))

// sa arejs, sort() -> moze sa brojevima i slovima
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
    return str.replace(/[^\w]/g,"").toLowerCase().split("").sort().join("");
}

console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))

module.exports = anagrams;
