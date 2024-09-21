/*

Method Borrowing: You can use call to borrow methods from one object for another object.

Function Sharing:

const obj1 = {
  value: 42,
};

const obj2 = {
  value: 100,
};

function showValue() {
  console.log(this.value);
}

showValue.call(obj1);
showValue.call(obj2);


For example, if you have a method in one object that you want to use with another object, call allows you to do that without copying the method.

*/

const obj1 = {
  name: "mukul",
  printName: function () {
    console.log(this.name);
  },
};
obj1.printName();

const obj2 = {
  name: "sachin",
};

obj1.printName.call(obj2);
