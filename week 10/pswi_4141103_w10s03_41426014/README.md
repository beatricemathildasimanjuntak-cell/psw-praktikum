Nama     Beatrice Simanjuntak
NIM      41426014


### 3. Form Input
Tindakan
- Menambahkan form input nama, label, dan tombol Tambah.
- Menggunakan atribut `required`.
- Menguji form menggunakan nama fiktif.
Hasil Nyata
- Form berhasil ditampilkan.
- Label terhubung dengan input nama.
- Daftar dan pesan tetap tersedia.

### 4. Tambah Peserta
Tindakan
- Menambahkan event `submit` pada form.
- Mengambil dan memvalidasi nama menggunakan `trim()`.
- Menguji tombol Tambah, Enter, dan input spasi.
Hasil Nyata
- Nama valid berhasil ditambahkan.
- Input kosong atau spasi ditolak.
- Daftar diperbarui setelah peserta ditambahkan.
### 5. Tombol Hapus Saat Render
Tindakan
- Membuat tombol Hapus di dalam fungsi `render()`.
- Menambahkan ID peserta menggunakan `data-id`.
Hasil Nyata
- Setiap peserta memiliki tombol Hapus.
- Setiap tombol memiliki ID sesuai peserta.
### 6. Delegation dan Pengujian
Tindakan
- Menambahkan event listener `click` pada daftar.
- Menggunakan `closest()` dan `filter()` untuk menghapus peserta.
- Menguji penghapusan dan reload halaman.
Hasil Nyata
- Tombol Hapus bekerja untuk setiap peserta.
- Data dan tampilan diperbarui setelah penghapusan.
- Data kembali ke keadaan awal setelah halaman di-reload.
### 7. Latihan Mandiri dan Matriks Uji
Tindakan
- Menguji submit menggunakan Enter.
- Menguji nama yang hanya berisi spasi.
- Menguji penghapusan peserta dinamis.
- Menguji halaman setelah reload.


Kasus                   Harapan
Submit Enter            Satu peserta ditambahkan
Nama spasi              Input ditolak
Hapus item dinamis      State dan tampilan diperbarui
Reload                  State kembali ke keadaan awal

