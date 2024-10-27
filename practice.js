function checkPrime(n) {
  if (n == 0 || n == 1) return false;
  for (let i = 2; i < n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(checkPrime(1));
console.log(checkPrime(9));
console.log(checkPrime(13));
console.log(checkPrime(8));
