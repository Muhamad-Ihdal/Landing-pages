let todoInput = document.querySelector("#todoInput")
let btnAdd = document.querySelector("#btnAdd")
let todoContainer = document.querySelector("#todoContainer")
let btnRmvAll = document.querySelector("#btnRemoveAll")

btnRmvAll.addEventListener("click",() => todoContainer.innerHTML = "")

btnAdd.addEventListener('click',function(){
    if (todoInput.value.trim() === ''){
        alert("input tidak boleh kosong")
        return
    }

    let todoDiv = createTodoDiv()
    let checkbox = createCheckbox()
    let textTodo = createText()
    let btnRmv = createBtnRmv()

    checkbox.addEventListener('change',() => {
        textTodo.classList.toggle("done")
    })

    btnRmv.addEventListener("click", () => {
        todoDiv.remove()
    })

    todoDiv.appendChild(checkbox)
    todoDiv.appendChild(textTodo)
    todoDiv.appendChild(btnRmv)
    todoContainer.appendChild(todoDiv)


    todoInput.value = ''
})


function createTodoDiv(){
    let todo = document.createElement("div")
    todo.setAttribute("class","todo")
    return todo
}

function createCheckbox(){
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type","checkbox")
    return checkbox
}

function createText(){
    let textTodo = document.createElement("p")
    textTodo.textContent = todoInput.value.trim()
    return textTodo 
}

function createBtnRmv(){
    let btnRmv = document.createElement("button")
    btnRmv.textContent = "Hapus"
    return btnRmv
}