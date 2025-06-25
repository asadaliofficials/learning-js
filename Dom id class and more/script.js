console.log("Asad Ali")


document.body.firstElementChild.children[3].style.backgroundColor = "green"

// let box = document.getElementById
let box = document.getElementsByClassName("box")
console.log(box)
box[2].style.backgroundColor = "orange"

document.getElementById("box5").style.backgroundColor = "yellow"

document.querySelector(".box").style.backgroundColor = "green"

document.querySelectorAll(".box")[7].style.backgroundColor = "red"

let boxes = document.querySelectorAll(".box").forEach(myBox => {
  myBox.style.fontFamily = "sans-serif"
  myBox.style.fontWeight = "bold"
  myBox.style.textAlign = "center"
  myBox.style.fontSize = "1.4rem"
});



// matches
console.log(document.querySelector(".box").matches(".box"))

// contains
// const container = document.querySelector(".container");
// const box2 = document.querySelector(".box");
// console.log(container.contains(box2));

console.log(document.querySelector(".container").contains(document.querySelector(".box")))

