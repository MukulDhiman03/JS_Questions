const arr = [1, 2, 3, 4, 5, 6];
// If you replace the function in Array.prototype.myMap with an arrow function (()=>{}), it will behave differently because arrow functions do not have their own this context.
Array.prototype.myMap = function (callback) {
  let newArr = [];
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(i, this[i]));
  }
  return newArr;
};

const newArr = arr.myMap((index, val) => {
  return val * index;
});

console.log(newArr);
