'use strict';
console.log('Hello Kareem');

// ELEMENTS
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const submitBtn = document.querySelector('#submit');
const allErrorSpan = document.querySelectorAll('.error-span');
const allInputs = document.querySelectorAll('.input');
const allLabels = document.querySelectorAll('label');

// Today's Date
const todaysDate = new Date();
// Implementing the submit functionality when input is empty.

submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    if (dayInput.value === '' && monthInput.value === '' && yearInput.value === '') {
        allErrorSpan.forEach(span => span.classList.remove('hidden'));
        allInputs.forEach(input => input.style.border = '1px solid hsl(0, 100%, 67%)');
        allLabels.forEach(label => label.style.color = 'hsl(0, 100%, 67%)');
    } else {
        console.log(new Date (yearInput.value, monthInput.value - 1, dayInput.value));
    }

    if (yearInput.value > ) {
        
    }
})

console.log(todaysDate);
