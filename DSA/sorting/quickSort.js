// time complexity O(nlogn) , space complexity O(n)but does not takes an extra space

let arr = [4, 5, 6, 7, 1, 2, 8, 3, 0];
function quickSort(arr, l, h) {
  if (l < h) {
    let partitionIndex = partition(arr, l, h);
    quickSort(arr, l, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, h);
  }
}

function partition(arr, l, h) {
  let pivort = arr[l];
  let i = 0;
  let j = h;

  while (i < j) {
    while (arr[i] <= pivort) {
      i++;
    }
    while (arr[j] > pivort) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[l], arr[j]] = [arr[j], arr[l]];
  return j;
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);
