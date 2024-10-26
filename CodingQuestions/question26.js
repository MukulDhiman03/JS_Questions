const colors = { red: "#FF0000", green: "#00FF00", blue: "#0000FF" };
// Expected output: { '#FF0000': 'red', '#00FF00': 'green', '#0000FF': 'blue' }
// console.log(Object.entries(colors));
const newObj = Object.entries(colors).map(([key, value]) => [value, key]);
console.log(Object.fromEntries(newObj));

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
