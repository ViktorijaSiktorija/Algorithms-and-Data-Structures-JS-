// For loop

function repeat(str, num) {
    let accum = ""

    for (let i = 0; i < num; i++) {
        accum += str
    }
    return accum
}

console.log(repeat("vika",66))

// Recursion

function repeatStr(str, num) {
    if (num < 1) {
        return ""
    } else {
        return str + repeatStr(str, num - 1)
    }
}

console.log(repeatStr('Koko', 10))


// Recursion shorthand

function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

console.log(repeatStringNumTimes('stolica', 20))