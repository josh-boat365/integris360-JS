//setting count to zero
let count = 0;

let counter = document.getElementById("number");

//getting the class names of the class '.btn'
let buttons = document.querySelectorAll(".btn");

// console.log(buttons); -> querySelector returns a NodeList
// don't be confused of what a NodeList is,  see it as an array of values

// in detail
// A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes). HTMLCollection items can be accessed by their name, id, or index number. NodeList items can only be accessed by their index number. An HTMLCollection is always a live collection.

// for loop to get the value of each input buy accesing their class name -> '.btn'
buttons.forEach(function (btn) {
  //   console.log(btn);

  //using btn as the object to represent a button in the loop -> for each button element.
  //adding an event listener-> 'click' on each button when clicked
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget.classList);

    //getting the class name of the clicked button
    const className = e.currentTarget.classList;

    //checking the NodeList of the clicked button if it has a class name of 'decrease' -> then reduce 'count'
    if (className.contains("decrease")) {
      count--;
    }
    //checking the NodeList of the clicked button if it has a class name of 'increase' -> then increase 'count'
    else if (className.contains("increase")) {
      count++;
    }
    //since the rest of the classes has been taken care of it's left with 'reset' so by default we are setting 'count' to zero
    else {
      count = 0;
    }

    //setting the content of the 'p' tag to count
    counter.textContent = count;

    //changing colors when 'count' is less than -> change color to 'red', greater than -> change color to 'green', or equal to zero -> change color to black
    if (count < 0) {
      counter.style.color = "red";
    } else if (count > 0) {
      counter.style.color = "green";
    } else {
      counter.style.color = "black";
    }
  });
});
