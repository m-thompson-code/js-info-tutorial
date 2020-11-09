// 'use strict';

// // Create a script that prompts the visitor to enter two numbers
// // and then shows their sum.
// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(
//     +prompt('a?', ''),
//     +prompt('b?', ''),
// ));

// console.log(6.35.toFixed(1));
// console.log(Math.round(6.35 * 10) / 10);
// const n = 6.35;
// console.log(n.toFixed(20));
// console.log((n * 10).toFixed(20));
// console.log(Math.round(n * 10) / 10);

console.log(typeof Infinity);
console.log(typeof NaN);

let i = 0;
let j = 0;
while (i != 10) {
  i += 0.2;
  console.log(i);
  j++;
  if (j > 50) {
      break;
  }
}