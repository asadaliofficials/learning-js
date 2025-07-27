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

