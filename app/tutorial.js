'use strict';

// const sum = [1,2,3,4,5].reduce((acc, current) => {
//     return acc + current;
// });

// console.log(sum);

// function camelize(str) {
//     const parts = str.split('-');

//     let camelCaseStr = "";

//     let firstPart = true;

//     parts.forEach(part => {
//         if (firstPart) {
//             camelCaseStr += part;
//             firstPart = false;
//             return;
//         }

//         camelCaseStr += part.charAt(0).toUpperCase() + part.slice(1);
//     });

//     return camelCaseStr;
// }

// function camelize(str) {
//     let first = true;
//     const word= str.split('-').map(part => {
//         if (first) {
//             first = false;
//             return part;
//         }

//         return part.charAt(0).toUpperCase() + part.slice(1);
//     }).join('');

//     console.log(word);
//     return word;
// }

// function camelize(str) {
//     const word= str.split('-').reduce((camelCaseStr, part) => {
//         return camelCaseStr + part.charAt(0).toUpperCase() + part.slice(1);
//     });

//     console.log(word);
//     return word;
// }

// console.log(camelize("background-color") == 'backgroundColor');
// console.log(camelize("list-style-image") == 'listStyleImage');
// console.log(camelize("-webkit-transition") == 'WebkitTransition');

// function filterRange(array, min, max) {
//     return array.filter(part => {
//         if (part >= min && part <= max) {
//             return true;
//         }
//     });
// }

// function filterRange(array, min, max) {
//     return array.filter(part => part >= min && part <= max);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

// function filterRangeInPlace(arr, a, b) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         const ele = arr[i];

//         if (ele < a || ele > b) {
//             arr.splice(i, 1);
//         }
//     }
// }

// // let arr = [5, 3, 8, 1];
// let arr = [5, 6, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]



// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);
// alert( arr ); // 8, 5, 2, 1, -10

// function copySorted(array) {
//     return array.slice(0).sort((a, b) => a.localeCompare(b));
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

// function Calculator() {
//     this.methods = {},
//     this.calculate = function(str) {
//         const parts = str.split(' ');

//         const methodName = parts[1];

//         if (!this.methods[methodName]) {
//             throw new Error("Unexpected method name called");
//         }

//         const arg1 = +parts[0];
//         const arg2 = +parts[2];

//         return this.methods[methodName](arg1, arg2);
//         // if (parts[1] === '+') {
//         //     return +parts[0] + +parts[2];
//         // } else {
//         //     return +parts[0] - +parts[2];
//         // }
//     };
//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     };
//     this.addMethod("+", function(a, b) {
//         return a + b;
//     });
//     this.addMethod("-", function(a, b) {
//         return a - b;
//     });
// }

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(a => a.name);

// alert( names ); // John, Pete, Mary


// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(a => {
//     return {
//         fullName: `${a.name} ${a.surname}`,
//         id: a.id,
//     };
// });

// let usersMapped = users.map(a => ({
//     fullName: `${a.name} ${a.surname}`,
//     id: a.id,
// }));

// let usersMapped = users.map(a => (
//     {
//         fullName: `${a.name} ${a.surname}`,
//         id: a.id,
//     }
// ));

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

// function sortByAge(array) {
//     array.sort((a, b) => {
//         // return a.name.localeCompare(b.name);
//         return a.age - b.age;
//     });
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete



// function shuffle(array) {
//     // Readable code and simple (but distribution is dependent on engine and odds aren't fair)
//     // array.sort((a, b) => {
//     //     return Math.floor(Math.random() * 2 - 1);
//     // });

//     // // Benchmark: 2900
//     // for (let i = 0; i < array.length; i++) {
//     //     const j = i + Math.floor(Math.random() * (array.length - i));

//     // Benchmark: 2800
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));

//         // let ele_i = array[i];
//         // let ele_j = array[j];

//         // array[i] = ele_j;
//         // array[j] = ele_i;

//         [array[i], array[j]] = [array[j], array[i]]
//     }

//     return array;
// }

// let arr = [1, 2, 3];

// console.log(shuffle(arr));
// // arr = [3, 2, 1]

// console.log(shuffle(arr));
// // arr = [2, 1, 3]

// console.log(shuffle(arr));
// // arr = [3, 1, 2]
// // ...


// // counts of appearances for all possible permutations
// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
// };

// let then = Date.now();
  
// for (let i = 0; i < 10000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
// }
  
// // show counts of all possible permutations
// for (let key in count) {
//     console.log(`${key}: ${count[key]}`);
// }

// console.log(Date.now() - then);



// function getAverageAge(array) {
//     if (!array?.length) {
//         return 0;
//     }

//     return array.reduce((sum, user) => sum + user.age, 0) / array.length;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];
// // let arr = [ ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function groupById(array) {

    // Misunderstood the instructions lol
    // return array.reduce((groupedObj, next) => {
    //     for (let key in next) {
    //         (groupedObj[key] = groupedObj[key] || []).push(next[key]); 
    //     }

    //     return groupedObj;
    // }, {});

    return array.reduce((groupedObj, next) => {
        groupedObj[next.id] = next;

        return groupedObj;
    }, {});
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById);

/*
// after the call we should have:

usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

