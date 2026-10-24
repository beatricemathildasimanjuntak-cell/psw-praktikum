
Code Review — Praktikum PSWI Minggu 7

1. Tujuan Review
Review dilakukan untuk memeriksa perubahan pada form pendaftaran, khususnya petunjuk pengisian form, validasi input, dan kemudahan penggunaan website.
Bagian yang diperiksa meliputi:
* Struktur HTML dan penggunaan elemen form.
* Kejelasan petunjuk pengisian input.
* Validasi data sebelum form dikirim.
* Tampilan form dan tombol Daftar.
* Hasil pengujian menggunakan browser.
3. Komentar Review
Komentar 1 — Petunjuk Pengisian Form
Temuan: Pengguna perlu mengetahui format input yang benar sebelum mengisi form.
Saran: Tambahkan petunjuk singkat di dekat input yang membutuhkan format tertentu, misalnya email.
Tindak lanjut: Menambahkan teks petunjuk di bawah input terkait agar mudah ditemukan pengguna.
Komentar 2 — Validasi Input
Temuan: Form perlu memastikan bahwa data wajib telah diisi dan email menggunakan format yang sesuai.
Saran: Periksa penggunaan atribut required dan type="email" pada elemen input.
Tindak lanjut: Memeriksa dan memperbaiki atribut validasi jika diperlukan, kemudian menguji form dengan data tidak valid dan data valid.
4. Skenario Pengujian
1	Mengirim form kosong>>>Browser menampilkan validasi untuk input wajib
2	Memasukkan email dengan format salah>>>Browser menolak format email yang tidak valid
3	Mengisi form dengan data valid>>>Form dapat diproses sesuai mekanisme website
4	Memeriksa petunjuk input>>>Petunjuk terlihat dan mudah dipahami

5. Hasil Review dan Tindak Lanjut
Hasil pengujian dicatat. Jika ditemukan masalah, perubahan dilakukan pada bagian kode yang terkait, kemudian pengujian diulang untuk memastikan perbaikannya.
