let btn = document.getElementById("generate");
let cards = document.querySelector(".cards");
let message = document.querySelector(".message")
let totalCards = document.querySelector(".totalCards")
let cardsCount = 0;

btn.addEventListener("click", () => {
  cardsCount++;
  totalCards.innerText = `Total Cards: ${cardsCount}`

  message.remove()
  
  let card = document.createElement("div")
  card.classList.add("card")
  card.classList.add("animation")
  cards.prepend(card)

  let thumbnail = document.createElement("div")
  thumbnail.classList.add("thumbnail")
  card.prepend(thumbnail)

  let duration = document.createElement("div")
  duration.classList.add("duration")
  duration.innerText = "11:22"
  thumbnail.append(duration)

  let title = document.createElement("div")
  title.classList.add("title")
  card.append(title)

  let h2 = document.createElement("h2")
  h2.innerText = "The ultimate HTML CSS and Javascript course | Sigma Web Development Course"
  title.append(h2)

  let details = document.createElement("div")
  details.classList.add("details")
  title.append(details)

  let channelName = document.createElement("p")
  channelName.innerHTML = `Lucky Developers<pre> ●</pre>`
 details.append(channelName)
 
  let views = document.createElement("p")
  views.innerHTML =`12M Views<pre> ●</pre>`
 details.append(views)
 
  let old = document.createElement("p")
  old.innerHTML = "1 Month Ago"
 details.append(old)    
})