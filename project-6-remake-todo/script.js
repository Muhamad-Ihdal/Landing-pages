let todoInput = document.querySelector("#todoInput")
let btnAdd = document.querySelector("#btnAdd")
let todoContainer = document.querySelector("#todoContainer")
let btnRmvAll = document.querySelector("#btnRemoveAll")

btnRmvAll.addEventListener("click",() => todoContainer.innerHTML = "")

btnAdd.addEventListener('click',function(event){
    event.preventDefault();
    if (todoInput.value.trim() === ''){
        return
    }

    let todoDiv = createTodoDiv()
    let checkbox = createCheckbox()
    let textTodo = createText()
    let btnRmv = createBtnRmv()

    todoDiv.appendChild(checkbox)
    todoDiv.appendChild(textTodo)
    todoDiv.appendChild(btnRmv)
    todoContainer.appendChild(todoDiv)


    todoInput.value = ''
})


todoContainer.addEventListener("click",(e)=>{
    if (e.target.matches(".btn-rmv")){
        let todo = e.target.closest(".todo")
        todo.remove()
        return
    }
    let todo = e.target.closest(".todo")
    coretTodo(todo)


})

todoContainer.addEventListener("change",(e)=>{
    let todo = e.target.closest(".todo")
    coretTodo(todo)
})



function coretTodo(todo){
    let text = todo.querySelector('p')
    let checkbox = todo.querySelector("input")
    
    if (checkbox.checked){
        checkbox.checked = false
    }
    else{
        checkbox.checked = true
    }
    return text.classList.toggle("done",checkbox.checked)
}

function createTodoDiv(){
    let todo = document.createElement("div")
    todo.classList.add("todo")
    return todo
}

function createCheckbox(){
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
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
    btnRmv.classList.add("btn-rmv")
    return btnRmv
}



