// Create a function which will accepts two arrays arr1 and arr2.
// The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

function checkArray(arr1, arr2) {
  // First, ensure both arrays are of the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Sort both arrays to compare corresponding values
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  for (let i = 0; i < arr1.length; i++) {
    if (Math.pow(arr1[i], 2) !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const arr1 = [2, 3, 2];
const arr2 = [9, 4, 4];

console.log(checkArray(arr1, arr2));
