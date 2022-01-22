function longest(sen) {
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)

    const sorted = wordArr.sort((a,b) => b.length - a.length)

    const longestWordArray = sorted.filter(word => word.length === sorted[0].length)

    if (longestWordArray === 1) {
        return longestWordArray[0]
    } else {
        return longestWordArray
    }
}

longest('viktorija siktorija liki siki')

function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

////

function findLongestWordLength(s) {
  return s.split(' ')
    .reduce(function(longest, word) {
      return Math.max(longest, word.length)
    }, 0);
}

////

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

////////

function findLongestWordLength(str) {
  // split the string into individual words
  const words = str.split(" ");

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

findLongestWordLength("The quick brown fox jumped over the lazy dog");