console.log("hello")





// 1. Closures
// A closure is a function that has access to its own scope, the scope of the outer function, and the global scope, even after the outer function has returned. Closures allow functions to remember the environment in which they were created.
// Example:

// function outerFunction(outerVar) {
//   console.log("first function....")
//   return function innerFunction(innerVar) {
//     console.log(`This is ${outerVar}`);
//     console.log(`This is ${innerVar}`);
//   };
// }
 

// const newFunction = outerFunction("outer")
// newFunction("inner")













// 2. Higher-Order Functions
// A higher-order function is a function that either takes another function as an argument or returns a function as a result. This is a core concept of functional programming in JavaScript.

// Example:

// function multiplyBy(factor) {
//    return function (number){
//     return factor * number
//    }
// }

// const multiplied = multiplyBy(2);
// console.log(multiplied(20))
















// 3. Promises and Asynchronous Programming
// JavaScript is single-threaded, but it handles asynchronous operations (like fetching data) through Promises. A promise represents the eventual completion or failure of an asynchronous operation.

// Example:

// const fetchData = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve("Data fetched successfully!");
//     } else {
//         reject("Error fetching data.");
//     }
// });

// fetchData
//     .then((message) => console.log(message))
//     .catch((error) => console.error(error));


// then() is called when the promise is resolved, and catch() handles the error if the promise is rejected.
// Async/Await:
// async/await syntax provides a cleaner and more readable way to handle promises.

// async function fetchData() {
//   try {
//       const result = await fetch('https://api.example.com/data');
//       const data = await result.json();
//       console.log(data);
//   } catch (error) {
//       console.error('Error fetching data:', error);
//   }
// }


// fetchData()





















// 4. The this Keyword and Context Binding
// The value of this is determined by how a function is called. It can be tricky because this changes depending on the execution context.

// Example:

// const person = {
//     name: 'Alice',
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// const greet = person.greet;
// greet();  

// const boundGreet = person.greet.bind(person);
// boundGreet(); 

















// 5. Prototypal Inheritance
// JavaScript uses prototypal inheritance, meaning objects can inherit properties and methods from other objects. Every object in JavaScript has an internal property called [[Prototype]], which can be accessed via Object.getPrototypeOf() or the __proto__ property.

// Example:
// function Animal(name) {
//     this.name = name;
// }
// Animal.prototype.speak = function() {
//     console.log(`${this.name} makes a sound.`);
// };
// Animal.prototype.eat = function() {
//     console.log(`${this.name} eats too much.`);
// };
// const dog = new Animal('Buddy');
// dog.speak();
// dog.eat()


















// 6. The Module Pattern
// The module pattern allows for encapsulating private data and exposing only what is necessary. This is a common way to structure JavaScript code for better modularity and privacy.

// Example:

// const Counter = (function() {
//     let count = 0;

//     function increment() {
//       return  count++;
//     }

//     function getCount() {
//         return count;
//     }

//     return {
//         increment,
//         getCount
//     };
// })();

// Counter.increment();
// Counter.increment();
// Counter.increment();
// Counter.increment();
// Counter.increment();
// console.log(Counter.getCount());















// 7. Currying
// Currying is the process of transforming a function with multiple arguments into a sequence of functions that each take a single argument. This is useful for creating reusable and composable functions.

// Example:
// function multiply(a) {
//     return function(b) {
//         return a * b;
//     };
// }

// const multiplyBy3 = multiply(3);
// console.log(multiplyBy3(4));  // 12



















// 8. Event Loop and Concurrency Model
// JavaScript has a concurrency model based on an event loop, which allows for non-blocking operations. The event loop continuously checks the call stack and the message queue. When the call stack is empty, the next message (task) from the message queue is processed.

// Example (with setTimeout):

// console.log('Start');

// setTimeout(() => {
//     console.log('Timeout');
// }, 0);

// console.log('End');
















// 9. Destructuring and Spread/Rest Operators
// Destructuring allows for unpacking values from arrays or properties from objects into distinct variables. The spread and rest operators (...) allow for spreading or gathering elements in arrays or function arguments.

// Example of Destructuring:

// const person = { name: 'Alice', age: 25 };
// const { name, age } = person;
// console.log(name, age); 


// // Example of Spread:
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];
// const combined = [...arr1, ...arr2];
// console.log(combined);

// // Example of Rest:

// function sum(...numbers) {
//     return numbers.reduce((accumulator, currElem) => accumulator + currElem, 5 //initial value of accumulator
//     );
// }

// console.log(sum(1, 2, 3, 4));






















// 10. Map, Set, and WeakMap, WeakSet
// JavaScript provides built-in data structures like Map, Set, WeakMap, and WeakSet that offer more functionality and flexibility compared to plain objects and arrays.

// Example of Map:

// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 25);
// console.log(map.get('name')); 
// console.log(map.get('age')); 
// // Example of Set:

// const set = new Set([1, 2, 3, 3, 4,5,6,6,6,7]);
// console.log(set); 


// const strings = ['apple', 'banana', 'apple', 'orange', 'banana'];
// const uniqueStrings = new Set(strings);
// console.log(uniqueStrings); 

















// 11. The Symbol Type
// Symbol is a primitive data type in JavaScript, used to create unique identifiers for object properties. Symbols are often used to avoid property name collisions.

// Example:

// const sym = Symbol('description');
// const obj = {
//     [sym]: 'value'
// };

// console.log(obj[sym]);  


















// 12. Generators and Iterators
// A generator is a special type of function that can be paused and resumed. It is defined with the function* syntax and uses yield to pause execution.

// Example:

// function* count() {
//     yield "Asad";
//     yield 2;
//     yield "Ali";
// }

// const counter = count();  
// console.log(counter.next().value);  
// console.log(counter.next().value);  
// console.log(counter.next().value);  