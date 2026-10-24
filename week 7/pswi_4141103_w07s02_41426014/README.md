/*
NAMA        : BEATRICE SIMANJUNTAK
NIM         : 41426014
PRODI       : TRPL
*/

3. MENYIAPKAN HALAMAN
    Halaman Lengkap
4. NAVIGASI KONSISTEN
   Atribut aria-current="page"  dipasang pada tautan halaman yang sedang dibuka.
   Semua jalur navigasi bekerja.
   >>Catatan pengamatan:
   1. semua tautan dari tiap halaman >> Menu Beranda, Kegiatan, dan Daftar dapat diklik dari ketiga halaman dan semuanya terbuka tanpa error.
   2. Cek menu aktif di tiap halaman >> Hanya satu menu yang tampil tebal dan bergaris bawah, yaitu menu halaman yang sedang dibuka
   3. Uji Back dan Forward >>  Browser kembali dan maju sesuai urutan halaman yang dikunjungi, dan menu aktif tetap sesuai halaman  yang tampil.

5. PATH DAN ASET
    Semua aset memakai path relatif dalam satu folder proyek. CSS dipanggil dengan href="css/style.css", dan gambar dipanggil dengan src="assets/lo.jpg".
    >>Catatan pengamatan:
    1. Periksa Network di tiap halaman >> File style.css dan gambar termuat dengan status 200, tidak ada.
    2. Uji kapitalisasi nama file >> Nama file pada src dan href sama persis dengan nama file aslinya (huruf kecil semua), sehingga gambar dan CSS tampil.

6. AUDIT KESELURUHAN
    Halaman	        Kasus	        Harapan	                        Hasil nyata	                                Status
    index.html	    Keyboard (Tab)	Semua tautan dapat dibuka	    Semua tautan menu bisa difokus dan dibuka	Lulus
    index.html	    Lebar 320px	    Tidak ada scroll samping	    Konten muat, tidak ada scroll samping	    Lulus
    index.html	    Lebar 1200px	Tata letak rapi	                Tata letak rapi dan terpusat	            Lulus
    index.html	    Zoom 200%	    Konten tetap terbaca	        Konten tetap terbaca	                    Lulus
    index.html	    Validasi HTML	Tanpa error	                    Tanpa error	                                Lulus
    kegiatan.html	Keyboard (Tab)	Semua tautan dapat dibuka   	Semua tautan bisa difokus	                Lulus
    kegiatan.html	Lebar 320px	    Gambar tidak melebihi layar	    Gambar mengecil sesuai lebar layar	        Lulus
    kegiatan.html	Lebar 1200px	Tata letak                      Tata letak rapi	                            Lulus
    kegiatan.html	Zoom 200%	    Konten  terbaca	                Konten tetap terbaca	                    Lulus
    kegiatan.html	Validasi HTML	Tanpa error	                    Tanpa error	                                Lulus
    daftar.html	    Keyboard (Tab)	Semua kolom terfokus	        Semua kolom terfokus	                    Lulus
    daftar.html	    Lebar 320px	    Form rapi	                    Form tersusun satu kolom	                Lulus
    daftar.html	    Lebar 1200px	Form rapi	                    Form rapi	                                Lulus
    daftar.html	    Zoom 200%	    Form tetap bisa dipakai	        Form tetap bisa dipakai	                    Lulus
    daftar.html	    Validasi HTML	Tanpa error	                    Tanpa error	                                Lulus
7. LATIHAN MANDIRI DAN MATRIKS UJI
Format laporan yang diisi mahasiswa :
1. klik Beranda,Kegiatan,Daftar dari tiap halaman >>> Semua halaman terbuka >>> hanya menu halaman aktif yang tebal	
