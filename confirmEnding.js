function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
  
    let re = new RegExp(target + "$", "i");
  
    return re.test(str);
  }
  
  console.log(confirmEnding("Bastian", "n"));
  
  //If a negative number is provided as the first parameter to slice() , the offset is taken backwards from the end of the string.
  
  function confirmEnding(str, target) {
    return str.slice(-target.length) === target
  }
  
  confirmEnding("Bastian", "n");