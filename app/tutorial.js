'use strict';

// let obj = {};

// console.log(obj);
// window.test_obj = obj;

// console.log(obj.__proto__ === Object.prototype); // true

// console.log(obj.toString === obj.__proto__.toString); //true
// console.log(obj.toString === Object.prototype.toString); //true

// function f() {
//     alert("Hello!");
// }

function f(a, b) {
    alert( a + b );
}

Function.prototype.defer = function(ms) {
    // const that = this;
    // return function(...args) {
    //     console.log(that);
    //     setTimeout(that.apply(that, args), ms);
    // };

    // const that = this;
    return (...args) => {
        console.log(this);
        setTimeout(this.apply(this, args), ms);
    };
}

// f.defer(1000); // shows "Hello!" after 1 second
f.defer(1000)(1, 2); // shows 3 after 1 second
