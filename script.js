'use strict';

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
console.log(todaysDate);

const initialize = () => {
    allErrorSpan.forEach(span => span.classList.add('hidden'));
    allInputs.forEach(
      input => (input.style.border = '1px solid hsl(0, 0%, 86%)')
    );
    allLabels.forEach(label => (label.style.color = 'hsl(0, 0%, 8%)'));
}

// Function that calculates the age difference
const calcAge = function () {

  // Getting the Date from the user
  const ageInput = new Date(
    yearInput.value,
    monthInput.value - 1,
    dayInput.value
  );

  const difference = todaysDate.getTime() - ageInput.getTime();
  const duration = new Date(difference);

  
//   const yearDifference = duration.getUTCFullYear() - 1970;
//   const monthDifference = duration.getUTCMonth();
//   const dayDifference = duration.getUTCDate() - 1;

//   document.querySelector('.years-span').textContent = yearDifference;
//   document.querySelector('.month-span').textContent = monthDifference;
//   document.querySelector('.days-span').textContent = dayDifference;

  dayInput.value = monthInput.value = yearInput.value = '';
};

// Implementing the submit functionality when input is empty.
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    dayInput.value === '' &&
    monthInput.value === '' &&
    yearInput.value === ''
  ) {
    allErrorSpan.forEach(span => span.classList.remove('hidden'));
    allInputs.forEach(
      input => (input.style.border = '1px solid hsl(0, 100%, 67%)')
    );
    allLabels.forEach(label => (label.style.color = 'hsl(0, 100%, 67%)'));
  } else {
    initialize();
    calcAge();
  }

  // if (yearInput.value > todaysDate.getFullYear()) {
  //     allErrorSpan[2].classList.remove('hidden');
  //     allErrorSpan[2].textContent = 'Must be in the past';
  // } else {
  //     allErrorSpan[2].classList.add('hidden')
  //     console.log(new Date (yearInput.value, monthInput.value - 1, dayInput.value));
  // }
});

// console.log(todaysDate.getTime());
