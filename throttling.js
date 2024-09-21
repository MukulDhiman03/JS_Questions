/*
Throttling in JavaScript is a technique used to limit the rate at which a function can be executed. It ensures that the function is not called more than once within a specified period, even if it's triggered multiple times.
*/

const throttle = (func, limit) => {
  let flag = true;
  return () => {
    if (flag) {
      func();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const expensive = () => {
  console.log("Expensive function");
};
const throttleFunc = throttle(expensive, 3000);
throttle();
