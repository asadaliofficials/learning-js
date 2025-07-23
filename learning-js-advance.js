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

