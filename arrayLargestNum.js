// Map and Reduce

function largestOfFour(arr) {
    return arr.map(function(group) {
      return group.reduce(function(prev, current) {
        return current > prev ? current : prev;
      });
    });
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

// Shorthand

function largest(arr) {
  return arr.map(group => group.reduce((prev, curr) => curr > prev ? curr : prev))
}

console.log(largest([[4, 5, 1, 3, 55], [13, 27, 18, 26, 99], [32, 35, 37], [1000, 1001, 857, 1]]))

// function largest(arr) {
//     let results = []

//     for(let i = 0; i < arr.length; i++) {
//         let largestNumber = arr[i][0]
//         for (let j = 1; i < arr[i].length; j++) {
//             if (arr[i][j] > largestNumber) {
//                 largestNumber = arr[i][j]
//             }
//         }
//         results[i] = largestNumber
//     }
//     return results
// }

// console.log(largest([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

