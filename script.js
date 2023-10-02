'use strict';
console.log('Hello Kareem');

// ELEMENTS
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const submitBtn = document.querySelector('#submit');

// Implementing the submit functionality when input is empty.

submitBtn.addEventListener('click', function(e){
    console.log('I was clicked', e.target);
})