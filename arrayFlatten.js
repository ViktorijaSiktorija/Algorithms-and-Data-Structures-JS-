// Take an array of arrays and flatten to a single array


// 1 reduce

function flattenArray(arrays) {
    return arrays.reduce((a, b) => a.concat(b))
}

// 2 apply

function flattenArray(arrays) {
    return [].concat.apply([], arrays)
}

// 3 spread operator

function flattenArray(arrays) {
    return [].concat(...arrays)
}

console.log(flattenArray([[1, 2], [3,4], [5,6], [7]]))