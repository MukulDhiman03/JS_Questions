// Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31]

function mergerArray(arr1, arr2) {
  const newArr = [];
  let i = 0;
  let j = 0;
  // Merge both arrays until one of them is exhausted

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      newArr.push(arr1[i++]);
    } else {
      newArr.push(arr2[j++]);
    }
  }
  // Add remaining elements of arr1, if any

  while (i < arr1.length) {
    newArr.push(arr1[i++]);
  }
  // Add remaining elements of arr2, if any
  while (j < arr2.length) {
    newArr.push(arr2[j++]);
  }
  return newArr;
}

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];
console.log(mergerArray(arr1, arr2));
