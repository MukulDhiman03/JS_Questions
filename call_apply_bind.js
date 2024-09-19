/*
call: Immediate invocation with specific context; useful for method borrowing and calling functions in different contexts.

apply: Similar to call but useful when dealing with arrays of arguments; great for functions that take variable arguments.

bind: Create a new function with a fixed this context; perfect for event handlers, callbacks, and maintaining context.
*/

let obj = {
  firstName: "mukul",
  lastName: "dhiman",
};

let obj2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

let printName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
};

printName.call(obj2, "Roorkee", "Uttarakhand");

printName.apply(obj2, ["Roorkee", "Uttarakhand"]);

const printMyName = printName.bind(obj2, "Roorkee", "Uttarakhand");
printMyName();
