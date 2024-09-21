let obj = {
  firstName: "mukul",
  lastname: "dhiman",
};

let printFullName = function (hometown, state, ok) {
  console.log(
    this.firstName +
      " " +
      this.lastname +
      " " +
      hometown +
      " " +
      state +
      " " +
      ok
  );
};

Function.prototype.myBind = function (...args) {
  let ref = this;
  let params = args.slice(1);
  return function () {
    ref.apply(args[0], [...params]);
  };
};

let printName = printFullName.myBind(obj, "roorkee", "uttarakhand", "ok");
printName();
