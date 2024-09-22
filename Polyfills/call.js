const obj1 = {
  firstName: "Mukul",
  lastName: "Dhiman",
  printName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

const obj2 = {
  firstName: "Vaibhav",
  lastName: "Rana",
};

// obj1.printName.call(obj2);

Function.prototype.myCall = function (...args) {};

obj1.printName.myCall(obj2);
