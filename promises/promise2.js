console.log("Start");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let result = true;
    if (result) resolve("Subscribe to my channel");
    else reject(new Error("Why aren't you subscribing to my channel"));
  }, 2000);
});

console.log(promise);

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

console.log("Stop");
