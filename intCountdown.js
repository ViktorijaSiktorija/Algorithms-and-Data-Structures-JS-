// For
function countdown(n) {
  let numArray = []

  if (n < 1) {
      return []
  }
  for (let i = 1; i <= n; i++) {
      numArray.unshift(i)
  }
  return numArray 
}

countdown(22)

// Recursion
function countdown(n) {
  if (n < 1) {
    return []
  } else {
      const countArray = countdown(n - 1)
      countArray.unshift(n)
      return countArray;
  }
}

console.log(countdown(0))