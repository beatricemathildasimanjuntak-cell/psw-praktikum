/*
Nama : Beatrice Simanjuntak
Nim  : 41426014
*/

3. REGRESI DENGAN DEBUGGER
    Nilai `id`  >>> Bertipe Number, sesuai `data-id` tombol yang diklik  >>> `Number(btn.dataset.id)` mengubah string dari dataset menjadi angka.
4. KEAMANAN DAN AKSESIBILITAS
    >>> nama "Rina" markup tampil sebagai teks
    >>> Tab >> Shift+Tab >> Enter berfungsi
5. BASELINE KUALITAS
    >>>Baseline (before)
- Performance: 100
- Accessibility: 100
- Best Practices: 96
- SEO: 90
    >>>Baseline (after)
Perbaikan dan alasan teknisnya:
- Menambahkan `<meta name="description" content="Aplikasi daftar peserta sederhana">` di `<head>` supaya halaman punya ringkasan yang bisa dibaca mesin pencari. Audit meta description lulus dan SEO naik ke 100.
- Menambahkan `<html lang="id">` supaya bahasa halaman terdeteksi. Audit atribut `lang` lulus.
- Menambahkan `<link rel="icon" href="data:,">` supaya browser tidak meminta `favicon.ico` yang menghasilkan 404. Error Console hilang dan Best Practices naik ke 100.
- Menambahkan `<!DOCTYPE html>` dan `<meta charset="UTF-8">` supaya browser memakai standards mode dan membaca karakter dengan benar.

6. KESIAPAN DEPLOYMENT
    semua halaman diujii tidak ada 404
