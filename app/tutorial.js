'use strict';

function replaceMiddleValueOf(array, value) {
    // On even lengths, choose the bigger index for middle
    array[Math.floor((array.length) / 2)] = value;

    // // On even lengths, choose the smaller index for middle
    // array[Math.floor((array.length - 1) / 2)] = value;
}

/*

Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.

*/

// const styles  = ["Jazz", "Blues"];
// debugger;

// styles.push("Rock-n-Roll");
// debugger;

// replaceMiddleValueOf(styles, "Classics");
// debugger;

// const first = styles.shift()
// console.log(first);
// debugger;


// styles.unshift("Rap", "Reggae");
// debugger;

// console.log(styles);

// for (let i = 0; i < 100; i++) {
//     const array = [];
//     for (let j = 0; j < i; j++) {
//         array.push(j);
//     }

//     replaceMiddleValueOf(array, 'middle');
//     console.log(array);
// }

// let arr = ["a", "b"];

// arr.push(function() {
//     console.log(this);
//     alert( this );
// });

// arr[2](); // ?

// console.log(typeof NaN);
// console.log(isFinite(NaN));
// console.log(isNaN(NaN));

// console.log(typeof Infinity);
// console.log(isFinite(Infinity));
// console.log(isNaN(Infinity));

// console.log(typeof "moo");
// console.log(isFinite("moo"));
// console.log(isNaN("moo"));

// console.log(typeof 200);
// console.log(isFinite(200));
// console.log(isNaN(200));

// console.log(typeof "");
// console.log(isFinite(""));
// console.log(isNaN(""));

// console.log(typeof undefined);
// console.log(isFinite(undefined));
// console.log(isNaN(undefined));

// console.log(typeof null);
// console.log(isFinite(null));
// console.log(isNaN(null));


// function getSumOfArray(numbers) {
//     let sum = 0;

//     for (const number of numbers) {
//         sum += number;
//     }

//     return sum;
// }

// // Benchmark: 33181
// function getMaxSubSum(numbers) {
//     const sums = [];

//     for (let i = 0; i < numbers.length; i++) {

//         for (let j = i; j < numbers.length; j++) {
//             sums.push( getSumOfArray(numbers.slice(i, j + 1)) );
//         }
//     }

//     let largestSum = 0;
//     for (const sum of sums) {
//         if (sum > largestSum) {
//             largestSum = sum;
//         }
//     }

//     // console.log(largestSum);
//     return largestSum;
// }


// // Benchmark: 1069
// function getMaxSubSum(numbers) {
//     let largestSum = 0;

//     for (let i = 0; i < numbers.length; i++) {

//         let sum = 0;
//         for (let j = i; j < numbers.length; j++) {
//             sum += numbers[j];

//             largestSum = Math.max(sum, largestSum);
//         }
//     }

//     return largestSum;
// }


// // Benchmark: 442
// function getMaxSubSum(numbers) {
//     let largestSum = 0;

//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];

//         // If the sum becomes negative, 
//         // we are better off starting a new sum at this point
//         if (sum < 0) {
//             sum = 0;
//             continue;
//         }

//         largestSum = Math.max(sum, largestSum);
//     }

//     // console.log(largestSum);
//     return largestSum;
// }

// Benchmark: 
function getMaxSubSum(numbers=[], startingIndex=0) {
    let largestSum = 0;

    let sum = 0;

    for (let i = startingIndex; i < numbers.length; i++) {
        sum += numbers[i];

        // If the sum becomes negative, 
        // we are better off starting a new sum at this point skipping this number
        if (sum < 0) {
            return Math.max(largestSum, getMaxSubSum(numbers, i + 1));
        }

        largestSum = Math.max(sum, largestSum);
    }

    return largestSum;
}

let then = Date.now();

for (let i = 0; i < 10000000; i++) {
    getMaxSubSum([-1, 2, 3, -9]);// == 5 (the sum of highlighted items)
    getMaxSubSum([2, -1, 2, 3, -9]);// == 6
    getMaxSubSum([-1, 2, 3, -9, 11]);// == 11
    getMaxSubSum([-2, -1, 1, 2]);// == 3
    getMaxSubSum([100, -9, 2, -3, 5]);// == 100
    getMaxSubSum([1, 2, 3]);// == 6 (take all)    
}

console.log(Date.now() - then);
