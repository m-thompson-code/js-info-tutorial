'use strict';

// const user = {};

// user.name = "John";
// user.surname = "Smith";

// debugger;

// user.name = "Pete";

// debugger;


// delete user["name"];

// debugger;

// console.log(user);



// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }

//     return true;
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;

// for (let key in salaries) {
//     sum += salaries[key] || 0;
// }

// console.log(sum);

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);
  
// // after the call
// menu = {
//     width: 400,
//     height: 600,
//     title:
 "My menu"
// };
console.log(menu);

function multiplyNumeric(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key] * 2;
        }
    }

    return obj;
}