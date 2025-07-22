// Learning JS Advanced Concepts


// Async Await Example
async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log(data);
}
getPost();

