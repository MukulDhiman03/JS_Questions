console.log("Start");

function job() {
  return new Promise((resolve, reject) => {
    reject();
    // resolve();
  });
}
let promise = job();

promise
  .then(() => {
    console.log("Success 1");
  })
  .then(() => {
    console.log("Success 2");
  })
  .then(() => {
    console.log("Success 3");
  })
  .catch(() => {
    console.log("Error 1");
  })
  .then(() => {
    console.log("Success 4");
  })
  .finally(() => {
    console.log("Finally");
  });

console.log("End");

/*
Start
End
Error 1
Success 4
Finally 
*/
