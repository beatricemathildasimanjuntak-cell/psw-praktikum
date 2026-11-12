Nama    : Beatrice Simanjuntak
NIM     : 41426014

//STARTER DOM

//TEKS DAN ELEMEN BARU
## Tindakan
1. Membuat elemen li menggunakan document.createElement("li").
2. Memasukkan teks <b>Rina</b> menggunakan textContent.
3. Menambahkan elemen tersebut ke dalam daftar menggunakan append().
4. Memeriksa hasil pada browser dan tab Elements.

## Hasil Nyata
1. Elemen li berhasil dibuat dan ditambahkan ke daftar.
2. Tulisan <b>Rina</b>ditampilkan sebagai teks biasa.
3. Tanda bintang tidak membuat tulisan menjadi tebal dan tidak membentuk elemen HTML baru.

//STATE DAN RENDER
## Tindakan
1. Membuat array peserta yang berisi data Rina dan Budi.
2. Membuat fungsi render() untuk menampilkan data peserta.
3. Memanggil fungsi render() sebanyak dua kali.
4. Memeriksa apakah data peserta mengalami duplikasi.
5. Mengubah array menjadi kosong menggunakan peserta = [], kemudian menjalankan render() kembali.
## Hasil Nyata
1. Data Rina dan Budi berhasil ditampilkan pada halaman.
2. Pemanggilan render() sebanyak dua kali tidak menyebabkan data menjadi duplikat.
3. Setelah array dikosongkan dan render() dijalankan kembali, daftar peserta menjadi kosong.

//KEADAAN KOSONG
## Tindakan
1. Memilih elemen #pesan menggunakan document.querySelector().
2. Menggunakan peserta.length untuk memeriksa jumlah peserta.
3. Menggunakan operator ternary untuk menampilkan pesan.
4. Menguji program ketika array kosong dan ketika array berisi peserta.
5. Memasukkan kode pesan keadaan kosong ke dalam fungsi render() agar diperbarui setiap kali data berubah.
## Hasil Nyata
1. Ketika array kosong, halaman menampilkan pesan "Belum ada peserta".
2. Ketika array berisi peserta, pesan tersebut tidak ditampilkan.
3. Pesan diperbarui sesuai kondisi data setelah fungsi render() dijalankan.

//Latihan Mandiri
Kasus               Harapan
Selector salah      Selector salah
Render dua kali     Data tidak menjadi duplikat
Array kosong        Pesan "Belum ada peserta" ditampilkan.

Format Laporan
## Tindakan
1. Menguji selector yang salah untuk mengetahui hasil null.
2. Menguji teks markup menggunakan textContent.
3. Memanggil fungsi render() sebanyak dua kali.
4. Menguji array kosong untuk melihat pesan keadaan kosong.
5. Menguji array yang berisi data peserta.
6. Memeriksa hasil pengujian melalui browser dan DevTools.

