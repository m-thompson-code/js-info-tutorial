'use strict';

let arrayLike = { // has indexes and length => array-like
    0: "Hello",
    1: "World",
    length: 2,
    [Symbol.iterator]: function() {
        return {
            current: 0,
            last: this.length,
            arrayLike: this,
            next() {
                if (this.current < this.last) {
                    return {
                        done: false,
                        value: arrayLike[this.current++],
                    };
                } else {
                    return {
                        done: true,
                    };
                }
            },
        }
    }
};
  
// Error (no Symbol.iterator)
for (let item of arrayLike) {
    console.log(item);
}
