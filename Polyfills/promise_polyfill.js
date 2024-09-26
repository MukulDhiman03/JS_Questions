function myPromise(executor) {
  let onResolve;
  this.then = function (callback) {
    onResolve = callback;
    return this;
  };

  this.catch=function(callback){
    
  }
}

const promise = new myPromise((resolve, reject) => {});
