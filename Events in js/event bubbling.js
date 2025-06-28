let container = document.querySelector(".container")
let childContainer = document.querySelector(".childContainer")
let child = document.querySelector(".child")

container.addEventListener("click", () =>{
  console.log("container")
})
childContainer.addEventListener("click", (e) =>{
  e.stopPropagation()
  console.log("childContainer")
})
child.addEventListener("click", (e) =>{
  e.stopPropagation()
  console.log("child")
})
