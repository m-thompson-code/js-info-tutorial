'use strict';

function removeNotification(element) {
    element.remove();
}

function showNotification(options) {
    const top = options?.top || 0;
    const right = options?.right || 0;
    const html = options?.html || '';
    const className = options?.className || '';

    const div = document.createElement('div');

    div.style.marginTop = `${top || 0}px`;
    div.style.marginRight = `${right || 0}px`;

    if (html) {
        div.innerHTML = html;
    }

    div.className = `notification`;
    if (className) {
        div.classList.add(className);
    }

    document.body.append(div);

    setTimeout(() => {
        removeNotification(div);
    }, 1500);
}

function test() {
    // shows an element with the text "Hello" near the right-top of the window
    showNotification({
        top: 10, // 10px from the top of the window (by default 0px)
        right: 10, // 10px from the right edge of the window (by default 0px)
        html: "Hello!", // the HTML of notification
        className: "welcome" // an additional class for the div (optional)
    });
}

test();
