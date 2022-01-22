function repeat(str, num) {
    let accum = ""

    for (let i = 0; i < num; i++) {
        accum += str
    }
    return accum
}

repeat("vika",66)

/////////

function repeatStr(str, num) {
    if (num < 1) {
        return ""
    } else {
        return str + repeatStr(str, num - 1)
    }
}

repeatStr('Koko', 10)


/////////

function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}