const userObj = {
  name: "Mukul",
  age: "23",
};

function userInfo(obj) {
  return function (userinfo) {
    return obj[userinfo];
  };
}

let res = userInfo(userObj);
console.log(res("name"));
console.log(res("age"));
