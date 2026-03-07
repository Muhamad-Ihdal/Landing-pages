let productNameInput = document.querySelector("#productNameInput")
let stockInput = document.querySelector("#stockInput")
let btnAddProduct = document.querySelector("#btnAddProduct")
let containerList = document.querySelector("#containerList")
let products;
loadData()
renderData()



// ----------------------------- local storage ----------------------
function saveData(){
    localStorage.setItem("products",JSON.stringify(products))
}

function loadData(){
    let data = localStorage.getItem("products")
    if (data) {
        products = JSON.parse(data)
    } else {
        products = []
    }
}
// ----------------------------- local storage end----------------------



// ----------------------------- Add Product ----------------------
btnAddProduct.addEventListener("click",(e)=>{
    e.preventDefault();
    let productName = productNameInput.value.trim()
    if (!productName) return
    else if (!stockInput.value.trim() || isNaN(stockInput.value) || Number(stockInput.value) < 0) {
        alert("input must be a positive number")
        return
    }
    let same = products.find(p => p.name === productName)
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
        
        
    products.push({
        id:id,
        name:productName,
        stock:Number(stockInput.value)
    })
    renderData()
    saveData()
    
    productNameInput.value = ""
    stockInput.value = ""
    })
    

function generateId(){
    return Math.random().toString(36).substring(2, 8);
}



function isIdExits(newId){
    if (products.length === 0) {return false;}
    
    let duplicatId = products.find(d => d.id === newId)
    
    if (duplicatId) {alert("dupclicate ditemukan!!!");return true}
    else {return false}
}


// ----------------------------- Add Product end----------------------



// ----------------------------- Render Data ----------------------
let checkbox = document.querySelector("#sort")
checkbox.addEventListener("change", renderData)

function renderData(){
    containerList.innerHTML = products.map(templateList).join("")
}

function templateList(product){
    let sort = document.querySelector("input[name='sort']:checked").value
    console.log("ini hasil dari selector radio: ",sort)

    const stockClass = () => {
        if (product.stock === 0) {return "out-of-stock"}
        else if ( product.stock <= 5 ?? product.stock > 0) return "low-stock" 
        else return ""
    }
    
    let html =`
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



    if (sort === "out-of-stock") {
        if (product.stock === 0){
            return html
        }else {return "";}
    } else if (sort === "low-stock"){
        if (product.stock <= 5){
            return html
        } else {return "";}
    } else{
        return html
    }
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
    products = products.filter(p => p.id !== id)
    saveData()
    renderData()
}

function increaseStock(id){
    let product = products.find(p => p.id === id)
    product.stock++
    saveData()
    renderData()
}

function decreaseStock(id){
    let product = products.find(p => p.id === id)
    if (!product.stock > 0) return
    product.stock--;
    
    saveData()
    renderData()
}
// ----------------------------- tambahan end----------------------