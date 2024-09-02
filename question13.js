// Write a JavaScript function to check if a given number is prime.
/*
Prime numbers are natural numbers that are divisible by only 1 and the number itself. 
In other words, prime numbers are positive integers greater than 1 with exactly two factors, 1 and the number itself. 
Some of the prime numbers include 2, 3, 5, 7, 11, 13, etc. Always remember that 1 is neither prime nor composite. 
Also, we can say that except for 1, the remaining numbers are classified as prime and composite numbers. 
All prime numbers are odd numbers except 2, 2 is the smallest prime number and is the only even prime number.
*/

function isPrime(num) {
  if (num == 0 || num == 1) return bool;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(11));
