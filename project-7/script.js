let productNameInput = document.querySelector("#productNameInput")
let stockInput = document.querySelector("#stockInput")
let btnAddProduct = document.querySelector("#btnAddProduct")
let containerList = document.querySelector("#containerList")
let products;
loadData()
console.log(products)



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
    if (!productNameInput.value.trim()) return
    else if (!stockInput.value.trim() || isNaN(stockInput.value) || Number(stockInput.value) < 0) {
        alert("input must be a positive number")
        return
    }
    
    let id;
    do{
        id = generateId()
    } while (isIdExits(id))
        
        
    products.push({
        id:id,
        name:productNameInput.value.trim(),
        stock:Number(stockInput.value)
    })
    saveData()
    
    productNameInput.value = ""
    stockInput.value = ""
    console.log(products)
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
function renderData(){
    containerList.innerHTML = products.map(templateList).join("")
}

function templateList(product){
    const stockClass = () => {
        if (product.stock === 0) return "out-of-stock"
        else if (product.stock <= 5) return "low-stock" 
        else return ""
    }

    return `
        <article class="product ${stockClass}">
            <p class="product-id">${product.id}</p>
            <p class="product-name">${product.name}</p>
            <p class="product-stock">${product.stock}</p>
            <div class="product-action">
                <button class="increase">+</button>
                <button class="decrease" ${product.stock === 0 ? "disabled":""}>-</button>
                <button class="delete">Delete</button>
            </div>
        </article>`
}
// ----------------------------- Render Data end----------------------

