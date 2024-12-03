/*
Given an array where each subsequent element is not less than the previos element .
Write a function that takes the array as an input and returns a new array where all elements are squared in ascending order.
*/
function modifiedArray(arr) {
  let newArr = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i] * arr[i];
  }
  console.log(newArr);
  return newArr.sort((a, b) => a - b);
}

console.log(modifiedArray([-3, 1, 2, 9]));
