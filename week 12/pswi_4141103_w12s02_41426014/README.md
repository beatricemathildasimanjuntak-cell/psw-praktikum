/*
Nama : Beatrice Simanjuntak
Nim  : 41426014
*/

3. MENYIAPKAN STATE
    Menambah dan menghapus peserta, Data tersimpan di key `pswi.peserta.v1`
4. MEMBACA DAN MEMVALIDASI
    Reload halaman setelah ada data, Data peserta tetap tampil
5. ID DAN UPDATE
    Memanggil `ubahNama(id, "nama baru")` dengan ID nyata, lalu reload, Nama berubah dan tetap ada setelah reload, ID tidak berubah
6. RUSAK DAN RESET TERARAH
    Mengisi key dengan `bukan-json`, reload, lalu `removeItem` pada key sendiri, Muncul pesan "Data lokal bermasalah. Periksa/reset key latihan."
7. LATIHAN MANDIRI DAN MATRIKS UJI
    1. Tambah peserta, lalu reload, Data tetap tampil, Berhasil
    2. Isi key dengan `bukan-json`, lalu reload, Pesan error muncul, daftar kosong, Berhasil