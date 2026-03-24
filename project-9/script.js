let categories;
let transactions;
let selectCategory = document.querySelector("#selectCategory");
let selectFilterCategory = document.querySelector("#selectFilterCategory");

loadData();
renderSelect();

// ------------- localStorage
function saveData() {
  localStorage.setItem("categories", JSON.stringify(categories));
  localStorage.setItem("transactions", JSON.stringify(transactions));
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
      filter: "",
    };
  }
}
// ------------- localStorage End

// ------------- utils
function normalize(text) {
  return text.toLowerCase().replace(" ", "");
}

function generateId() {
  return Math.random().toString(36).substring(2, 10);
}
// ------------- utils end

// ------------- form input
// input category

let categoryInput = document.querySelector("#inputKategori");
let saveCategoryBtn = document.querySelector("#saveKategoriBtn");

saveCategoryBtn.addEventListener("click", addCategory);

function addCategory(e) {
  e.preventDefault();
  let categoryName = categoryInput.value;
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
  const transactionId = generateId();
  
  if (!note.trim() || !transactionValue.trim()) {
    noteInput.value = "";
    return;
  }

  transactions.main.push({
    trId: transactionId,
    note: note,
    category: currentCategory,
    value: transactionValue
  });

  console.log("Transaction Successfully added");
  console.log(transactions);
  saveData()
  transactionValueInput.value = "";
  noteInput.value = "";
}

// ------------- form input End

// ------------- render

function renderSelect() {
  selectCategory.innerHTML = categories.map(selectTemplate).join("");
  selectFilterCategory.innerHTML =
    `<option value="all" >All</option>` + categories.map(selectTemplate).join("");
}

function selectTemplate(item) {
  return `<option value="${item.name}" >${item.name}</option>`;
}

// ------------- render End