function flatArray(arr) {
  let flattenArray = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flattenArray = flattenArray.concat(flatArray(item));
    } else {
      flattenArray.push(item);
    }
  });
  return flattenArray;
}

const nestedArray = [1, [1, 2, 3, [5, 6, [8]], 10]];
const flattenArray = flatArray(nestedArray);
console.log(flattenArray);