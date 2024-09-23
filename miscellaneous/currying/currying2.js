// non currying function

/*
function sum(x, y, z) {
  return x + y + z;
}
console.log(sum(1, 2, 3));
*/

// currying
function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
// console.log(sum(1)(2)(3));
let res = sum(1);
let res1 = res(2);
console.log(res1(2));
