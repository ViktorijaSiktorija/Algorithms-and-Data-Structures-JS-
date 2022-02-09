// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// if % 3 === 0 if n % 5 === 0 

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0){ // i % 15 === 0
            console.log("fizzbuzz");
        } else if (i % 3 === 0){
            console.log("fizz");
        } else if (i % 5 === 0){
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
} 
fizzBuzz(31)

function fizBuz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log('fizbaz')
        } else if (i % 3 === 0) {
            console.log('fiz')
        } else if (i % 5 === 0) {
            console.log('baz')
        } else {
            console.log(i)
        }
    }
}

console.log(fizBuz(70))

module.exports = fizzBuzz;