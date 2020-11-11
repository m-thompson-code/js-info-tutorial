'use strict';

// const element = document.querySelector('[data-widget-name]');
const element = document.querySelector('[data-widget-name="menu"]');

console.log(element);

const widgetName = element.dataset.widgetName;

console.log(widgetName);

// setting style for a single link
const links = Array.from(document.querySelectorAll('a'));

links.forEach(link => {
    console.log(link.href);
    console.log(link.getAttribute('href'));
    const href = link.getAttribute('href');

    if (!href) {
        return;
    }

    if (href.startsWith('http://internal.com')) {
        return;
    }

    if (href.includes('://')) {
        link.style.color = 'orange'
    }
});
