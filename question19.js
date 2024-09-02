// Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.
function reverseWords(sentense) {
  const newArr = [];
  const arr = sentense.split(" ");
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr.join(" ");
}

console.log(reverseWords("My name is john doe"));
// ["My", "name", "is", "John", "Doe"];
