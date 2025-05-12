const btn = document.querySelector("#btn")
btn.addEventListener("click",() =>{
   if(document.body.style.backgroundColor === "white"){
    document.body.style.backgroundColor = "black"
    btn.style.color = "black"
    btn.innerHTML = "Light Theme"
   } else {
     document.body.style.backgroundColor = "white"
    btn.style.color = "black"
    btn.innerHTML = "Dark Theme"
   }
    
}) 