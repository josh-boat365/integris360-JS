//setting count to zero
let count = 0;
//declaring varaibles
let counter = document.getElementById("number");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

//adding event listeners on buttons
//callback function -> is any function called in another
//function to be executed
decrease.addEventListener("click", function () {
  count--;
  counter.textContent = count;
  if (count < 0) {
    counter.style.color = "red";
  }
});
reset.addEventListener("click", function () {
  count = 0;
  counter.textContent = count;
  if (count === 0) {
    counter.style.color = "black";
  }
});
increase.addEventListener("click", function () {
  count++;
  counter.textContent = count;
  if (count > 0) {
    counter.style.color = "green";
  }
});

// function Decrease() {
//   count--;
// }
// function Increase() {
//   count++;
// }
// = -> assignment operator
// == -> used for type casting
// === -> strict comparion operator
// function Reset() {
//   count === 0;
//   console.log(count);
// }
