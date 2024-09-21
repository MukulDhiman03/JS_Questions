//  Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

function fib(num) {
  const fibSeries = [0, 1];
  for (let i = 2; i < num; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }
  return fibSeries;
}

const num = 10;
console.log(fib(num));
// 0 1 1 2 3 5 8 13 21 34 55 89 144
