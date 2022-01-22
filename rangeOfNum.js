function countdown(n){
    if (n < 1) {
      return []
    } else {
      const countArray = countdown(n - 1)
      countArray.unshift(n)
      return countArray;
    }
  }
  
  countdown(5)
  
  ///////
  
  function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum]
    
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1)
      numbers.push(endNum)
      return numbers
    }
    
  };
  
  rangeOfNumbers(1,5)
  
  ///////////
  
  function rangeOfNumbers(startNum, endNum) {
      return startNum === endNum
          ? [startNum]
          : rangeOfNumbers(startNum, endNum - 1).concat(endNum)
  }
  
  ///////////
  
  function rangeOfNumbers(startNum, endNum) {
      return startNum === endNum
          ? [startNum]
          : [...rangeOfNumbers(startNum, endNum - 1), endNum]
  }