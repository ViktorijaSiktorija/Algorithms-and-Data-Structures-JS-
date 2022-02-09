// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// for loop, slice

function chunk(array, size){
    var tempArray = [];
    
    for (i = 0; i < array.length; i += size) {
        tempArray.push(array.slice(i, i + size));
    }

    return tempArray;
}

// var result = chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
// console.log(result);

// while loop i slice

function chunk(array, size){
    let chunked = [];
    let index = 0;

    // Loop while index is less than array length
    while (index < array.length) {
        // Slice out from the index to the index + chunk size
        // and push on to the chunked array
        chunked.push(array.slice(index, index + size));
        // Increment by chunk size 
        index += size;
    }
    return chunked;
}

// for of, poslednji element

function chunk(array, size){
    const chunked = [];

    for (let element of array){
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    return chunked;
}

// forEach

function chunk(array, size) {
    // Init chunked array
    const chunked = []

    // Loop trough array
    array.forEach(element => {
        const last = chunked[chunked.length -1]
        // Check if last and if last length is equal to the chunked length
        if (!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element)
        }
    })
    return chunked;
}

var result = chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
console.log(result);

//module.exports = chunk;
