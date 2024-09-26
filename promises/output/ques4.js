console.log("Start");

const promise = new Promise((resolve, reject) => {
  console.log(1);
  reject(new Error("Error Found"));
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
Error Found
*/

//  if no resolve is there no then block will execute
