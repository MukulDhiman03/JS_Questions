// Write a JavaScript program to find the maximum number in an array.

/*
With help of reduce function
function findMaxInArray(arr) {
  if (arr.length === 0) throw new Error('Array is empty');
  return arr.reduce((max, current) => {
    return current > max ? current : max;
  }, arr[0]);
}
const numbers = [5, 3, 8, 1, 2, 7];
console.log(findMaxInArray(numbers)); // Output: 8
*/

function maxInArray(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const arr = [1, 4, 8, 7, 90, 4, 50, 0];
// 50
// console.log(Math.max(...arr));
console.log(maxInArray(arr));
