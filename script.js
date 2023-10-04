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
const monthSpan = document.querySelector('.month-span');
const daySpan = document.querySelector('.days-span');

// Today's Date
const endDate = new Date();
console.log(endDate);


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
};

let yearDifference;
let monthDifference;
let dayDifference;


const isValidDate = (day, month, year) => {
    // Convert input to numbers
    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);

    console.log(day, month, year);
  
    // Check if input values are valid numbers
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      console.log('Enter a Valid Number');
    }
  
    // Check if month is within the valid range (1 to 12)
    if (month < 1 || month > 12) {
      allErrorSpan[1].classList.remove('hidden');
      allErrorSpan[1].textContent = 'Must be a Valid Month'
    }
  
    // Determine the maximum number of days for the given month
    let maxDays;
    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
      maxDays = 31;
    } else if ([4, 6, 9, 11].includes(month)) {
      maxDays = 30;
    } else { // February
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        maxDays = 29; // Leap year
      } else {
        maxDays = 28; // Non-leap year
      }
    }
  
    // Check if the day falls within the appropriate range
    if (day < 1 || day > maxDays) {
      allErrorSpan[0].classList.remove('hidden');
      allErrorSpan[0].textContent = 'Must be a Valid Date';
      reset();
    }
  
    return true; // Date is valid
  };
  


// Function that calculates the age difference
const calcAge = function () {

  //   Getting the Date from the user
  const startDate = new Date(
    yearInput.value,
    monthInput.value - 1,
    dayInput.value
  );
  console.log(startDate);

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
    monthDifference += 12;
  }

  yearSpan.textContent = yearDifference;
  monthSpan.textContent = monthDifference;
  daySpan.textContent = dayDifference;

    // Validating Inputs 
    isValidDate(dayInput.value, monthInput.value, yearInput.value);

  //   dayInput.value = monthInput.value = yearInput.value = '';
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

});

