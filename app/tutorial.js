'use strict';
const cowSymbol = Symbol('cow');

const test = {
    moo: 'moo moo moo',
    [cowSymbol]: 'cow cow cow',
};

console.log(test);
console.log(test.moo);
console.log(test.cow);
console.log(test[cowSymbol]);

for (const key in test) {
    console.log(key, ',', test[key]);
}

const symbols = Object.getOwnPropertySymbols(test);

console.log(symbols);
console.log(test[symbols[0]]);
