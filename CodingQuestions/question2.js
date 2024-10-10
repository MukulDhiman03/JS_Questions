// How to check whether a string is palindrome or not ?

/*
split(' ')     Splits the string into an array of words based on spaces.

split('')      Splits the string into an array of individual characters.


console.log("My name is mukul".split(""));
["w", "o", "r", "d"];

console.log("words".split(" "));
["my","name","is","mukul"]

*/

// const checkPal = (str) => {
//   const str2 = str.split("").reverse().join("");
//   console.log(str2);
// };

const checkPal = (str) => {
  let str1 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str1 += str[i];
  }
  return str1 === str;
};

let str = "maam";
console.log(checkPal(str));
