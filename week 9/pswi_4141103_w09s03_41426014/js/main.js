// Mengambil function dari utils.js
import { hitungTotal } from "./utils.js";
console.log(hitungTotal(2, 10000));
// HTML: <script type="module" src="main.js"></script>

console.log("main.js berhasil dijalankan");

// PENGUJIAN FUNCTION
console.log("PENGUJIAN FUNCTION");

console.log(hitungTotal(2, 10000));

// PENGUJIAN KOLEKSI
console.log("PENGUJIAN KOLEKSI");

const kegiatan = [
    { id: 1, judul: "HTML", kuota: 20 },
    { id: 2, judul: "CSS", kuota: 0 },
    { id: 3, judul: "Java", kuota: 15 },
    { id: 4, judul: "JavaScript", kuota: 10 }
];

const tersedia = kegiatan.filter(k => k.kuota > 0);

console.log(tersedia);

// Mengambil judul menggunakan map
console.log(tersedia.map(k => k.judul));

//Latihan Mandiri
console.log("Kasus Normal");
console.log(hitungTotal(2, 10000));

console.log("Kasus Batas");
console.log(hitungTotal(5, 10000));

console.log("Kasus invalid");
console.log(hitungTotal(0, 10000));