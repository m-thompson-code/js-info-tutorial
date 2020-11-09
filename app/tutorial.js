'use strict';

// function User(name) {
//     // this = {};  (implicitly)
  
//     // add properties to this
//     this.name = name;
//     this.isAdmin = false;
  
//     // return this;  (implicitly)
// }

// const test = new User('Mark');
// console.log(test);

// let test2;

// {
//     function User(name) {
//         // this = {};  (implicitly)
      
//         // add properties to this
//         this.name = name;
//         this.isAdmin = false;
      
//         // return this;  (implicitly)

//         this.other = "Some other User constructor";
//     }

//     test2 = new User('Mark 2');
// }

// console.log(test2);

// const moo = {
//     cow() {
//         return this.text;
//     },
//     text: 'I am cow',
// };

// console.log(moo.cow());




// const someObject = {
//     name: "some object",
// };

// function A() { return someObject }
// function B() { return someObject }

// let a = new A;
// let b = new B;

// alert( a == b ); // true

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('a?', '');
//         this.b = +prompt('b?', '');
//     };

//     this.sum = function() {
//         return this.a + this.b;
//     };

//     this.mul = function() {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("new value?", "");
    };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
