const arr = [1, 2, 3, 4];

// const result = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

Array.prototype.myReducer = function (callback) {
  let result = 0;
  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i]);
  }
  return result;
};

const result = arr.myReducer((acc, curr) => {
  return acc + curr;
});

console.log(result);
