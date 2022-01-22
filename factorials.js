function factorial(num) {
    let product = 1
    for (let i=2; i <= num; i++) {
        product *= i
    }
    return product
}

factorial(1)

///////// Head-recursive

function factorialize(num) {
    if (num === 0) {
        return 1
    }

    return num * factorialize(num - 1)
}

factorialize(7)

//////// Tail-recursive

function factorialise(num, factorial = 1) {
    if (num === 0) {
        return factorial
    } else {
        return factorialise(num - 1, factorial * num)
    }
}

factorialise(4)