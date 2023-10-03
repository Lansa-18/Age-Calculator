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
const endDate = new Date();
console.log(endDate);

// const startDate = new Date(
//   yearInput.value,
//   monthInput.value - 1,
//   dayInput.value
// );
// console.log(startDate);

const initialize = () => {
  allErrorSpan.forEach(span => span.classList.add('hidden'));
  allInputs.forEach(
    input => (input.style.border = '1px solid hsl(0, 0%, 86%)')
  );
  allLabels.forEach(label => (label.style.color = 'hsl(0, 0%, 8%)'));
};

let yearDifference;
let monthDifference;
let dayDifference;

// Function that calculates the age difference
const calcAge = function () {
  //   Getting the Date from the user
  const startDate = new Date(
    yearInput.value,
    monthInput.value - 1,
    dayInput.value
  );

  // Calculating the years, months and days
  yearDifference = endDate.getUTCFullYear() - startDate.getUTCFullYear();
  monthDifference = endDate.getUTCMonth() - startDate.getUTCMonth();
  dayDifference = endDate.getUTCDate() - startDate.getUTCDate();

  // Adjusting for negative values (when day or month is negative)
  if (dayDifference < 0) {
    monthDifference--; // Decrementing the month when the days are negative
    const lastDayOfTheMonth = new Date(
      endDate.getUTCFullYear(),
      endDate.getUTCMonth(),
      0
    ).getUTCDate();
    dayDifference += lastDayOfTheMonth;
  }

  if (monthDifference < 0) {
    yearDifference--;
    console.log(yearDifference);
    monthDifference += 12;
  }

  document.querySelector('.years-span').textContent = yearDifference;
  document.querySelector('.month-span').textContent = monthDifference;
  document.querySelector('.days-span').textContent = dayDifference;

  //   dayInput.value = monthInput.value = yearInput.value = '';
};

// Function for checking months that have 31 days;
const calcOddMonths = function () {
//   const startDate = new Date(
//     yearInput.value,
//     monthInput.value - 1,
//     dayInput.value
//   );

  const oddMonths = [1, 3, 5, 7, 8, 10, 12];

  oddMonths.forEach((month, i, arr) => {
    if (dayInput.value > 0 && dayInput.value <= 31 && monthInput.value === month && dayInput.value !== '') {
        calcAge();
    } else{
        allErrorSpan[0].classList.remove('hidden')
        allErrorSpan[0].textContent = 'Must be a valid day'
    }
  })
};

// calcOddMonths();
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
    calcOddMonths();
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
