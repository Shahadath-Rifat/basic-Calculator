'use strict';

/*
    JavaScript basic
    Shahadath Hussain Rifat

    Final Project
*/

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');
const equalButton = document.querySelector('.btn-equal');
const clearButton = document.querySelector('.btn-clear');

buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        display.value += this.value;
    });
});

equalButton.addEventListener('click', function() {
    const result = eval(display.value);
    display.value = result;
});

clearButton.addEventListener('click', function() {
    display.value = '';
});

