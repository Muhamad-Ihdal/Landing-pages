let productNameInput = document.querySelector("#productNameInput")
let stockInput = document.querySelector("#stockInput")
let btnAddProduct = document.querySelector("#btnAddProduct")
let containerList = document.querySelector("#containerList")
let listTitle = document.querySelector("#listTitle")
let searchInput = document.querySelector("#searchInput")
let btnSearch = document.querySelector("#btnSearch")
let checkbox = document.querySelector("#sort")
let state;
loadData()
renderAndFilterProduct()


// ----------------------------- local storage ----------------------
function saveData(){
    localStorage.setItem("state",JSON.stringify(state))
}

function loadData(){
    let data = localStorage.getItem("state")
    if (data) {
        state = JSON.parse(data)
    } else {
        state = {
            products: [],
            filter:"all",
            search:""
        }
    }
}
// ----------------------------- local storage end----------------------

// ----------------------------- Add Product ----------------------
btnAddProduct.addEventListener("click",(e)=>{
    e.preventDefault();
    let productName = productNameInput.value.trim()
    if (!productName) return
    
    if ( isNaN(stockInput.value) || Number(stockInput.value) < 0) {
        alert("input must be a positive number")
        return
    }

    let same = state.products.find(p => p.name === productName)
    if (same) {
        alert("product tersebut telah tersedia!")
        productNameInput.value = ""
        stockInput.value = ""
        return
    }  
    
    let id;
    do{
        id = generateId()
    } while (isIdExits(id))
        
        
    state.products.push({
        id:id,
        name:productName,
        stock:Number(stockInput.value)
    })
    radioToDefault()
    renderAndFilterProduct()
    saveData()
    
    productNameInput.value = ""
    stockInput.value = ""
    })
    

function generateId(){
    return Math.random().toString(36).substring(2, 8);
}

function isIdExits(newId){
    if (state.products.length === 0) {return false;}
    
    let duplicatId = state.products.find(d => d.id === newId)
    
    if (duplicatId) {return true}
    else {return false}
}


// ----------------------------- Add Product end----------------------


// ----------------------------- Render Data ----------------------
checkbox.addEventListener("change", ()=>{
    let sort = document.querySelector("input[name='sort']:checked").value;
    state.filter = sort
    renderAndFilterProduct()
})

btnSearch.addEventListener("click",(e)=>{
    e.preventDefault();
    state.search = normalize(searchInput.value)
    renderAndFilterProduct(true)
})

function renderData(filter = undefined){
    searchToDefault()
    
    if (filter){
        containerList.innerHTML = filter.map(templateList).join("")
    }else {
        containerList.innerHTML = state.products.map(templateList).join("")
    }
}


function templateList(product){
    
    const stockClass = () => {
        if (product.stock === 0) {return "out-of-stock"}
        else if ( product.stock <= 5 && product.stock > 0) return "low-stock" 
        else return ""
    }
    
    return`
    <article class="product" >
    <p class="product-id">${product.id}</p>
    <p class="product-name">${product.name}</p>
    <p class="product-stock ${stockClass()}">${product.stock}</p>
    <div class="product-action" data-id="${product.id}">
    <button class="increase">+</button>
    <button class="decrease" ${product.stock === 0 ? "disabled":""}>-</button>
    <button class="delete">Delete</button>
    </div>
    </article>`
    

}


function renderAndFilterProduct(isSearch=false){
    
    let productFiltered;
    
    if (isSearch && normalize(state.search)){
        radioToDefault()
        let p = state.products.filter(p => normalize(p.name).includes(normalize(state.search)) || normalize(p.id).includes(normalize(state.search)))
        if (p) { containerList.innerHTML = p.map(templateList).join("")}
        else {containerList.innerHTML = ""}
        return 
    }

    if (state.filter === "out-of-stock" ){
        listTitle.textContent = "Out of stock product"
        productFiltered = state.products.filter(p => p.stock === 0 )
    } else if (state.filter === "low-stock" ){
        listTitle.textContent = "Low stock product"
        productFiltered = state.products.filter(p =>  p.stock <= 5 && p.stock > 0 )
    } else {
        listTitle.textContent = "All product"
        renderData()
    }

    renderData(productFiltered)

}
// ----------------------------- Render Data end----------------------


// ----------------------------- event list ----------------------
containerList.addEventListener("click",(e)=>{
    if (e.target.tagName !== "BUTTON") return
    let id = e.target.closest(".product-action").dataset.id
    if (e.target.classList.contains("delete")){
        deleteProduct(id)
    }else if (e.target.classList.contains("increase")){
        increaseStock(id)        
    }else if (e.target.classList.contains("decrease")){
        decreaseStock(id)
    }
})


// ----------------------------- event list end----------------------


// ----------------------------- tambahan ----------------------
function deleteProduct(id){
    state.products = state.products.filter(p => p.id !== id)
    saveData()
    renderAndFilterProduct()
}

function increaseStock(id){
    let product = state.products.find(p => p.id === id)
    product.stock++
    saveData()
    renderAndFilterProduct(true)
}

function decreaseStock(id){
    let product = state.products.find(p => p.id === id)
    if (product.stock <= 0) return
    product.stock--;
    
    saveData()
    renderAndFilterProduct(true)
}

function normalize(text){
    return text.toLowerCase().replace(" ","")
}

function radioToDefault(){
    document.querySelector("#all").checked = true;
    state.filter = "all";
}
function searchToDefault(){
    state.search = ""
    searchInput.value = "" ;
}

function getProductById(id){
    return state.products.find(p => p.id === id)
}
// ----------------------------- tambahan end----------------------