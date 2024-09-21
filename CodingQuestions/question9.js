// Given two strings. Find if one string can be formed by rearranging the letters of other string.

/*
str1 = "listen"
str2 = "silent"
*/

function checkString(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const arr1 = str1.split("").sort();
  const arr2 = str2.split("").sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const str1 = "listen";
const str2 = "silent";

console.log(checkString(str1, str2));
