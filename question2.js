// How to check whether a string is palindrome or not ?

/*
split(' ')     Splits the string into an array of words based on spaces.

split('')      Splits the string into an array of individual characters.
*/

const checkPal = (str) => {
  const str2 = str.split("").reverse().join("");
  console.log(str2);
};

let str = "maamo";
checkPal(str);
