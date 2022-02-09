// Recursion

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum]
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1)
    numbers.push(endNum)
    return numbers
  }
};

console.log(rangeOfNumbers(1, 9))

// Recursion, concat

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum ? [startNum] : rangeOfNumbers(startNum, endNum - 1).concat(endNum)
}

console.log(rangeOfNumbers(2, 9))

// Recursion, spread operator

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum ? [startNum] : [...rangeOfNumbers(startNum, endNum - 1), endNum]
}

console.log(rangeOfNumbers(1, 99))