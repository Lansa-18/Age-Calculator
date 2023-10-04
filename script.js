'use strict';

// ELEMENTS
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const submitBtn = document.querySelector('#submit');
const allErrorSpan = document.querySelectorAll('.error-span');
const allInputs = document.querySelectorAll('.input');
const allLabels = document.querySelectorAll('label');
const yearSpan = document.querySelector('.years-span');
const monthSpan = document.querySelector('.month-span')
const daySpan = document.querySelector('.days-span')

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

const reset = () => {
   yearSpan.textContent = '--';
   monthSpan.textContent = '--';
   daySpan.textContent = '--';
}

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

  yearSpan.textContent = yearDifference;
  monthSpan.textContent = monthDifference;
  daySpan.textContent = dayDifference;

  //   dayInput.value = monthInput.value = yearInput.value = '';
};

// const oddMonths = [1, 3, 5, 7, 8, 10, 12];
// const evenMonths = [4, 6, 9, 11];
// const leap = [2];

// const checkDays = function (typeMonth, num) {
//   const isValid = typeMonth.some(month => {
//     return (
//       dayInput.value > 0 &&
//       dayInput.value <= num &&
//       monthInput.value === month &&
//       dayInput.value !== ''
//     );
//   });

//   if (!isValid) {
//     allErrorSpan[0].classList.remove('hidden');
    // allErrorSpan[0].textContent = 'Must be a valid day';
//   } else {
//     calcAge();
//   }
// };

const oddMonths = [1, 3, 5, 7, 8, 10, 12];
const evenMonths = [4, 6, 9, 11];
const leap = [2];

const checkDays = function(typeMonth, num) {
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);

  if (
    !isNaN(day) &&
    !isNaN(month) &&
    day > 0 &&
    month >= 1 && month <= 12 &&
    (
      (typeMonth.includes(month) && day <= num) || // Check for months with 31 or 30 days
      (leap.includes(month) && day <= 29) // Check for February (leap year)
    )
  ) {
    allErrorSpan[0].classList.add('hidden');
    calcAge();
  } else {
    allErrorSpan[0].classList.remove('hidden');
    allErrorSpan[0].textContent = 'Must be a valid day';
    reset();
  }
};


// // Functions for checking months that over 'DECEMBER'
// const checkMoreThan12 = function () {
//   const monthsInYear = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//   monthsInYear.forEach(month => {
//     if (monthInput.value > 0 && monthInput.value <= 12) {
//     }
//   });
// };

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
    checkDays(oddMonths, 31);
    checkDays(evenMonths, 30);
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
