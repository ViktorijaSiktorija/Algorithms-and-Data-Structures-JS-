// Return the longest word of the string
// If more than one longest word, put into array
// ('hello my name is brad') === 'hello' , return string
// ('hello there, my name is brad') === ['hello', 'there'], return array

function longestWord(sen){
    // get rid of punctuation match method
    // Create filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    // Sort by length
    const sorted = wordArr.sort((a, b) => b.length - a.length)
    
    // If multiple words, put into array
    // filter, high order array function
    const longestWordArray = sorted.filter(word => word.length === sorted[0].length)
    
    // Check if more than one array val
    if (longestWordArray.length === 1) {
        return longestWordArray[0]
    } else {
        return longestWordArray;
    }
}

console.log(longestWord('cao ja sam viktorija'))