'use strict';

// console.log('a'.localeCompare('b'));
// console.log('b'.localeCompare('a'));
// console.log('a'.localeCompare('a'));

// console.log('a'.localeCompare('B'));
// console.log('b'.localeCompare('A'));
// console.log('a'.localeCompare('A'));

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1, str.length);
}

console.log(ucFirst("john") == "John");