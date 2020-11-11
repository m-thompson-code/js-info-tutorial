'use strict';

// let dictionary = Object.create(null, {
//     toString: {
//         // value: function() {
//         //     let str = '';

//         //     for (let key in dictionary) {
//         //         if (str) {
//         //             str += ',';
//         //         }
//         //         str += key;
//         //     }

//         //     return str;
//         // },
//         value: function() {
//             return Object.keys(this).join(',');
//         },
//     }
// });

// // add some data
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// // only apple and __proto__ are in the loop
// for(let key in dictionary) {
//   alert(key); // "apple", then "__proto__"
// }

// // your toString in action
// alert(dictionary); // "apple,__proto__"

// console.log(dictionary);

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    alert(this.name);
};
  
let rabbit = new Rabbit("Rabbit");


// rabbit.sayHi();// "Rabbit" // this is rabbit
// Rabbit.prototype.sayHi(); // undefined (this refers to no one in the Rabbit.prototype.sayHi)
// Object.getPrototypeOf(rabbit).sayHi(); // Same as above
// rabbit.__proto__.sayHi(); // rabbit.__proto__ is Rabbit,

console.log(Rabbit.prototype.constructor == Rabbit);
console.log(Rabbit.prototype == Object.getPrototypeOf(rabbit));
console.log(rabbit.__proto__ == Rabbit.prototype);
