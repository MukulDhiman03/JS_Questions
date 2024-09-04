// Write a javascript function that sorts an array of numbers in descending order.
function arraySort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const arr = [1, 4, 8, 9, 4, 6, 9];
console.log(arraySort(arr));
