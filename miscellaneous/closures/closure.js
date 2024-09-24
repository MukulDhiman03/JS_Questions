/*
In JavaScript, closures are a way to retain access to variables from an outer function, even after that function has finished executing. A closure is created when a function is defined inside another function, and the inner function references variables from the outer function.
*/

function createCounter() {
  let count = 0; // count is private to the inner function

  return function () {
    count++; // Inner function modifies count
    return count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
