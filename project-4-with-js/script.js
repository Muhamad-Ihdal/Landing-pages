let inputNote = document.getElementById("inputNote")
let btnAdd = document.getElementById("btnAdd")
let container = document.getElementById("cardContainer")

btnAdd.addEventListener("click", function(){
    if (inputNote.value.trim() === ""){
        alert("input tidak boleh kosong");
        return
    }
    
})