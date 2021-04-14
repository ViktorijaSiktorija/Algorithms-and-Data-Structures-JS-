// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// First solution, for, linear runtime
// Prvo resenje, for, linear runtime
function fib(n) {
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= n; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return n1;
}
console.log(fib(9));

// Second solution, recursion
function fib(n) {
    //if (num <= 1) return 1;
    if (n < 2) return n;

    return fib(n - 1) + fib(n - 2);
}
console.log(fib(9));

// Third solution, memoization

function memoize(fn){
    const cache = {};
    return function(...args){
        if (cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

function fib(n){
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);
console.log(fib(9));

module.exports = fib;
