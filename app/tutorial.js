'use strict';

const inputs = Array.from(document.getElementsByTagName('input'));

inputs.forEach(input => {
    document.addEventListener('input', oninput);
});

const select = document.querySelector('select');

document.addEventListener('change', oninput);

function oninput() {
    const initial = getInitial();
    const years = getYears();
    const interest = getInterest();

    const becomes = getBecomes(initial, interest, years);

    updateBarsUI(initial, becomes);
}

function _getForm() {
    return document.forms['despoit-calculator'];
}

function getInitial() {
    const form = _getForm();

    return +form.elements.initial.value || 0;
}

function getYears() {
    const form = _getForm();

    const months = form.elements.months.value;
    const years = months / 12;

    return +years || 0;
}

function getInterest() {
    const form = _getForm();

    return +form.elements.interest.value / 100 || 0;
}

function getBecomes(initial, interest, years) {
    // initial: the initial money sum
    // interest: e.g. 0.05 means 5% per year
    // years: how many years to wait
    return Math.round(initial * (1 + interest * years));
}

function updateBarsUI(initial, becomes) {
    console.log(initial, becomes);
    document.getElementById('initial-label').textContent = initial;
    document.getElementById('becomes-label').textContent = becomes;
    document.getElementById('initial-bar').style.height = `${100 * initial / becomes}%`;
}
