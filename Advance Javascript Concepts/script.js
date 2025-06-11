console.log("hello")


// IIFE = Immediate Invoke Function Expression

// (function() {
//   console.log("This code is executed immediately");
// })();


// async function init() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(22)
      
//     }, 1300)
//   })
// }

// (async function main() {
//   let a = await init();
//   console.log(a);
//   let b = await init();
//   console.log(b);
// })();




// Destructuring

// let [x,y,...remain] = [1,2,2,3,4,5]
// console.log(x,y,remain)


// let arr = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// let {a,c} = arr 
// console.log(a,c)





// Hoisting
// In JavaScript, hoisting is a behavior where variables and functions are moved to the top of their scope, regardless of where they are actually defined.