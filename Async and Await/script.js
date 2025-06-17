// const Promise = new Promise((resolve, reject) => {
//   setTimeout(() =>{
//     return resolve("Promise Done...")
//   },1000)
// })

async function firstFunction(){
  return new Promise((resolve) =>{
    setTimeout(() => resolve("task completed"), 2000)
  })
}
async function getData(){

  console.log("getting Data....")
  console.log("Loading....")
  console.log("Please Wait...")
  console.log( await firstFunction());
  console.log("Done")
  console.log("Data Loaded")
}
getData();
