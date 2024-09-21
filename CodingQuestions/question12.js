// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = getEvenNumbers(numbers);

console.log(evenNumbers); // Output: [2, 4, 6, 8]
