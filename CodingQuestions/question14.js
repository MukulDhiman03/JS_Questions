// Write a JavaScript program to find the largest element in a nested array. [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]

function largestNumber(arr) {
  let max = -Infinity;
  function findMax(arr) {
    arr.forEach((elem) => {
      if (Array.isArray(elem)) {
        findMax(elem);
      } else {
        if (elem > max) {
          max = elem;
        }
      }
    });
  }
  findMax(arr);
  return max;
}

const arr = [
  [3, 4, 58],
  [8, 9, [10, 11]],
  [111, 2],
];
console.log(largestNumber(arr));
