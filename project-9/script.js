let categories;
let transactions;
let selectCategory = document.querySelector("#selectCategory");
let selectFilterCategory = document.querySelector("#selectFilterCategory");
let tbodyCategories = document.querySelector("#tbodyCategories");
let tbodyTransaction = document.querySelector("#tbodyTransaction");

loadData();
renderCategoriesAndSelect();
renderTransaction();
feather.replace();

// -------------------------------- localStorage
function saveData() {
  localStorage.setItem("categories", JSON.stringify(categories));
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function filterDefault() {
  transactions.filter = "all";
  saveData();
}

function loadData() {
  let categoryData = localStorage.getItem("categories");
  let transactionData = localStorage.getItem("transactions");

  if (categoryData) {
    categories = JSON.parse(categoryData);
  } else {
    categories = [];
  }

  if (transactionData) {
    transactions = JSON.parse(transactionData);
  } else {
    transactions = {
      main: [],
      filter: "all",
    };
  }
}
// -------------------------------- localStorage End

// -------------------------------- utils

function renderCategoriesAndSelect() {
  renderCategories();
  renderSelect();
}

function normalize(text) {
  return text.toLowerCase().replace(" ", "");
}

function generateId() {
  return Math.random().toString(36).substring(2, 8);
}
// -------------------------------- utils end

// -------------------------------- form input
// input category

let categoryInput = document.querySelector("#inputKategori");
let saveCategoryBtn = document.querySelector("#saveKategoriBtn");

saveCategoryBtn.addEventListener("click", addCategory);

function addCategory(e) {
  e.preventDefault();
  let categoryName = categoryInput.value.trim();
  if (!categoryInput.value.trim()) {
    categoryInput.value = "";
    return;
  }
  const id = generateId();

  let existingCategory = categories.find((s) => s.name === categoryInput.value);
  if (existingCategory) {
    alert("Category already exists!");
    return;
  }

  categories.push({
    id: id,
    name: categoryName,
    total: 0
  });

  console.log("Successfully added");
  console.log(categories);
  renderSelect();
  renderCategories();
  saveData();
  categoryInput.value = "";
}

// input transaction
let transactionValueInput = document.querySelector("#inputNilaiTransaksi");
let noteInput = document.querySelector("#inputCatatan");
let saveTransactionBtn = document.querySelector("#saveTransaksiBtn");

saveTransactionBtn.addEventListener("click", addTransaction);

function addTransaction(e) {
  e.preventDefault();
  let transactionValue = transactionValueInput.value;
  let note = noteInput.value;
  let currentCategory = selectCategory.value;
  const ct = categories.find((c) => c.name === currentCategory);
  const transactionId = generateId();

  if (!currentCategory) {
    alert("category is not exist");
    return;
  }

  if (!note.trim() || !transactionValue.trim()) {
    noteInput.value = "";
    return;
  }
  ct.total = Number(ct.total) + Number(transactionValue
)
  transactions.main.push({
    trId: transactionId,
    categoryId: ct.id,
    note: note,
    category: currentCategory,
    value: transactionValue,
  });


  console.log("Transaction Successfully added");
  saveData();
  renderTransaction();
  renderCategories();
  transactionValueInput.value = "";
  noteInput.value = "";
}

// -------------------------------- form input End

// -------------------------------- render

// render select
function renderSelect() {
  selectCategory.innerHTML = categories.map(selectTemplate).join("");
  selectFilterCategory.innerHTML =
    `<option value="all" >All</option>` +
    categories.map(selectTemplate).join("");
  filterDefault();
}

function selectTemplate(item) {
  return `<option data-id="${item.id}" value="${item.name}" >${item.name}</option>`; //------------------------------------------
}

// render category
function renderCategories() {
  if (categories.length === 0) {
    tbodyCategories.innerHTML = `<tr><td colspan="4" class="empty">Category is empty</td></tr>`;
  } else {
    tbodyCategories.innerHTML = categories.map(categoriesTemplate).join("");
    feather.replace();
  }
}

function categoriesTemplate(data) {
  return `
  <tr data-id="${data.id}" >
    <td>${data.id}</td>
    <td>${data.name}</td>
    <td>Rp${data.total}</td>
    <td>
      <a href="#" id="rmvBtn"><i data-feather="trash" class="rmv-btn" >
      </i></a>
    </td>
  </tr>`;
}

// render transactions
function renderTransaction() {
  if (transactions.main.length === 0) {
    tbodyTransaction.innerHTML = `<tr><td colspan="5" class="empty">Transaction is empty</td></tr>`;
  } else {

    tbodyTransaction.innerHTML = transactions.main
      .map(transactionTemplate)
      .join("");
    feather.replace();
  }
}

function transactionTemplate(tr) {
  console.log(tr.category,' : ',transactions.filter)

  if (tr.category !== transactions.filter && tr.categories !== "all") {
    return ""
  }

  return `
      <tr data-trid="${tr.trId}" data-ctid="${tr.categoryId}" >
      <td>${tr.trId}</td>
      <td class="col-2">${tr.note}</td>
      <td>${tr.category}</td>
      <td>Rp${tr.value}</td>
      <td>
        <a href="#" id="rmvBtn"
          ><i data-feather="trash" class="rmv-btn" 
            ></i
          ></a
        >
      </td>
    </tr>`;
}
// -------------------------------- render End

// -------------------------------- remove

// event remove category
tbodyCategories.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest("#rmvBtn")) {
    const id = e.target.closest("tr").dataset.id;
    removeCategory(id);
  }
});

function removeCategory(id) {
  const ctId = id;
  categories = categories.filter((c) => c.id !== ctId);
  removeTransaction({ ctId: ctId });
  renderCategoriesAndSelect();
}

// event remove transaction
tbodyTransaction.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest("#rmvBtn")) {
    const trId = e.target.closest("tr").dataset.trid;
    const ctId = e.target.closest("tr").dataset.ctid;
    removeTransaction({ trId: trId,ctId:ctId });
  }
});

function removeTransaction({ trId = undefined, ctId = undefined }) {
  if (ctId && !trId) {
    transactions.main = transactions.main.filter(
      (tr) => tr.categoryId !== ctId,
    );
  } else if (trId) {
    const category = categories.find(ct => ct.id === ctId)
    const transactionValue = transactions.main.find(tr => tr.trId === trId).value
    category.total = Number(category.total) - Number(transactionValue) 

    transactions.main = transactions.main.filter((tr) => tr.trId !== trId);
  }
  saveData();
  renderTransaction();
  renderCategories();
}
// -------------------------------- remove end



// -------------------------------- filter 
selectFilterCategory.addEventListener("change",()=>{
  console.log( selectFilterCategory.value)
  transactions.filter = selectFilterCategory.value
  saveData();
})
// -------------------------------- filter end
