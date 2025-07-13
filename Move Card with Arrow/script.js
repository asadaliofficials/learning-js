console.log("hello...")
const card = document.querySelector(".card")
window.addEventListener("mousemove",(details)=>{
  const value = gsap.utils.mapRange(
    0,window.innerWidth,
    card.getBoundingClientRect().width,window.innerWidth-150,
    details.clientX
  )
  console.log("value",value)
  card.style.left = value - 75 + "px"
})