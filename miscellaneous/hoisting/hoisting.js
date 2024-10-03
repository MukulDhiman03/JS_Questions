//Hoisting : during creation phase js engine moves function declarations and variable to top of the code

/*

question 1

var a = 0;
if (a) {
  console.log(a);
}


explanation-
This if statement checks whether a is truthy. In JavaScript, certain values are considered falsy. These include:

false
0
"" (empty string)
null
undefined
NaN
Since a is 0 (which is a falsy value), the if condition evaluates to false.



This if statement checks whether the string if(" ") (a string with a single space character) is truthy. In JavaScript, non-empty strings (even those containing only spaces) are considered truthy.
*/

// In JavaScript, function declarations have higher precedence over variable declarations (var) when it comes to hoisting.
function test() {
  return abc;
  function abc() {}
  var abc = 5;
}

console.log(typeof test());
