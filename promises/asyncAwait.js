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

const result = async () => {
  try {
    const r1 = await greet("Good Morning");
    const r2 = await eatFood("Eat Food");
    const r3 = await goOnWalk("Walk");
    console.log([r1, r2, r3]);
  } catch (err) {
    console.log(err);
  }
};
result();

console.log("Stop");
