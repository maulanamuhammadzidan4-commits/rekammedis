# Pendataan Rekam Medis

Proyek website pendataan rekam medis sederhana yang saya buat dengan sepenuh hati saat kelas 10. Ini adalah proyek pertama yang benar-benar membuat saya bangga: saya berhasil membuat website interaktif yang dapat mengubah dan menampilkan konten berdasarkan input pengguna—terasa seperti menggunakan database—ketika teman-teman sekelas saat itu umumnya baru menampilkan hasil input.

Website ini dibuat sebagai proyek statis menggunakan HTML, CSS, dan JavaScript. Data disimpan di `localStorage` browser, sehingga halaman-halamannya dapat berbagi data tanpa backend atau database sungguhan. Dari proyek ini saya juga belajar bahwa konsistensi penamaan, termasuk penggunaan **camelCase**, sangat penting dalam pemrograman.

## Fitur

- Formulir data pasien dan input keluhan.
- Halaman dokter untuk melihat keluhan dan memasukkan hasil diagnosa.
- Halaman untuk melihat hasil diagnosa.
- Penyimpanan data sementara di `localStorage` browser.

## Cara menjalankan

1. Unduh atau clone repositori ini.
2. Buka `index.html` di browser.
3. Pilih alur **Dokter** atau **Pasien**, lalu ikuti halaman yang tersedia.

Tidak diperlukan instalasi dependensi atau server backend. Data hanya tersedia di penyimpanan browser yang sama; untuk pengalaman yang lebih konsisten, gunakan browser dan origin yang sama sepanjang mencoba aplikasi.

## Alur penggunaan

1. **Pasien** mengisi data diri, lalu memasukkan keluhan.
2. **Dokter** masuk ke halaman dokter, melihat keluhan pasien, dan mengisi diagnosa.
3. Hasil diagnosa dapat dibuka melalui tombol untuk melihat hasil.

## Struktur proyek

```text
.
├── index.html
├── pages/
│   ├── dokter/
│   ├── pasien/
│   └── hasil.html
└── assets/
    ├── css/
    └── js/
```

## Teknologi

- HTML
- CSS
- JavaScript
- `localStorage` browser

## Catatan

Proyek ini dibuat sebagai latihan belajar dan demonstrasi interaksi pada website statis. `localStorage` bukan database bersama: data tersimpan di browser/perangkat pengguna, tidak tersinkron antarperangkat, dan tidak cocok untuk menyimpan informasi medis nyata. Aplikasi ini tidak memiliki backend, autentikasi aman, maupun perlindungan data untuk penggunaan klinis.
