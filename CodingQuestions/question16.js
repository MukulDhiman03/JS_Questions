function countCharacterOccurrences(str) {
  const charCount = {};

  for (let char of str) {
    // If the character exists in the object, increment the count; otherwise, set it to 1
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  return charCount;
}

const inputStr = "JavaScript";
console.log(countCharacterOccurrences(inputStr));
