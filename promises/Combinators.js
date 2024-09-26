console.log("Start");

function greet(greet) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello ${greet}`);
    }, 1000);
  });
}
function eatFood(greet) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(greet);
    }, 1000);
  });
}
function goOnWalk(greet) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(greet);
    }, 5000);
  });
}

// console.log(
//   Promise.all([greet("Good Morning"), eatFood("Eat Food"), goOnWalk("Walk")])
// );

// all(),race(),allSettled(),any()

Promise.allSettled([
  greet("Good Morning"),
  eatFood("Eat Food"),
  goOnWalk("Walk"),
])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Stop");
