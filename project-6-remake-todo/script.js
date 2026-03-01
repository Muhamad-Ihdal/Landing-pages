let todoInput = document.querySelector("#todoInput")
let btnAdd = document.querySelector("#btnAdd")
let todoContainer = document.querySelector("#todoContainer")
let btnRmvAll = document.querySelector("#btnRemoveAll")
let todos = []
let unique_id = 1; 

btnRmvAll.addEventListener("click",() => {
    todoContainer.innerHTML = "";
    todos = [];
})

btnAdd.addEventListener('click',function(event){
    event.preventDefault();
    if (todoInput.value.trim() === ''){
        return
    }

    addTodo(text=todoInput.value.trim())
    console.log(todos)
    todoInput.value = ''
})


todoContainer.addEventListener("click",(e)=>{
    if (e.target.matches(".btn-rmv")){
        let todo = e.target.closest(".todo")
        let todoId = Number(todo.dataset.id)
        removeFromArr(todoId)

        return
    }
    
    if (!e.target.matches("input")){
        let todo = e.target.closest(".todo")
        coretTodo(todo)
    }


})

todoContainer.addEventListener("change",(e)=>{
    if (e.target.type !== "checkbox") return
    
    let todo = e.target.closest(".todo")
    coretTodo(todo)
})


function addTodo(text){
    let data = {
        id: unique_id,
        text:text,
        completed:false
    };
    unique_id++;
    todos.push(data);

    renderTodo()
}

function renderTodo(){               //  <-------- render ada di sini 
    todoContainer.innerHTML = "";

    todos.forEach((todo) => {
        let todoDiv = createTodoDiv()
        let checkbox = createCheckbox()
        let textTodo = createText(todo.text)
        let btnRmv = createBtnRmv()

        todoDiv.dataset.id = todo.id

        todoDiv.appendChild(checkbox)
        todoDiv.appendChild(textTodo)
        todoDiv.appendChild(btnRmv)
        todoContainer.appendChild(todoDiv)

        if (todo.completed === true){
            textTodo.classList.add("done")
            checkbox.checked = true
        }
    })

}

function removeFromArr(id){
    todos = todos.filter(todo => todo.id !== id)
    renderTodo()
}


function coretTodo(todoElement){
    let checkbox = todoElement.querySelector("input")
    let id = Number(todoElement.dataset.id)

    let todo = todos.find(todo => todo.id === id)
    if (!todo) return

    todo.completed = !todo.completed
    
    renderTodo()
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

function createText(text){
    let textTodo = document.createElement("p")
    textTodo.textContent = text.trim()
    return textTodo 
}

function createBtnRmv(){
    let btnRmv = document.createElement("button")
    btnRmv.textContent = "Hapus"
    btnRmv.classList.add("btn-rmv")
    return btnRmv
}




