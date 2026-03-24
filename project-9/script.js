let categories;
let transactions;
let selectCategory = document.querySelector("#selectCategory");
let selectFilterCategory = document.querySelector("#selectFilterCategory");
let tbodyCategories = document.querySelector("#tbodyCategories");

loadData();
renderCategoriesAndSelect();
feather.replace();

// -------------------------------- localStorage
function saveData() {
  localStorage.setItem("categories", JSON.stringify(categories));
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function filterDefault() {
  transactions.filter = "";
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
  const ctgr = categories.find((c) => c.name === currentCategory);
  console.log(ctgr);
  console.log(ctgr.id);
  const transactionId = generateId();
  if (!currentCategory) {
    alert("category is not exist");
    return;
  }

  if (!note.trim() || !transactionValue.trim()) {
    noteInput.value = "";
    return;
  }

  transactions.main.push({
    trId: transactionId,
    categoryId: ctgr.id,
    note: note,
    category: currentCategory,
    value: transactionValue,
  });

  console.log("Transaction Successfully added");
  console.log(transactions);
  console.log(categories);
  saveData();
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

tbodyCategories.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest("#rmvBtn")) {
    let id = e.target.closest("tr").dataset.id;
    removeCategory(id);
  }
});

function categoriesTemplate(data) {
  return `
  <tr data-id="${data.id}" >
    <td>${data.id}</td>
    <td>${data.name}</td>
    <td>Belum dibikin</td>
    <td>
      <a href="#" id="rmvBtn"><i data-feather="trash" class="rmv-btn" >
      </i></a>
    </td>
  </tr>`;
}

// -------------------------------- render End

// -------------------------------- remove
function removeCategory(id) {
  categories = categories.filter((c) => c.id !== id);
  console.log(categories);
  saveData();
  renderCategoriesAndSelect();
}
// -------------------------------- remove end
