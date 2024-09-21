const arr = [1, 2, 3, 4, 5, 6];

Array.prototype.myFilter = function (callback) {
  let resultantArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      resultantArray.push(this[i]);
    }
  }
  return resultantArray;
};

const newArr = arr.myFilter((val) => {
  return val % 2 === 0;
});

console.log(newArr);
