let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((val) => {
//   console.log(val);
// });

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
  }
};

arr.myForEach((val) => {
  console.log(val);
});
