/*
In JavaScript, iterators are objects that allow you to traverse through a collection (like an array or string) one element at a time.

next() -> it returns an object with two properties and helps in traversing the array
    1) value
    2) done

Iterators are used when we want to build a custom iteration.

*/
function fruitIterator(arr) {
  let index = 0;

  return {
    next: function () {
      if (index < arr.length) {
        return { value: arr[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

const fruits = ["Apple", "Orange", "Mango", "Grapes"];
const itreator = fruitIterator(fruits);
// console.log(itreator.next());
// console.log(itreator.next());
// console.log(itreator.next());
// console.log(itreator.next());
// console.log(itreator.next());

//for of
for (let fruit of fruits) {
  console.log(fruit);
}

// for in
for (let index in fruits) {
  console.log(fruits[index]);
}
