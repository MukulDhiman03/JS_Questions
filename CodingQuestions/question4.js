// Program to find Reverse of a string without using built-in method ?

function reverseString(str) {
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
}

console.log(reverseString("everyone"));
