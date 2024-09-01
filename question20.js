// Implement a javascript function that flattens a nested array into a single-dimensional array.

/*

TC    Best O(N) -> if array is mostly flat.
      Worst O(N^2) -> Due to increasing cost of concat as the array grows

*/

function flattenArray(arr) {
  let flattened = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flattened = flattened.concat(flattenArray(item)); // Recursively flatten and concatenate
    } else {
      flattened.push(item);
    }
  });
  return flattened;
}

const nestedArray = [1, [2, [3, [4]], 5], 6];
const flatArray = flattenArray(nestedArray);
console.log(flatArray);
