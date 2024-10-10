// remove falsy values
function removeFalsy(arr, arr1) {
  return arr.filter((val) => {
    return arr1.includes(!val);
  });
}
const arr = [false, 0, null, undefined, ""];
console.log(removeFalsy([0, "hello", false, "", undefined, 42, null], arr)); // Output: ["hello", 42]
