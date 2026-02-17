let inputNote = document.getElementById("inputNote")
let btnAdd = document.getElementById("btnAdd")
let container = document.getElementById("cardContainer")

btnAdd.addEventListener("click", function(){
    if (inputNote.value.trim() === ""){
        alert("input tidak boleh kosong");
        return
    }
    
    const card = document.createElement("div")

    const note = document.createElement("p")
    note.textContent = inputNote.value
    
    const btnRmv = document.createElement("button")
    btnRmv.textContent = "Hapus"
    
    btnRmv.addEventListener("click",function(){
        card.remove()
    })
    
    card.appendChild(note)
    card.appendChild(btnRmv)
    container.appendChild(card)

    inputNote.value = ""
    
})