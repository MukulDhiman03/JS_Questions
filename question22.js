// swap without using 3rd vairable
let a = 10,
  b = 8;
console.log("Before sorting");
console.log(a);
console.log(b);
console.log("After sorting");
[a, b] = [b, a];
console.log(a);
console.log(b);
