function flatArray(arr) {
  let newArray = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      newArray = newArray.concat(flatArray(item));
    } else {
      newArray.push(item);
    }
  });
  return newArray;
}

const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(flatArray(arr));
