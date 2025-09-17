// Learning JS Advanced Concepts


// Fetch API Example
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data));


// Currying Example
function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(5)(3));


// Debounce Function
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(() => console.log("Debounced!"), 1000);
log();
log();


// Fetch API Example
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data));


// While loop vs Do While loop
let i = 0;
while (i < 3) {
  console.log("While:", i);
  i++;
}

let j = 0;
do {
  console.log("Do While:", j);
  j++;
} while (j < 3);


// Promises Example
const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000);
});
myPromise.then(msg => console.log(msg));


// Async Await Example
async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log(data);
}
getPost();


// Closures Example
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());
console.log(counter());


// Event Loop Example
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");


// Modules Example
// file: math.js
export function add(a, b) {
  return a + b;
}

// file: index.js
import { add } from "./math.js";
console.log(add(2, 3));


// Throttle Function
function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
const log = throttle(() => console.log("Throttled!"), 1000);
log();
log();


// Debounce Function
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(() => console.log("Debounced!"), 1000);
log();
log();


// Closures Example
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());
console.log(counter());


// Currying Example
function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(5)(3));


// Fetch API Example
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data));


// Currying Example
function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(5)(3));


// Closures Example
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());
console.log(counter());


// Async Await Example
async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log(data);
}
getPost();


// Closures Example
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());
console.log(counter());


// Closures Example
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());
console.log(counter());


// Event Loop Example
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");


// Closures Example
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());
console.log(counter());


// Throttle Function
function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
const log = throttle(() => console.log("Throttled!"), 1000);
log();
log();


// While loop vs Do While loop
let i = 0;
while (i < 3) {
  console.log("While:", i);
  i++;
}

let j = 0;
do {
  console.log("Do While:", j);
  j++;
} while (j < 3);


// While loop vs Do While loop
let i = 0;
while (i < 3) {
  console.log("While:", i);
  i++;
}

let j = 0;
do {
  console.log("Do While:", j);
  j++;
} while (j < 3);


// While loop vs Do While loop
let i = 0;
while (i < 3) {
  console.log("While:", i);
  i++;
}

let j = 0;
do {
  console.log("Do While:", j);
  j++;
} while (j < 3);


// Modules Example
// file: math.js
export function add(a, b) {
  return a + b;
}

// file: index.js
import { add } from "./math.js";
console.log(add(2, 3));


// Throttle Function
function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
const log = throttle(() => console.log("Throttled!"), 1000);
log();
log();


// While loop vs Do While loop
let i = 0;
while (i < 3) {
  console.log("While:", i);
  i++;
}

let j = 0;
do {
  console.log("Do While:", j);
  j++;
} while (j < 3);


// Currying Example
function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(5)(3));


// Debounce Function
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(() => console.log("Debounced!"), 1000);
log();
log();


// While loop vs Do While loop
let i = 0;
while (i < 3) {
  console.log("While:", i);
  i++;
}

let j = 0;
do {
  console.log("Do While:", j);
  j++;
} while (j < 3);


// Event Loop Example
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");


// Modules Example
// file: math.js
export function add(a, b) {
  return a + b;
}

// file: index.js
import { add } from "./math.js";
console.log(add(2, 3));


// Event Loop Example
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");


// Currying Example
function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(5)(3));


// Closures Example
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());
console.log(counter());


// Fetch API Example
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data));


// Async Await Example
async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log(data);
}
getPost();


// While loop vs Do While loop
let i = 0;
while (i < 3) {
  console.log("While:", i);
  i++;
}

let j = 0;
do {
  console.log("Do While:", j);
  j++;
} while (j < 3);


// Fetch API Example
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data));


// Promises Example
const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000);
});
myPromise.then(msg => console.log(msg));


// Async Await Example
async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log(data);
}
getPost();


// Async Await Example
async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log(data);
}
getPost();


// Currying Example
function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(5)(3));


// Promises Example
const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000);
});
myPromise.then(msg => console.log(msg));


// Currying Example
function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(5)(3));


// Closures Example
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());
console.log(counter());


// Event Loop Example
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");


// Throttle Function
function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
const log = throttle(() => console.log("Throttled!"), 1000);
log();
log();


// Debounce Function
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(() => console.log("Debounced!"), 1000);
log();
log();


// Modules Example
// file: math.js
export function add(a, b) {
  return a + b;
}

// file: index.js
import { add } from "./math.js";
console.log(add(2, 3));


// Promises Example
const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000);
});
myPromise.then(msg => console.log(msg));


// Modules Example
// file: math.js
export function add(a, b) {
  return a + b;
}

// file: index.js
import { add } from "./math.js";
console.log(add(2, 3));


// Event Loop Example
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");


// Closures Example
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());
console.log(counter());


// Async Await Example
async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log(data);
}
getPost();


// Promises Example
const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000);
});
myPromise.then(msg => console.log(msg));

