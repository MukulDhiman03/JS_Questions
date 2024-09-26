console.log("Start");
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([]);
    reject("Something went wrong");
  }, 2000);
});

promise.then().catch((err) => {
  console.log(err); // Log the error directly
  console.log(promise); // Check the promise state
});
