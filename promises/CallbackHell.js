console.log("Start");

function greet(greet, cb) {
  setTimeout(() => {
    cb(`Hello ${greet}`);
  }, 2000);
}
function eatFood(greet, cb) {
  setTimeout(() => {
    cb(greet);
  }, 1000);
}
function goOnWalk(greet, cb) {
  setTimeout(() => {
    cb(greet);
  }, 1000);
}
greet("Good Morning", (data) => {
  console.log(data);
  eatFood("Eat Food", (data) => {
    console.log(data);
    goOnWalk("Go On Walk", (data) => {
      console.log(data);
    });
  });
});

console.log("Stop");

/*
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
      resolve(greet);
    }, 1000);
  });
}

greet("Good Morning")
  .then((data) => {
    console.log(data);
    return eatFood("Eat Food");
  })
  .then((data) => {
    console.log(data);
    return goOnWalk("Walk");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Stop");
*/
