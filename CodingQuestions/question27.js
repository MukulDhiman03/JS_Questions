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

const words = ["apple", "banana", "apple", "orange", "banana", "banana"];
// Expected output: { 'apple': 2, 'banana': 3, 'orange': 1 }
const obj2 = {};
for (let i = 0; i < words.length; i++) {
  if (!obj[words[i]]) {
    obj[words[i]] = 0;
  }
  obj[words[i]] += 1;
}
console.log(obj2);
