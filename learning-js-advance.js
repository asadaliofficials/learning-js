// Learning JS Advanced Concepts


// Async Await Example
async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log(data);
}
getPost();


// Nullish Coalescing Example
let a = null;
let b = a ?? "default";
console.log(b);


// Event Loop Example
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");


// Nullish Coalescing Example
let a = null;
let b = a ?? "default";
console.log(b);


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


// Map vs WeakMap
let map = new Map();
map.set("a", 1);
console.log(map.get("a"));
let wm = new WeakMap();
let obj = {};
wm.set(obj, "value");


// Nullish Coalescing Example
let a = null;
let b = a ?? "default";
console.log(b);


// Array Reduce Example
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);


// Modules Example
// math.js
export function add(a, b) { return a + b; }
// index.js
import { add } from "./math.js";
console.log(add(2, 3));


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


// Destructuring Example
const person = { name: "Ali", age: 25 };
const { name, age } = person;
console.log(name, age);


// Class Example
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(this.name + " makes a noise."); }
}
class Dog extends Animal {
  speak() { console.log(this.name + " barks."); }
}
new Dog("Rex").speak();


// Map vs WeakMap
let map = new Map();
map.set("a", 1);
console.log(map.get("a"));
let wm = new WeakMap();
let obj = {};
wm.set(obj, "value");


// Destructuring Example
const person = { name: "Ali", age: 25 };
const { name, age } = person;
console.log(name, age);


// Modules Example
// math.js
export function add(a, b) { return a + b; }
// index.js
import { add } from "./math.js";
console.log(add(2, 3));


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


// Array Reduce Example
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);


// Map vs WeakMap
let map = new Map();
map.set("a", 1);
console.log(map.get("a"));
let wm = new WeakMap();
let obj = {};
wm.set(obj, "value");


// Promises Example
const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000);
});
myPromise.then(msg => console.log(msg));


// Optional Chaining Example
const user = { profile: { email: "test@gmail.com" } };
console.log(user?.profile?.email);
console.log(user?.account?.password);


// Nullish Coalescing Example
let a = null;
let b = a ?? "default";
console.log(b);


// Promises Example
const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000);
});
myPromise.then(msg => console.log(msg));


// Array Map Example
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);


// Destructuring Example
const person = { name: "Ali", age: 25 };
const { name, age } = person;
console.log(name, age);


// Prototype Example
function Person(name) { this.name = name; }
Person.prototype.sayHi = function() {
  console.log("Hi, I am " + this.name);
};
const p = new Person("Ali");
p.sayHi();


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


// Debounce Function
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(() => console.log("Debounced!"), 1000);
log(); log();


// Fetch API Example
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data));


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
log(); log();


// Array Reduce Example
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);


// Class Example
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(this.name + " makes a noise."); }
}
class Dog extends Animal {
  speak() { console.log(this.name + " barks."); }
}
new Dog("Rex").speak();


// Map vs WeakMap
let map = new Map();
map.set("a", 1);
console.log(map.get("a"));
let wm = new WeakMap();
let obj = {};
wm.set(obj, "value");


// Array Map Example
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);


// Spread Operator Example
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5];
console.log(arr2);


// Spread Operator Example
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5];
console.log(arr2);


// Destructuring Example
const person = { name: "Ali", age: 25 };
const { name, age } = person;
console.log(name, age);


// Modules Example
// math.js
export function add(a, b) { return a + b; }
// index.js
import { add } from "./math.js";
console.log(add(2, 3));


// Debounce Function
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(() => console.log("Debounced!"), 1000);
log(); log();


// Array Reduce Example
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);


// Fetch API Example
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data));


// Debounce Function
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(() => console.log("Debounced!"), 1000);
log(); log();


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
log(); log();


// Set vs WeakSet
let set = new Set([1,2,3]);
console.log(set.has(2));
let ws = new WeakSet();
let obj = {};
ws.add(obj);


// Array Map Example
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);


// Promises Example
const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000);
});
myPromise.then(msg => console.log(msg));


// Spread Operator Example
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5];
console.log(arr2);


// Currying Example
function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(5)(3));


// Array Map Example
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);


// Set vs WeakSet
let set = new Set([1,2,3]);
console.log(set.has(2));
let ws = new WeakSet();
let obj = {};
ws.add(obj);


// Nullish Coalescing Example
let a = null;
let b = a ?? "default";
console.log(b);


// Async Await Example
async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log(data);
}
getPost();


// Spread Operator Example
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5];
console.log(arr2);


// Debounce Function
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(() => console.log("Debounced!"), 1000);
log(); log();


// Promises Example
const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000);
});
myPromise.then(msg => console.log(msg));


// Debounce Function
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(() => console.log("Debounced!"), 1000);
log(); log();


// Event Loop Example
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");


// Class Example
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(this.name + " makes a noise."); }
}
class Dog extends Animal {
  speak() { console.log(this.name + " barks."); }
}
new Dog("Rex").speak();


// Array Map Example
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);


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


// Currying Example
function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(5)(3));


// Set vs WeakSet
let set = new Set([1,2,3]);
console.log(set.has(2));
let ws = new WeakSet();
let obj = {};
ws.add(obj);


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


// Array Map Example
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);


// Map vs WeakMap
let map = new Map();
map.set("a", 1);
console.log(map.get("a"));
let wm = new WeakMap();
let obj = {};
wm.set(obj, "value");


// Map vs WeakMap
let map = new Map();
map.set("a", 1);
console.log(map.get("a"));
let wm = new WeakMap();
let obj = {};
wm.set(obj, "value");


// Array Reduce Example
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);


// Spread Operator Example
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5];
console.log(arr2);


// Array Map Example
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);


// Fetch API Example
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data));


// Class Example
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(this.name + " makes a noise."); }
}
class Dog extends Animal {
  speak() { console.log(this.name + " barks."); }
}
new Dog("Rex").speak();


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
log(); log();


// Spread Operator Example
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5];
console.log(arr2);


// Currying Example
function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(5)(3));


// Destructuring Example
const person = { name: "Ali", age: 25 };
const { name, age } = person;
console.log(name, age);

