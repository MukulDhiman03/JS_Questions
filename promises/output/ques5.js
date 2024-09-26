console.log("Start");

const fn = () => {
  return new Promise((resolve, reject) => {
    console.log(1);
    resolve("Resolved");
    console.log(3);
  });
};

console.log("Middle");

fn()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("End");

/*
Start
Middle
1
3
End
Resolved
*/
