// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// First solution, tako uradila

// function reverse(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverse("hello"));

// Second; for of loop

// empty string called "reversed"
// for each character in provided string
//  take the character and add it to the start of "reversed"
// return the var "reversed"

// function reverse(str) {
//     let reversed = "";

//     for (let character of str){
//         reversed = character + reversed;
//     }
//     return reversed;
// }
// console.log(reverse("hello"));

// Third; reduce helper

function reverse(str) {
    return str.split("").reduce((reversed, character)=>
    character + reversed,'');
}
console.log(reverse("hello"));

module.exports = reverse;
