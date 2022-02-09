// for loop
function findLongestWordLength(sen) {
  let words = sen.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

console.log(findLongestWordLength('ja sam programerka'))

// Reduce, Math max

function findLongestWordLengths(sen) {
  return sen
    .split(' ')
    .reduce((longest, word) => Math.max(longest, word.length), 0)
}

console.log(findLongestWordLengths('koko j e mala kuca'))

// Map, spread operator, Math max

function longestWordLength(sen) {
  return Math.max(...sen.split(" ").map(word => word.length));
}

console.log(longestWordLength('u maloj kuci zivim ja'))

// Recursion, Math.max

function wordLength(sen) {
  // split the string into individual words
  const words = sen.split(" ");

  // words only has 1 element left that is the longest element
  if (words.length == 1) {
    return words[0].length;
  }

  // if words has multiple elements, remove the first element
  // and recursively call the function
  return Math.max(
    words[0].length,
    findLongestWordLength(words.slice(1).join(" "))
  );
}

console.log(wordLength("The quick brown fox jumped over the lazy dog"))