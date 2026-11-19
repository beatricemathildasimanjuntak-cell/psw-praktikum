/*
Nama : Beatrice Simanjuntak
Nim  : 41426014
*/

3. Fixture JSON
Membuat folder data dan file kegiatan.json yang berisi dua data kegiatan, yaitu HTML dengan kuota 20 dan CSS dengan kuota 0. File JSON dibuka melalui browser untuk memastikan data berhasil dibaca melalui server lokal

4. HTML STATUS DAN DAFTAR
Membuat tampilan HTML yang berisi tombol Muat Kegiatan, pesan, dan daftar untuk menampilkan data. Selector diperiksa agar JavaScript bisa menemukan elemen yang dibutuhkan. File JavaScript juga dihubungkan menggunakan defer agar berjalan setelah HTML selesai dibaca

5. Fetch dengan Async/Await
Menggunakan Fetch dan async/await untuk mengambil data dari file JSON. Menambahkan pemeriksaan r.ok untuk mengetahui apakah data berhasil dimuat atau terjadi error. Pengujian juga dilakukan dengan mengganti path menjadi file yang tidak ditemukan

6. Validasi dan Render
Menambahkan pemeriksaan menggunakan Array.isArray() untuk memastikan data berbentuk array. Judul kegiatan juga diperiksa menggunakan typeof. Data yang sesuai ditampilkan ke halaman menggunakan createElement(), textContent, dan append()

7. Latihan Mandiri dan Pengujian
Input/kondisi	    Tindakan	                                                Hasil 
JSON valid	        Klik tombol Muat Kegiatan	                                Dua kegiatan berhasil ditampilkan.
JSON kosong	        Mengubah JSON menjadi [], lalu klik tombol	                Muncul pesan belum ada kegiatan.
File 404	        Mengubah path menjadi ./data/hilang.json, lalu klik tombol	Muncul pesan gagal memuat.
Data object	        Mengubah JSON menjadi bentuk object, lalu klik tombol	    Data ditolak karena bukan array.
Judul markup	    Mengisi judul dengan <b>HTML</b>, lalu klik tombol	        Markup ditampilkan sebagai teks biasa.
Tiga kegiatan	    Menambahkan kegiatan JavaScript, lalu klik tombol	        Tiga kegiatan berhasil ditampilkan.