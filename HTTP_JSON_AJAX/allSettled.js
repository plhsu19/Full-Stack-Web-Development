let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 6000);
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 4000);
})

// the promises.all() will throw an error if any of its argument promise is rejected
// In this case you cannot obtain the results from other resolved promises either.
// all(): return the array of results of the argument promises(array)
Promise.all([promise1, promise2]).then(data => console.log(data))
.catch(err => console.log('something is wrong: ', err));

// allSettled()
// do not care about if the promises are rejected or resolved, it will 
// return the array of object representing the result of the promises
// in the form {status: "fullfilled/rejected", value/reason: "..."}
// when all the promise arguments are ready
Promise.allSettled([promise1, promise2]).then(data => console.log(data))
.catch(err => console.log('something is wrong: ', err));
