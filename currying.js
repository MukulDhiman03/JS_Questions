// const add = (a) => {
//   return (b) => {
//     if (b) return add(a + b);
//     return a;
//   };
// };

let add = (a) => (b) => b ? add(a + b) : a;

console.log(add(2)(3)(4)(5)(9)(1)());

let obj = {
  total: 0,
  add: function (a) {
    this.total += a;
    return this;
  },
  multiply: function (b) {
    this.total *= b;
    return this;
  },
  sub: function (c) {
    this.total -= c;
    return this;
  },
};
const result = obj.add(10).multiply(5).sub(2);
console.log(result.total);
