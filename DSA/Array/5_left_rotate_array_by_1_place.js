// Left rotate the array by one place

/*
ip- [1,2,3,4,5]
op- [2,3,4,5,1]
*/
function rotateLeft(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
}
let arr = [1, 2, 3, 4, 5];
rotateLeft(arr);
console.log(arr);
