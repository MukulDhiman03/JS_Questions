console.log("Start");

function job(state) {
  return new Promise((resolve, reject) => {
    if (state) resolve("Sucess");
    else reject("Error");
  });
}
let promise = job(true);

promise
  .then((data) => {
    console.log(data);
    return job(true);
  })
  .then((data) => {
    if (data !== "Victory") {
      throw "Defeat";
    }
    return job(true);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
    return job(false);
  })
  .then((data) => {
    console.log(data);
    return job(true);
  })
  .catch((err) => {
    console.log(err);
    return "Error Caught";
  })
  .then((data) => {
    console.log(data);
    return new Error("test"); //this is not a rejected promise it is normal text only
    // throw "test";
  })
  .then((data) => {
    console.log("Success: ", data.message);
  })
  .catch((data) => {
    console.log("Error: ", data.message);
  });

console.log("End");

/*
Start
End
Success
Defeat
Error 
Error Caught
Success:test
*/
