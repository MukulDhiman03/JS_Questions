// Write a javascript function that sorts an array of numbers in ascending order.
// bubble sort

function arraySort(arr) {
  let flag;
  for (let i = 0; i < arr.length - 1; i++) {
    flag = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
    if (!flag) break;
  }
  return arr;
}

const arr = [15, 4, 8, 9, 6];
console.log(arraySort(arr));
