// find duplicates
function findDuplicates(arr) {
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = 1;
    } else {
      seen[arr[i]]++;
    }
  }
  let newArr = [];
  for (key in seen) {
    if (seen[key] > 1) {
      newArr.push(Number(key));
    }
  }
  return newArr;
}

console.log(findDuplicates([1, 1, 2, 2, 3, 4, 4, 5, 6, 6]));
