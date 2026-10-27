# ARSIP KECIL TENTANG KITA 🖤

> **"Aku tidak takut lupa. Aku cuma takut suatu hari nanti lupa rasanya."**
>
> Sebuah arsip digital pribadi tentang kita: tempat menyimpan kenangan kecil, pengamatan intim, kebiasaan unik, suara, tempat-tempat yang pernah kita lewati, foto-foto fisik, hari-hari biasa, dan surat untuk masa depan.

---

## 🖤 Pengalaman Yang Dirancang Khusus

- 📜 **Pembukaan Typewriter Sinematik** — Layar hitam dengan pengetikan kalimat pengakuan secara perlahan sebelum tombol `[ MASUK ]` muncul.
- 🎯 **Hero Thesis** — Pernyataan emosional utama tentang alasan arsip ini dibuat.
- 📂 **01. SEBUAH KENANGAN** — Kartu berkas arsip yang dapat diklik untuk membuka modal catatan lengkap.
- 🌫️ **02. KAMU MUNGKIN SUDAH LUPA INI** — Foto yang awalnya kabur (blur), dapat diklik `[ INGATKAN AKU ]` untuk membuka kenangan secara jelas.
- 🔢 **03. KEBIASAAN KECILMU** — Kartu bernomor yang dapat diklik untuk membuka pengamatan intim tentang kebiasaan unik dia.
- 💬 **04. HAL-HAL KECIL YANG AKU SUKA** — Pengamatan mendetail (bukan sekadar pujian romantis biasa).
- 🔊 **05. SUARA YANG KUKENAL** — Objek suara interaktif dengan visualisasi gelombang saat diputar.
- 🗺️ **06. TEMPAT-TEMPAT KITA** — Peta interaktif Leaflet mode gelap dengan marker bronze.
- 🎞️ **07. BUKTI-BUKTI KECIL** — Foto-foto fisik bergaya film yang tersebar secara acak di atas meja gelap, dapat diklik untuk membuka Lightbox.
- ☕ **08. HARI-HARI YANG BIASA** — Pengakuan bahwa hari biasa tanpa perayaan besar pun tetap sangat berharga.
- 📊 **09. STATISTIK ARSIP** — Counter angka unik yang bertambah saat di-scroll.
- 🎭 **10. ABSURD TAPI KITA** — Inside jokes dan cerita konyol khas kalian berdua.
- ❓ **11. SATU PERTANYAAN** — Jeda emosional penuh layar dengan pertanyaan reflektif.
- ✉️ **12. UNTUK MASA DEPAN** — Kapsul waktu digital dengan segel lilin.
- ✉️ **13. SATU HAL TERAKHIR** — Surat utama emosional di akhir arsip.
- 🔐 **RUANGAN RAHASIA** — Tersembunyi (klik 3x pada nomor `ARSIP #001` di bagian footer paling bawah). Default password: `1410`.
- 🎬 **ENDING SINEMATIK** — Fade ke hitam penuh dengan kalimat penutup bertahap dan kursor berkedip: `ARSIP 001 — MASIH BERLANJUT`.

---

## 📖 Cara Mengkustomisasi Isi Teks & Kenangan

Semua isi teks, kenangan, foto, lagu, tempat di peta, password rahasia, dan surat tersimpan terpusat pada **satu file tunggal**:

📍 **`src/data.js`**

Buka file `src/data.js` menggunakan editor teks (seperti VS Code, Notepad++, dsb) untuk mengubah:

1. **`boyfriendName` & `nickname`**: Nama pacar dan panggilan kesayangan.
2. **`startDate` & `archiveDate`**: Tanggal penting dan tanggal arsip.
3. **`introLines`**: Kalimat pembuka typewriter.
4. **`memories`**: Berkas kenangan (judul, foto, tanggal, lokasi, cerita, catatan).
5. **`blurMemories`**: Kenangan dengan foto blur yang di-reveal saat diklik.
6. **`habits`**: Pengamatan kebiasaan bernomor.
7. **`smallLoves`**: Daftar hal kecil yang kamu perhatikan dari dia.
8. **`sounds`**: Suara & alasan memilih suara tersebut.
9. **`places`**: Koordinat latitude & longitude lokasi di peta.
10. **`evidence`**: Foto-foto tersebar beserta catatannya.
11. **`ordinaryDays`**: Kenangan hari-hari biasa.
12. **`archiveStats`**: Angka statistik arsip.
13. **`insideJokes`**: Candaan khas kalian berdua.
14. **`futureLetter` & `finalLetter`**: Teks surat kapsul waktu dan surat terakhir.
15. **`secretArchive`**: Password rahasia (`password: "1410"`) dan pesan confidential.

---

## 🚀 Cara Menjalankan & Membuka Website

### Tanpa Install Apapun (Sangat Mudah)
Cukup buka file `index.html` menggunakan browser apapun (Chrome, Edge, Safari, Firefox). Website akan langsung berjalan secara interaktif.

---

## 🌐 Deploy ke GitHub Pages (Gratis)

1. Upload seluruh folder ini ke repository baru di GitHub kamu.
2. Buka menu **Settings** → **Pages** di repository GitHub tersebut.
3. Pada bagian **Source**, pilih **Deploy from a branch** (pilih branch `main` atau `master`).
4. Klik **Save**. Dalam 1-2 menit, link website arsip romantis kamu akan aktif dan siap dikirimkan ke pasanganmu!
