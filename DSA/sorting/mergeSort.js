// time complexity O(nlogn) , space complexity O(n) takes an extra array
let arr = [4, 5, 6, 7, 1, 2, 3, 0];

function mergeSort(arr, l, r) {
  if (l === r) return;
  let mid = Math.floor((l + r) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);
  merge(arr, l, mid, r);
}

function merge(arr, l, mid, r) {
  let resArr = [];
  let i = l;
  let j = mid + 1;
  while (i <= mid && j <= r) {
    if (arr[i] <= arr[j]) {
      resArr.push(arr[i++]);
    } else {
      resArr.push(arr[j++]);
    }
  }
  while (i <= mid) {
    resArr.push(arr[i++]);
  }
  while (j <= r) {
    resArr.push(arr[j++]);
  }
  for (let k = 0; k < resArr.length; k++) {
    arr[l + k] = resArr[k];
  }
}

mergeSort(arr, 0, arr.length - 1);
console.log(arr);
/*

Merge Sort:

Auxiliary Space: Merge Sort requires O(n) extra space because it creates a temporary array to hold the merged results during the merging process. This space is allocated to store the elements being merged before copying them back to the original array.


Recursion Stack: Merge Sort uses recursion, and the maximum depth of the recursion stack can go up to O(log n). However, since the auxiliary space (due to the temporary array) is the dominating factor, the overall space complexity of Merge Sort is O(n).

*/
