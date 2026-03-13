let menu = document.querySelector("#menu")
let navbarNav = document.querySelector("#navbarNav")



menu.addEventListener("click",()=>{
    navbarNav.classList.toggle("active")
})

document.addEventListener("click",(e)=>{
    if (e.target !== menu && e.target.closest(".navbar-nav")){
        
    }
})