let inputTodo = document.querySelector("#inputTodo")
let btnAdd = document.querySelector("#btnAdd")
let containerTodo = document.querySelector("#containerTodo")
let removeAll = document.querySelector("#removeAll")

btnAdd.addEventListener('click',addTodo)
removeAll.addEventListener('click',removeAllTodo)

function addTodo(event){
    if (inputTodo.value.trim() === ''){
    alert("form input tidak boleh kosong!!!")
    return
    }

    event.preventDefault();
    
    let todoDiv = createTodoDiv()
    let text = createText()
    let btnRmv = createBtnRmv()

    btnRmv.addEventListener('click',() =>{
        todoDiv.remove()
    })

    todoDiv.appendChild(text)
    todoDiv.appendChild(btnRmv)
    containerTodo.appendChild(todoDiv)

    inputTodo.value = ''
}

function createTodoDiv(){
    let todoDiv = document.createElement("div")
    todoDiv.setAttribute('class','todo')
    return todoDiv
}

function createText(){
    let text = document.createElement("p")
    text.textContent = inputTodo.value.trim() 
    return text
}
function createBtnRmv(){
    let btnRmv = document.createElement("button")
    btnRmv.textContent = 'Hapus' 
    return btnRmv
}



function removeAllTodo(){
    let todos = document.querySelectorAll('.todo')
    if (todos.length === 0){
        alert("tidak ada todo")
        return
    }

    todos.forEach(function(todo){
        containerTodo.removeChild(todo)
    } 
    
)
}
