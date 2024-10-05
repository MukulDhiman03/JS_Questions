// If you replace the function in Array.prototype.myMap with an arrow function (()=>{}), it will behave differently because arrow functions do not have their own 'this' context.

const arr = [1, 2, 3, 4, 5, 6];
Array.prototype.myMap = function (cb) {
  let ref = this;
  let resArr = [];
  for (let i = 0; i < ref.length; i++) {
    resArr.push(cb(ref[i], i));
  }
  return resArr;
};
let newArr = arr.myMap((item, index) => {
  return item * index;
});
console.log(newArr);
