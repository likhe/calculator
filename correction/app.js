// This "ready" function is invoked thanks to an addEventListener below
const ready = function() {

  // This "compute" function is invoked thanks to an addEventListener below
  const compute = function(e) {
    // Prevents the form to reload the page since the form computing
    // is done client-side in JavaScript
    e.preventDefault();

    // Mathematical function which uses numbers (and NOT DOM elements)
    const sum = function(numbers) {
      let result = 0;// First step: result is equal to 0
      for(let i = 0; i < numbers.length; i++) {
        result += numbers[i];// For each item of numbers, add it to result
      }
      return result;// in the end return result
    }

    // Here: we know that the form has been submitted
    // we collect the inputs that contain numbers given by the user
    // Note that querySelectorAll returns an array of elements
    const inputs = document.querySelectorAll("#calculator input[type='number']");
    // We convert 'inputs' (which is an array of DOM elements) in an array of numbers
    const numbers = [];
    for(let i = 0; i < inputs.length; i++) {
      // See the doc to check why it's better to say parseInt(x, 10)
      // Indeed, in some cases parseInt won't work as expected
      numbers.push(parseInt(inputs[i].value,10));
    }
    // Note: it would have been better to put the lines 23-26 into a function

    // We call the sum function defined above
    const result = sum(numbers);
    // We then replace the content of the #result DOM element with the result
    document.getElementById("result").innerText = result;

  };

  // When the #calcultor form element is submitter, the "compute" function is triggered
  document.getElementById("calculator").addEventListener("submit", compute);
};


// When the DOM is loaded, the "ready" function is triggered
document.addEventListener("DOMContentLoaded", ready);
