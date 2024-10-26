const numbers = [1, 2, 2, 3, 3, 3];
// Expected output: { '1': 1, '2': 2, '3': 3 }
const obj = {};
for (let i = 0; i < numbers.length; i++) {
  if (!obj[numbers[i]]) {
    obj[numbers[i]] = 0;
  }
  obj[numbers[i]] += 1;
}
console.log(obj);
