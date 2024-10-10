// rotate an array
function rotateRight(arr, k) {
  // Step 1: Get the length of the array
  let n = arr.length;

  // Step 2: Normalize k (handle cases where k is larger than n)
  k = k % n;
  if (k === 0) return arr; // No need to rotate if k is 0

  // Step 3: Split the array and create a new rotated array
  let rotatedArray = [...arr.slice(n - k), ...arr.slice(0, n - k)];

  return rotatedArray; // Return the newly rotated array
}

// Example Usage
console.log(rotateRight([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
