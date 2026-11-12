console.log("main.js berhasil dijalankan");

//TEKS DAN ELEMEN BARU
const daftar = document.querySelector("#daftar");
console.log(daftar);

const li = document.createElement("li");
li.innerHTML = "<b>Rina</b>";
daftar.append(li);  

//STATE DAN RENDER
let peserta = [{ id: 1, nama: "Rina" }, { id: 2, nama: "Budi" }];
function render() {
 daftar.replaceChildren();
 for (const p of peserta) {
 const li = document.createElement("li");
 li.textContent = p.nama; daftar.append(li);
 }
}
render();

//KEADAAN KOSONG
const pesan = document.querySelector("#pesan");
pesan.textContent = peserta.length ? "" : "Belum ada peserta";