// Write a program to remove duplicates from an array ?

/*
1) We can use set function to remove duplicates as set function automatically removes duplicates.

 A Set is a collection of unique values.
            new Set(arr)

const arr = [1, 2, 3, 1, 2, 3];
const newArr = new Set(arr);
           
*/

/*
2) Using filter() and indexOf()
    indexOf() -> arr.indexOf(value): This returns the index of the first occurrence of value in the array.
*/

function removeDuplicates(arr) {
  const newArr = arr.filter((value, index) => {
    return arr.indexOf(value) === index;
  });
  return newArr;
}
const arrayWithDuplicates = [5, 1, 5, 1, 8, 9, 6, 8, 9, 6];
const uniqueArray = removeDuplicates(arrayWithDuplicates);

/*
3)  An object to keep track of seen values and,
    array to store unique values.

     Loop through each element in the array,
     If the value hasn't been seen before,
     Add it to the uniqueArr,
     Mark the value as seen.
*/

function duplicateRemoval(arr) {
  const seen = {};
  const uniquArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      uniquArr.push(arr[i]);
      seen[arr[i]] = true;
    }
  }
  console.log(seen);
  return uniquArr;
}
console.log(duplicateRemoval([5, 1, 5, 1, 8, 9, 6, 8, 9, 6]));
