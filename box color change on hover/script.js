console.log("hello")
  
  const container = document.querySelector('.container');

  container.addEventListener("mousemove", (event)=>{
    const containerDetails = container.getBoundingClientRect()
    console.log("Container Width = ", containerDetails.width)
    console.log("container Far From Left = ", containerDetails.left)

    const globalMouseOnX = event.clientX
    console.log("Position Of Mouse In Window On X = ", globalMouseOnX)

    const divMouseOnX = globalMouseOnX - containerDetails.left
    console.log("Position of Mouse in Container on X = ", divMouseOnX)

    const howFarFromCenter = divMouseOnX - (containerDetails.width / 2)
    console.log("How Far From Center = ", howFarFromCenter)

    const redColor = Math.min(255,(Math.max(0,(Math.floor(255 * -howFarFromCenter / (containerDetails.width / 2))))))
    console.log("Red color = ", redColor)


    const blueColor = Math.min(255,(Math.max(0,(Math.floor(255 * howFarFromCenter / (containerDetails.width / 2))))))
    console.log("Blue color = ", blueColor)


    const backgroundColor = `rgb(${redColor},0,${blueColor})`
    console.log("Background Color = " ,backgroundColor)

    container.style.backgroundColor = backgroundColor
  })


container.addEventListener("mouseleave", ()=>{
  container.style.backgroundColor = "white"
})

