'use strict';

// let text = '<b>text</b>';

// elem1.append(document.createTextNode(text));
// elem2.innerHTML = text;
// elem3.textContent = text;

// function clear(elem) {
//     console.log(elem);
//     elem.innerHTML = "";
//     while (elem.firstChild) {
//         elem.firstChild.remove();
//     }
// }

// const elem = document.querySelector('ol');

// elem.remove()

// clear(elem); // clears the list

// alert(table); // the table, as it should be

// table.remove();
// // why there's still aaa in the document?

// Ask a user about its content using prompt.
// Create the <li> with it and add it to <ul>.
// Continue until the user cancels the input (by pressing Esc or CANCEL in prompt).

// let content = "";
// while(content = prompt("Add content", "")) {
//     if (content === 'CANCEL') {
//         break;
//     }

//     const li = document.createElement('li');
//     li.textContent = content;

//     document.querySelector('ul').append(li);
// }

// let data = {
//     "Fish": {
//         "trout": {},
//         "salmon": {}
//     },
  
//     "Tree": {
//         "Huge": {
//             "sequoia": {},
//             "oak": {}
//         },
//         "Flowering": {
//             "apple tree": {},
//             "magnolia": {}
//         }
//     }
// };

// let container = document.getElementById('container');
// createTree(container, data); // creates the tree in the container

// function createTree(container, data) {
//     if (!Object.keys(data).length) {
//         return;
//     }
    
//     const ul = document.createElement("ul");
//     container.append(ul);

//     for (let key in data) {
//         const li = document.createElement("li");

//         li.textContent = key;
//         ul.append(li);

//         createTree(ul, data[key]);
//     }
// }

function addNumberOfDescendants(ul) {
    const lis = Array.from(ul.querySelectorAll('li'));

    lis.forEach(li => {
        const descendants = li.querySelectorAll('li').length;

        if (!descendants) {
            return;
        }

        li.firstChild.textContent = li.firstChild.data + ` [${descendants}]`;
    });
}
const ul = document.querySelector('ul');

addNumberOfDescendants(ul);