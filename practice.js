function flatArray(arr, n) {
  let resArr = [];
  if (n === 0) return arr;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      resArr = resArr.concat(flatArray(arr[i], n - 1));
    } else {
      resArr.push(arr[i]);
    }
  }
  return resArr;
}
console.log(flatArray([1, 2, [3, 4], [5, 6, 7]], 1));
console.log(flatArray([1, 2, [3, 4], [5, 6, 7]], 1));

// [1, 2, [3, 4], [5, 6, 7]]
// [1, 2, 3, 4, 5, 6, 7]
