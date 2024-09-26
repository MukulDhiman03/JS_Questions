console.log("Start");

const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("End");

/*

Start
1
End
2

*/
