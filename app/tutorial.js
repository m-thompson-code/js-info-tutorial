'use strict';

function User(name) {
    this.name = name;
}
// User.prototype = {
//     moo: 'cow',
//     // constructor: 'moo',
// };
console.log(User);

let user = new User('John');
let user2 = new user.constructor('Pete');

console.log( user2 ); // Pete (worked!)
console.log( user2.name ); // Pete (worked!)