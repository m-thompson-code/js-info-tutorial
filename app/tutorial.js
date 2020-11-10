'use strict';

// let animal = {
//     jumps: null
// };
// let rabbit = {
//     __proto__: animal,
//     jumps: true
// };

// alert( rabbit.jumps ); // ? (1) // true

// delete rabbit.jumps; // void

// alert( rabbit.jumps ); // ? (2) // null

// delete animal.jumps; // void

// alert( rabbit.jumps ); // ? (3) // undefined


// let head = {
//     glasses: 1
// };

// let table = {
//     pen: 3,
//     __proto__: head,
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table,
// };

// let pockets = {
//     money: 2000,
//     __proto__: bed,
// };

// console.log(pockets.glasses);
// console.log(head.glasses);

// alert( pockets.pen ); // 3
// alert( bed.glasses ); // 1
// alert( table.money ); // undefined


// let animal = {
//     eat() {
//         this.full = true;
//     }
//     // eat: () => {
//     //     console.log(this);// global is this when using array function
//     //     this.full = true;
//     // }
// };

// let rabbit = {
//     __proto__: animal
// };

// rabbit.eat();

// console.log(animal, rabbit);

let hamster = {
    stomach: [],

    init() {
        this.stomach = [];
    },
  
    eat(food) {
        if (!this.hasOwnProperty('stomach')) {
            this.stomach = [];
        }

        this.stomach.push(food);
    }
};

let speedy = {
    // stomach: [],
    __proto__: hamster
};

let lazy = {
    // stomach: [],
    __proto__: hamster
};

// speedy.init();
// lazy.init();

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple

console.log(hamster, speedy, lazy);
