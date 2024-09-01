// Implement a javascript function that flattens a nested array into a single-dimensional array up to depth n.
// leet code question no- 2625(js 30 day challange questions)

var flat = function (arr, n) {
  let flatArray = [];
  if (n === 0) return arr;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray.push(...flat(arr[i], n - 1));
    } else {
      flatArray.push(arr[i]);
    }
  }
  return flatArray;
};

const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flat(arr1, 0)); // Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

console.log(flat(arr1, 1)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

console.log(flat(arr1, 2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
