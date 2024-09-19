// const add = (a) => {
//   return (b) => {
//     if (b) return add(a + b);
//     return a;
//   };
// };

// let add = (a) => (b) => b ? add(a + b) : a;

console.log(add(2)(3)(4)(5)(9)(1)());
