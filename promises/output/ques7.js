console.log("Start");

function job(state) {
  return new Promise((resolve, reject) => {
    if (state) resolve("Resolved");
    else reject("Rejected");
  });
}
let promise = job(true);

promise
  .then((data) => {
    console.log(data);
    return job(false);
  })
  .catch((err) => {
    console.log(err);
    return "Error Caught";
  })
  .then((data) => {
    console.log(data);
    return job(true);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finally");
  });

console.log("End");

/*
Start
End
Resolved
Rejected
Error Caught
Finally
*/
