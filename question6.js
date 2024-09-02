// Find the factorial of given number ?

function fact(num) {
  if (num === 1 || num === 0) return num;
  return num * fact(num - 1);
}

console.log(fact(5));
