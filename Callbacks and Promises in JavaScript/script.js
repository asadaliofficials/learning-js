// A callback is simply a function passed as an argument to another function and executed after the completion of some operation. Callbacks are heavily used for asynchronous operations in JavaScript, such as fetching data from an API, reading files, or waiting for a user input.


// Simple callback task 

// function callBack() {
//   console.log("Hello")
// }

// function myCallback(name, callback, callback2) {
//   callback()
//   console.log("Hello " + name)
//   callback2()

// }

// function myCallback2() {
//   console.log("Wow.....")
// }

// myCallback("Asad Ali", callBack, myCallback2)




// Problem with Callbacks: Callback Hell
// If you have a sequence of asynchronous tasks, you'll end up with nested callbacks. This structure is often referred to as callback hell because it can get difficult to maintain and understand.


// setTimeout(() => {
//   console.log('First task');
//   setTimeout(() => {
//     console.log('Second task');
//     setTimeout(() => {
//       console.log('Third task');
//     }, 1000);
//   }, 1000);
// }, 1000);




// Promises
// A Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises solve the problems caused by callback hell and improve readability.


// Simple callback Example 
// const promise = new Promise((resolve, reject) => {
//   let status = false;
//   if (status) {
//     resolve("Success")
//   } else {
//     reject("Failed")
//   }
// })


// promise
//   .then((message) => {
//     console.log("Ya..." + message)
//   })
//   .catch((error) => {
//     console.log("oh no..." + error)
//   })




// Promise Example

// function firstFunction(){
//   return new Promise((resolve) =>{
//     setTimeout(() => resolve("first task completed"), 3000)
//   })
// }
// function secondFunction(){
//   return new Promise((resolve) =>{
//     setTimeout(() => resolve("second task completed"), 3000)
//   })
// }


// firstFunction()
//    .then((message) => {
//      console.log(message)
//      return secondFunction()
//    })
//    .then((message) => {
//      console.log(message)
//    })





// Promise Chaining
// You can chain promises to execute multiple asynchronous operations in sequence.

// Example 4: Promise Chaining

// const promise = new Promise((resolve, reject) =>{
//   setTimeout(() => resolve(1), 3000);
// })


// promise
//    .then((message) =>{
//     console.log("got value =" + message)
//     return message * 2
//    })
//    .then((message) =>{
//     console.log("got value =" + message)
//     return message * 2
//    })
//    .then((message) =>{
//     console.log("got value =" + message)
//     return message * 2
//    })
//    .then((message) =>{
//     console.log("got value =" + message)
//    })






// Handling Errors with Promises
// If something goes wrong during the execution of any step in the promise chain, you can catch the error with catch().

// Example 5: Promise with Error Handling

// new Promise((resolve, reject) => {
//   setTimeout(() => reject('Something went wrong!'), 1000);
// })
//   .then((result) => {
//       console.log(result);
//   })
//   .catch((error) => {
//       console.log(error);
//   });



// 5. Async/Await (Built on Promises)
// To further simplify working with Promises, ES2017 introduced async and await. These allow you to write asynchronous code that looks synchronous.

// Example 6: Async/Await

// function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function doTasks() {
//   console.log('Starting...');
//   await wait(1000);
//   console.log('First task done');
//   await wait(1000);
//   console.log('Second task done');
// }

// doTasks();
