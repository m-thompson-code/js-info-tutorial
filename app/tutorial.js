'use strict';

// // function makeUser() {
// //     return {
// //         name: "John",
// //         ref: this
// //     };
// // }

// // let user = makeUser();

// // alert( user.ref.name ); // What's the result?
// // // John - Incorrect, because this is called as a function and not as a method with "dot" syntax

// function makeUser() {
//     return {
//       name: "John",
//         ref() {
//             return this;
//         }
//     };
// }

// let user = makeUser();

// alert( user.ref().name ); // John

// const calculator = {
//     read() {
//         const _a = +prompt('a?', '');
//         const _b = +prompt('b?', '');

//         this._read(_a, _b);
//     },
//     _read(a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {// Should be named multiply
//         return this.a * this.b;
//     },
// };

// calculator.read();

// console.log(calculator.sum());
// console.log(calculator.mul());

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    },
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

ladder.up().up().down().showStep(); // 1
