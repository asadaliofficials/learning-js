console.log("hello...")


// 1. this Keyword in JavaScript
// The this keyword refers to the object it belongs to, but its value depends on the context in which it's used. It can vary depending on whether it's in a function, method, or constructor, and can even be explicitly set.


// Example: this in a Simple Object
// const person = {
//   name: 'Alice',
//   greet: function() {
//     console.log(`Hello, my name is ${person.name}`);
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// person.greet(); // Hello, my name is Alice




// Example: this in a Global Context
// console.log(this); // In browsers, this refers to the global `window` object









// 2. call() Method
// The call() method allows you to invoke a function with a specific this value and arguments passed individually.


// // Example:
// const person1 = { name: 'John' };
// const person2 = { name: 'Jane' };

// function introduce(person,age) {
//   console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
// }

// // Using call() to set this explicitly
// introduce.call(person1, 25); // Hello, my name is John and I am 25 years old.
// introduce.call(person2, 30); // Hello, my name is Jane and I am 30 years old.








// 3. apply() Method
// The apply() method is similar to call(), but it takes arguments as an array or array-like object, instead of passing them individually.


// Example:
// const person1 = { name: 'John',city: 'Lahore' };
// const person2 = { name: 'Jane',city: "Karachi" };

// function introduce(age, city) {
//   console.log(`Hello, my name is ${this.name}, I am ${age} years old, and I live in ${this.city}.`);
// }

// // Using apply() to set this and pass arguments as an array
// introduce.apply(person1, [25]); // Hello, my name is John, I am 25 years old, and I live in New York.
// introduce.apply(person2, [30]); // Hello, my name is Jane, I am 30 years old, and I live in London.



// Difference Between call() and apply()
// call(): Arguments are passed individually.
// apply(): Arguments are passed as an array.




// 4. bind() Method
// The bind() method creates a new function that, when called, has its this value set to the provided object. Unlike call() and apply(), bind() does not immediately invoke the function—it returns a new function that can be called later.

// const person1 = { name: 'John' };
// const person2 = { name: 'Ali' };

// function introduce(age, city) {
//   console.log(`Hello, my name is ${this.name}, I am ${age} years old, and I live in ${city}.`);
// }

// // Using bind() to create a new function with this bound to person1
// const introduceJohn = introduce.bind(person1);
// const introduceAli = introduce.bind(person2);

// // Calling the new function later
// introduceAli(18, 'Chah Duchian Wala');
// introduceJohn(25, 'New York'); // Hello, my name is John, I am 25 years old, and I live in New York.










// Practical Use Case of bind()
// bind() is commonly used to ensure that this inside a function remains consistent, especially in asynchronous code or event handlers.

// Example: bind() in Event Handlers


// class Button {
//   constructor(label) {
//     this.label = label;
//   }

//   handleClick() {
//     console.log(`Button ${this.label} clicked`);
//   }

//   attachClickListener(buttonElement) {
//     // Without bind, `this` would refer to the buttonElement in the callback, not the Button instance
//     buttonElement.addEventListener('click', this.handleClick.bind(this));
//   }
// }

// const myButton = new Button('Test');
// myButton.attachClickListener(document.querySelector('#myButton'));















// Summary:
// this: Refers to the current execution context.
// call(): Immediately calls a function with a given this value and arguments.
// apply(): Similar to call(), but arguments are passed as an array.
// bind(): Returns a new function with a fixed this value that can be invoked later.