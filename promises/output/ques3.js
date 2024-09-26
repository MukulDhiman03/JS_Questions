console.log("Start");

const promise = new Promise((resolve, reject) => {
  console.log(1);
  console.log(3);
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
3
End
*/
