// Left rotate the array by d place
/*
d=2
ip- [1,2,3,4,5,6,7]
op- [3,4,5,6,7,1,2]
d=d%n
*/
// brute force
// t-> O(d)+O(n-d)+O(d) => O(n+d)
// s-> O(d)
function rotate(arr, d) {
  d = d % n;
  let temp = [];
  let n = arr.length;
  for (let i = 0; i < d; i++) {
    temp.push(arr[i]);
  }
  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }
  for (let i = n - d; i < n; i++) {
    arr[i] = temp[i - (n - d)];
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
// rotate(arr, 3);

/*
 let j = 0;
  for (let i = n - d; i < n; i++) {
    arr[i] = temp[j++];
  }
*/

/*
Optimal solution


step 1- reverse kro array ke first d elements and then reverse kro baaki ke elements
        [1,2,3,4,5,6,7]  , d=3
        [3,2,1,7,6,5,4]
step 2- reverse kro whole array ko
        [4,5,6,7,1,2,3]

T-> O(n)
S-> O(1)

*/

function reverse(arr, start, end) {
  while (start < end) {
    // Swap the elements at the start and end indices
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}

function optimalRotate(arr, d) {
  const n = arr.length;
  // Step 1: Reverse the first d elements
  reverse(arr, 0, d - 1);
  // Step 2: Reverse the remaining elements
  reverse(arr, d, n - 1);
  // Step 3: Reverse the entire array
  reverse(arr, 0, n - 1);
}
optimalRotate(arr, 3);
console.log(arr);
