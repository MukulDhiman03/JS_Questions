// Write a javascript function that sorts an array of numbers in descending order.
// bubble sort
function arraySort(arr) {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

const arr = [1, 4, 8, 9, 4, 6, 9];
console.log(arraySort(arr));
