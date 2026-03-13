let menu = document.querySelector("#menu")
let navbarNav = document.querySelector("#navbarNav")



menu.addEventListener("click",()=>{
    navbarNav.classList.toggle("active")
})

document.addEventListener("click",(e)=>{
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove("active")
    }
})