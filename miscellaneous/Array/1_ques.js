/*
Given an array where each subsequent element is not less than the previos element .
Write a function that takes the array as an input and returns a new array where all elements are squared in ascending order.
*/

// this is the bfa
// function modifiedArray(arr) {
//   let newArr = new Array(arr.length).fill(0);
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i] * arr[i];
//   }
//   console.log(newArr);
//   return newArr.sort((a, b) => a - b);
// }

// optimized approach
function modifiedArray(arr) {
  let newArr = new Array(arr.length).fill(0);

  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  for(let i=arr.length-1; i>=0 ; i--){
    let 
  }

  return newArr;
}

console.log(modifiedArray([-3, 1, 2, 9]));
