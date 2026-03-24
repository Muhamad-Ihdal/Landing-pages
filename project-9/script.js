let kategori;
let transaksi;
let selectCategory = document.querySelector("#selectCategory");
let selectFilterCategory = document.querySelector("#selectFilterCategory");

loadData();
renderSelect();

// ------------- localStorage
function saveData() {
  localStorage.setItem("kategori", JSON.stringify(kategori));
  localStorage.setItem("transaksi", JSON.stringify(transaksi));
}

function loadData() {
  let dataKategori = localStorage.getItem("kategori");
  let dataTransaksi = localStorage.getItem("transaksi");

  if (dataKategori) {
    kategori = JSON.parse(dataKategori);
  } else {
    kategori = [];
  }

  if (dataTransaksi) {
    transaksi = JSON.parse(dataTransaksi);
  } else {
    transaksi = {
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
// input kategori

let inputKategori = document.querySelector("#inputKategori");
let saveKategoriBtn = document.querySelector("#saveKategoriBtn");

saveKategoriBtn.addEventListener("click", addCategory);

function addCategory(e) {
  e.preventDefault();
  let categoryName = inputKategori.value;
  if (!inputKategori.value.trim()) {
    inputKategori.value = "";
    return;
  }
  const id = generateId();

  let same = kategori.find((s) => s.name === inputKategori.value);
  if (same) {
    alert("kategori tersebut telah tersedia!");
    return;
  }

  kategori.push({
    id: id,
    name: categoryName,
  });

  console.log("berhasil di tambahkan");
  console.log(kategori);
  renderSelect();
  saveData();
  inputKategori.value = "";
}

// input transaksi
let inputNilaiTransaksi = document.querySelector("#inputNilaiTransaksi");
let inputCatatan = document.querySelector("#inputCatatan");
let saveTransaksiBtn = document.querySelector("#saveTransaksiBtn");

saveTransaksiBtn.addEventListener("click", addTransaction);

function addTransaction(e) {
  e.preventDefault();
  let nilaiTransaksi = inputNilaiTransaksi.value;
  let catatan = inputCatatan.value;
  let currentCategory = selectCategory.value
  const transactionid = generateId();
  if (!catatan.trim() || !nilaiTransaksi.trim()) {
    inputCatatan.value = "";
    return;
  }

  transaksi.main.push({
    trId: transactionid,
    note: catatan,
    category: currentCategory,
    value:nilaiTransaksi
  });

  inputNilaiTransaksi.value = "";
}

// ------------- form input End

// ------------- render

function renderSelect() {
  selectCategory.innerHTML = kategori.map(templetSelect).join("");
  selectFilterCategory.innerHTML =
    `<option value="all" >All</option>` + kategori.map(templetSelect).join("");
  console.log(kategori);
}
function templetSelect(isi) {
  return `<option value="${isi.name}" >${isi.name}</option>`;
}

// ------------- render End
