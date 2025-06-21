const products = [
  {name: "Laptop", Company: "Apple", price: "12,000", img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Mobile", Company: "Samsung", price: "8,000", img: "https://images.unsplash.com/photo-1726587912121-ea21fcc57ff8?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Led Monitor", Company: "Huawei", price: "5,000", img: "https://images.unsplash.com/photo-1691480195680-144318cfa695?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Keyboard", Company: "TMKB", price: "4,000", img: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Laptop", Company: "Apple", price: "12,000", img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Mobile", Company: "Samsung", price: "8,000", img: "https://images.unsplash.com/photo-1726587912121-ea21fcc57ff8?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Led Monitor", Company: "Huawei", price: "5,000", img: "https://images.unsplash.com/photo-1691480195680-144318cfa695?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Keyboard", Company: "TMKB", price: "4,000", img: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]
const popularProducts = [
  {name: "Keyboard", Company: "TMKB", price: "4,000", img: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Led Monitor", Company: "Huawei", price: "5,000", img: "https://images.unsplash.com/photo-1691480195680-144318cfa695?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Mobile", Company: "Samsung", price: "8,000", img: "https://images.unsplash.com/photo-1726587912121-ea21fcc57ff8?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Laptop", Company: "Apple", price: "12,000", img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]


function showProducts(){
products.forEach((product,index) => {
    document.querySelector(".products").innerHTML += `
    <div class="product w-fit rounded-xl p-2 bg-white">
        <div  class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
         <img src="${product.img}" class="w-full h-full object-cover rounded-xl" alt="">
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${product.Company}</h3>
                    <h4 class="font-semibold mt-2">&#0036 ${product.price}</h4>
                </div>
                <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}"
                        class="add ri-add-line"></i></button>
            </div>
        </div>
    </div>
    `
})
}

showProducts()



function showPopularProducts(){
  popularProducts.forEach(product =>{
    document.querySelector(".populars").innerHTML += `
    <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.img}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.Company}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
        </div>
    </div>
    `
  })
}

showPopularProducts()


const myCart = []

function addToCart(){
    document.querySelector(".products").addEventListener("click", (obj)=>{
      if(obj.target.classList.contains("add")){
        myCart.push(products[obj.target.dataset.index])
        showCart()
      }
})
}
addToCart()




document.querySelector(".carticon").addEventListener("click", () => {
  const cartExpand = document.querySelector(".cartexpand");
  if (cartExpand.style.display === "block") {
    cartExpand.style.display = "none";
  } else {
    cartExpand.style.display = "block";
  }
});









function showCart(){
  
  let clutter = ''
   myCart.forEach(function(product,index){
     clutter += `
                   <div class="flex gap-2 bg-white p-2 rounded-lg">
                <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
                           <img src="${product.img}" alt="" class="rounded  w-full h-full object-cover">
                         </div>
                         <div>
                          <h3 class="font-semibold">${product.name}</h3>
                          <h5 class="text-sm font-semibold opacity-80">${product.price}</h5>
                         </div>
                       </div>
       `
   })
   document.querySelector(".cartexpand").innerHTML = clutter
}

