'use strict';

// Notice how when setting ids for a div, global (window) stores a referenec to this div by its id
// console.log(moo);

// // document.getElementsByTagName is a Live Collection
// const divs = document.getElementsByTagName('div');

// // The contents of divs will always be updated when the query changes

// // const interval = new function() {
// //     this.act = function() {
// //         setTimeout(() => {
// //             const newDiv = document.createElement('div');
// //             newDiv.innerText = `Another one (${})`;
// //             document.body.appendChild(newDiv);
// //             console.log(divs);
// //             this.act();
// //         }, 1000);
// //     };
// // };

// // interval.act();

// setInterval(() => {
//     const newDiv = document.createElement('div');
//     newDiv.id = `another-one-${divs.length}`;
//     newDiv.innerText = `Another one (${divs.length})`;
//     document.body.appendChild(newDiv);
//     // Notice here, we aren't performing document.getELementsByTagName again, 
//     // just using the reference to divs. However the Array-like is keeping up to date with the new divs
//     console.log(divs);
// }, 1000);

const table = document.getElementById('age-table');
console.log(table);
console.log(table.getElementsByTagName('label'));// document.querySelectorAll('#age-table label')
console.log(table.getElementsByTagName('td')[0], table.querySelector('td'), table.rows[0].cells[0]);
console.log(document.querySelector('form[name="search"]'), Array.from(document.getElementsByTagName('form')).filter(form => form.getAttribute('name')==='search')[0]);

const form = document.querySelector('form[name="search"]');
console.log(form.querySelector('input'));

const inputs = form.querySelectorAll('input');
console.log(inputs[inputs.length - 1]);
