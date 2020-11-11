'use strict';

function hideText() {
    document.getElementById('text')?.remove();
}

const div = document.querySelector('div');
const button = document.querySelector('button');

div.addEventListener("click", (event) => {
    console.log(event.target, event.currentTarget);
    console.log("1");
});
button.addEventListener("click", (event) => {
    console.log(event.target, event.currentTarget);
    console.log("1");
});

div.addEventListener("click", (event) => {
    console.log(event.target, event.currentTarget);
    console.log("2");
});
button.addEventListener("click", (event) => {
    console.log(event.target, event.currentTarget);
    console.log("2");
    
    // event.stopImmediatePropagation();
    event.stopPropagation();
});
