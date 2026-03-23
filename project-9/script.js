let kategori;
let transaksi;

// ------------- localStorage
function saveData() {
  localStorage.setItem("kategori", JSON.stringify(kategori));
  localStorage.setItem("transaksi", JSON.stringify(transaksi));
}

function loadData() {
  let dataKategori = localStorage.getItem("dataKategori");
  let dataTransaksi = localStorage.getItem("dataTransaksi");

  if (dataKategori) {
    kategori = JSON.parse(data);
  } else {
    kategori = {
        main:[],
        daftarKategori:[]
    };
  }

  if (dataTransaksi) {
    transaksi = JSON.parse(data);
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
// ------------- utils end

// ------------- form input
// input kategori
let inputKategori = document.querySelector("#inputKategori");
let saveKategoriBtn = document.querySelector("#saveKategoriBtn");
saveKategoriBtn.addEventListener("click", (e) => {
  if (!inputKategori.value.trim()) {
    console.log("Kategori gagal di tambahkan");
    return;
  }

  console.log("Kategori berhasil di tambahkan", `${inputKategori.value}`);
  inputKategori.value = "";
});

// input transaksi
let inputNilaiTransaksi = document.querySelector("#inputNilaiTransaksi");
let inputCatatan = document.querySelector("#inputCatatan");
let selectCategori = document.querySelector("#selectCategori");
let saveTransaksiBtn = document.querySelector("#saveTransaksiBtn");

saveTransaksiBtn.addEventListener("click", (e) => {
  let nilaiTransaksi = inputNilaiTransaksi.value;
  let catatan = inputCatatan.value;
  if (!catatan.trim() || !nilaiTransaksi.trim()) {
    inputCatatan.value = "";
    return;
  }

  console.log(
    "data transaksi berhasil di simpan ",
    `nilai: ${nilaiTransaksi}  catatan: ${catatan} kategori: ${selectCategori.value}`,
  );
  inputNilaiTransaksi.value = "";
});

// ------------- form input End
