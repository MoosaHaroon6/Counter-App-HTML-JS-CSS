/* picked up HTML Elements  */

let itr = document.querySelectorAll(".iteration-plus")[0];
let addUpBtn = document.querySelectorAll("#add-up-btn")[0];
let divEl = document.querySelectorAll(".sum-output")[0];


/* Created a function to increase count value
  in positive
*/

function add() {
  let itrVal = itr.value || 0;  /* it assigns value should be be greater than "0" or be "0" */
  let countInPlus = itrVal + 1      /* it increments the value  */

  itr.value = countInPlus;   /* assigns increased value in 'itr value' */
  itr.innerHTML = countInPlus; // assigns the value in DOM

  addUpBtn.className = "";  /* optonal */
  clearBtn.className = "";
  clearDivEl()
}



let itr_two = document.querySelectorAll(".iteration-minus")[0];

/* Created a function to decrease count value 
   in negative
*/

function subtract() {
  let itr_twoVal = itr_two.value || 0;  /* it assigns value should be be greater than "0" or be "0" */
  let countInMinus = itr_twoVal - 1      /* it decrements the value  */

  itr_two.value = countInMinus;       /* assigns decreased value in 'itr_two value' */
  itr_two.innerHTML = countInMinus;  // assigns the value in DOM

  addUpBtn.className = "";  /* optional */
  clearBtn.className = "";
  clearDivEl()
}


let sum;  // globally empty function declared to assign it later


/* created a function to add above iterations value  */
function aaUpTwoValues() {
  sum = (itr_two.value + itr.value)  // here we assigned the value of sum variable we declared empty

  /* using if statements if user clicks on the with a single so it shows error */
  if (itr.value <= 0 || itr_two.value === 0) {
    showError();
  }
  else {
    divEl.innerHTML = '';
    divEl.innerHTML += `
    <p class="output-of-sum">${sum}</p>
    `
    divEl.value = 0;
  }
  itr.value = '';
  itr_two.value = '';

  itr.innerHTML = "--";
  itr_two.innerHTML = "--";
}


/* 
1) error paragraph created,  
2) sets innerHTML value,
3) sets time  using setTimeOut() function to show error msg, 
4) function will be visible for just 5 secs.
*/

let errorParaEl = document.querySelectorAll("#error-para-div")[0];

function showError() {
  errorParaEl.className = "";
  errorParaEl.innerHTML = `<p>Please CheckOut Both Values</p>`;
  setTimeout(function () {
    errorParaEl.className = 'hide';
  }, 5000);
}


/* 
  [0] button targeted from DOM
  1) created clearAll() function, 
  2)It clears all the tasks ran after clicking "click btn",
  3)removes all the value sum of two values from DOM,
  4)timeinterval has been set,it will disappear clear btn after 1 sec when it is clicked.
*/

let clearBtn = document.querySelectorAll("#clear-btn")[0];

function clearAll() {
  addUpBtn.className = "hide";
  divEl.className = "hide";
  errorParaEl.className = "hide";
  setTimeout(() => {
    clearBtn.className = "hide"
  }, 1000
  );
}



// created this function to clear div when generating new value //
function clearDivEl() {
  divEl.innerHTML = "";
}


