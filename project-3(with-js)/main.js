let input = document.querySelector("#input") 
let btnSave = document.querySelector("#btnSave")
let btnDark = document.querySelector("#btnDark")

btnSave.addEventListener("click",() => {
    if (input.value.trim() === ""){
        alert("Inputan tidak boleh kosong!")
    }else{
        document.querySelector("#preview").textContent = "Hallo " + input.value
    }
})


btnDark.addEventListener("click",() => {
    document.querySelector("body").classList.toggle("dark")
})
