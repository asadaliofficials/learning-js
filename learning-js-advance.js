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

