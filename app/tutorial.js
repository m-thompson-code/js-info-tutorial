'use strict';

// const test = new function MooCow() {
const test = {
    name: 'moo cow',
    // this.name = 'moo cow';

    [Symbol.toPrimitive](hint) {
        console.log(hint);
        return hint === 'string' ? this._toString() : this._valueOf();
    },

    _toString() {
        return this.name;
    },

    toString() {
        return this[Symbol.toPrimitive]('string');
    },

    _valueOf() {
        return 9;
    },

    valueOf() {
        return this[Symbol.toPrimitive]('number');
    },
};

console.log(test);
console.log(test + " str test");
console.log(test + 4);
console.log("str test " + test);
console.log(4 + test);
console.log(test * 2);
console.log(2 * test);
console.log(String(test));
console.log(Number(test));
console.log(Boolean(test));