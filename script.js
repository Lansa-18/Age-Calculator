'use strict';
console.log('Hello Kareem');

// ELEMENTS
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const submitBtn = document.querySelector('#submit');
const allErrorSpan = document.querySelectorAll('.error-span');

// Implementing the submit functionality when input is empty.

submitBtn.addEventListener('click', function(e){
    if (dayInput.value === '' && monthInput.value === '' && yearInput.value === '') {
        allErrorSpan.forEach(span => span.classList.remove('hidden'));

    }
})