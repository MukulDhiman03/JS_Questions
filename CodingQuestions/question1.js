// Program to find longest word in a given sentence ?
/*
Input:
"The quick brown fox jumps over the lazy dog"
Output:
"jumps"

split(' ')     Splits the string into an array of words based on spaces.

split('')      Splits the string into an array of individual characters.
*/
const longestWord = (sentence) => {
  const words = sentence.split(" ");
  let longestword = words[0];
  for (let word of words) {
    if (word.length > longestword.length) {
      longestword = word;
    }
  }
  return longestword;
};

const sentence = "You are as beautiful as a apsara";
console.log(longestWord(sentence));
