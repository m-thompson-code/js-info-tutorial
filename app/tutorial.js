'use strict';

// for (let elem of document.body.children) {
//     console.log(elem); // DIV, UL, DIV, SCRIPT
// }

// console.log('\n\n');

// for (let elem of document.body.childNodes) {
//     console.log(elem); // DIV, UL, DIV, SCRIPT
// }

console.log(document.body.children);
// console.log(document.body.childNodes);
console.log(document.body.childNodes[0].nextElementSibling);
console.log('%c     \n     ', 'background-color: teal');

console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.nextElementSibling);
console.log(document.body.firstElementChild.nextElementSibling.firstElementChild);
console.log('%c     \n     ', 'background-color: teal');

let elem = document.body;

// Logically should always be null since lastChild is any node
console.log(elem.lastChild.nextSibling);

// Doesn't have to be null since children is an array of ElementNodes and there can be other Nodes before the first one (such as a TextNode)
console.log(elem.children[0].previousSibling);

console.log('%c     \n     ', 'background-color: teal');

const table = document.body.getElementsByTagName('table')[0];

console.log(table);

const rows = table.rows;

// for (let i = 0; i < rows.length; i++) {
//     const row = rows[i];

//     console.log(row.cells[i]);
//     row.cells[i].style.backgroundColor = 'red';
// }

Array.from(rows).map((row, index) => {
    row.cells[index].style.backgroundColor = 'red';
});

