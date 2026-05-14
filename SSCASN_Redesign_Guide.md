# SSCASN Redesign Concept - Landing Page

## 1. Brand Identity & Color Palette

Berdasarkan analisis logo SSCASN, berikut adalah panduan warna utama untuk diimplementasikan pada desain:

### Primary Colors

- **Deep Royal Blue (`#3F479B`):** Gunakan sebagai warna dominan pada Header, Footer, dan Primary Button. Memberikan kesan formal, stabil, dan terpercaya.
- **Vibrant Amber (`#FDB813`):** Gunakan sebagai warna aksen untuk Call-to-Action (CTA) utama, ikon status penting, dan elemen penarik perhatian.

### Secondary & Neutrals

- **Soft Gold (`#FFCC33`):** Digunakan untuk gradasi ringan atau elemen dekoratif pendukung agar tampilan tidak terlalu flat.
- **Off-White Background (`#F8F9FA`):** Warna latar belakang utama untuk menjaga mata user tetap nyaman (anti-fatigue).
- **Deep Charcoal (`#2D3436`):** Warna teks utama untuk memastikan tingkat keterbacaan (readability) yang tinggi.

### Typography (Saran)

- **Heading:** Plus Jakarta Sans (Bold)
- **Body:** Inter (Regular/Medium)

---

## 2. Design Concept

- **Modern Bureaucracy:** Menghilangkan kesan kaku pemerintahan menjadi portal teknologi yang modern dan user-friendly.
- **Accessibility First:** Kontras warna tinggi dan navigasi yang intuitif untuk semua kalangan.
- **Bento Grid Architecture:** Menggunakan sistem grid untuk menampilkan informasi yang padat (jadwal, statistik, info terbaru) tanpa terlihat berantakan.

---

## 3. Section Breakdown (Landing Page)

### Section 1: Navigation Bar (Sticky)

- **Left:** Logo SSCASN (Redesigned with padding)
- **Center:** Nav Link (Beranda, Alur, Formasi, FAQ, Kontak)
- **Right:** Button Group (Masuk / Buat Akun)

### Section 2: Hero Section (The "Hook")

- **Headline:** "Wujudkan Bakti untuk Negeri. Mulai Langkahmu di Sini."
- **Sub-headline:** Portal resmi pendaftaran Calon Aparatur Sipil Negara 2026. Transparan, Akuntabel, dan Modern.
- **Main CTA:** Button "Buat Akun Sekarang" (Amber `#FDB813`)
- **Secondary CTA:** "Lihat Alur Pendaftaran" (Outline Blue)
- **Background:** Ilustrasi abstrak minimalis dengan node-link (mirip pola logo).

### Section 3: Live Statistics Dashboard (Bento Style)

Grid yang menampilkan data real-time:

- Card 1: Total Formasi Tersedia
- Card 2: Instansi Aktif
- Card 3: Jumlah Pendaftar Terverifikasi
- Card 4: Countdown Penutupan Pendaftaran (Urgent element)

### Section 4: Interactive Timeline Selection

Visualisasi alur seleksi yang bisa diklik:

1. Pendaftaran Akun -> 2. Pemilihan Formasi -> 3. Seleksi Administrasi -> 4. SKD -> 5. SKB -> 6. Pengumuman Akhir.

### Section 5: Smart Formasi Search (Interactive Component)

Visualisasi filter pencarian yang modern dan responsif:

<div style="background: #f0f5ff; padding: 24px; border-radius: 16px; font-family: 'Inter', sans-serif; margin-bottom: 24px;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; align-items: end;">
        <div>
            <label style="display: block; font-size: 12px; font-weight: 700; color: #3f479b; margin-bottom: 8px;">Periode</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 8px; background: white; font-size: 14px;">
                <option>2026</option>
            </select>
        </div>
        <div>
            <label style="display: block; font-size: 12px; font-weight: 700; color: #3f479b; margin-bottom: 8px;">Jenjang Pendidikan</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 8px; background: white; color: #9ca3af; font-size: 14px;">
                <option>-- Pilih Jenjang Pendidikan --</option>
            </select>
        </div>
        <div>
            <label style="display: block; font-size: 12px; font-weight: 700; color: #3f479b; margin-bottom: 8px;">Program Studi</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 8px; background: white; color: #9ca3af; font-size: 14px;">
                <option>-- Pilih Program Studi --</option>
            </select>
        </div>
        <div>
            <label style="display: block; font-size: 12px; font-weight: 700; color: #3f479b; margin-bottom: 8px;">Instansi</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 8px; background: white; color: #9ca3af; font-size: 14px;">
                <option>-- Pilih Instansi --</option>
            </select>
        </div>
        <div>
            <label style="display: block; font-size: 12px; font-weight: 700; color: #3f479b; margin-bottom: 8px;">Jenis Pengadaan</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 8px; background: white; color: #9ca3af; font-size: 14px;">
                <option>-- Pilih Jenis Pengadaan --</option>
            </select>
        </div>
        <button style="background: #2563eb; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 14px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            CARI
        </button>
    </div>
    <p style="color: #ef4444; font-size: 12px; margin-top: 16px; text-align: center; font-weight: 500;">
        Untuk PPPK Guru Cukup Memilih Instansi dan Jenis Pengadaan
    </p>
</div>

---

### Section 5.1: Data Formasi (Dummy Data - 20 Entries)

Tabel hasil pencarian dengan desain _clean_ dan _high-readability_:

| No  | Instansi              | Jabatan                              | Lokasi                               | Pendidikan                | Jenis | Kuota |
| :-: | :-------------------- | :----------------------------------- | :----------------------------------- | :------------------------ | :---: | :---: |
|  1  | Kemendikbudristek     | Ahli Pertama - Guru Matematika       | SMA Negeri 1 Jakarta                 | S-1 Pendidikan Matematika | Umum  |   2   |
|  2  | Kementerian Kesehatan | Terampil - Perawat                   | RSUP Nasional Dr. Cipto Mangunkusumo | D-III Keperawatan         | Umum  |  15   |
|  3  | Kejaksaan Agung       | Ahli Pertama - Jaksa                 | Kejaksaan Tinggi Jawa Barat          | S-1 Hukum                 | Umum  |  10   |
|  4  | Kemenkumham           | Penjaga Tahanan                      | Lapas Kelas I Cipinang               | SMA/Sederajat             | Umum  |  50   |
|  5  | Pemprov DKI Jakarta   | Ahli Pertama - Pranata Komputer      | Diskominfotik DKI                    | S-1 Sistem Informasi      | Umum  |   5   |
|  6  | Kementerian Keuangan  | Ahli Pertama - Analis Kebijakan      | Sekretariat Jenderal                 | S-1 Ekonomi / S-1 Hukum   | Umum  |   8   |
|  7  | BKN                   | Ahli Pertama - Auditor Manajemen ASN | Kanreg II BKN Surabaya               | S-1 Manajemen             | Umum  |   3   |
|  8  | Kementerian Agama     | Ahli Pertama - Penghulu              | KUA Kecamatan Gambir                 | S-1 Hukum Keluarga        | Umum  |   2   |
|  9  | Pemkot Surabaya       | Terampil - Bidan                     | Puskesmas Mulyorejo                  | D-III Kebidanan           | Umum  |  12   |
| 10  | Kementerian PUPR      | Ahli Pertama - Teknik Jalan          | BBPJN                                | S-1 Teknik Sipil          | Umum  |  20   |
| 11  | Polri                 | Tenaga Kesehatan - Dokter Umum       | RS Bhayangkara                       | Profesi Dokter            | Umum  |   5   |
| 12  | Kementerian Pertanian | Ahli Pertama - Penyuluh Pertanian    | Dinas Pertanian Jateng               | S-1 Agroteknologi         | Umum  |  10   |
| 13  | Mahkamah Agung        | Ahli Pertama - Analis Perkara        | Pengadilan Negeri Bandung            | S-1 Hukum                 | Umum  |  15   |
| 14  | Kementerian Sosial    | Ahli Pertama - Pekerja Sosial        | PSMP Antasena                        | S-1 Kesejahteraan Sosial  | Umum  |   6   |
| 15  | Setjen DPR RI         | Ahli Pertama - Risalah Legislatif    | Sekretariat Jenderal                 | S-1 Ilmu Politik          | Umum  |   4   |
| 16  | Pemprov Jawa Timur    | Ahli Pertama - Guru Bahasa Inggris   | SMK Negeri 1 Surabaya                | S-1 Pendidikan B. Inggris | Umum  |   8   |
| 17  | Kemenhub              | Ahli Pertama - Pengelola Laut        | BPTD                                 | S-1 Kelautan              | Umum  |   5   |
| 18  | BNN                   | Ahli Pertama - Konselor Adiksi       | BNN Provinsi Bali                    | S-1 Psikologi             | Umum  |   4   |
| 19  | Pemkot Bandung        | Ahli Pertama - Arsitek               | Dinas Tata Ruang                     | S-1 Arsitektur            | Umum  |   3   |
| 20  | Kementerian ESDM      | Ahli Pertama - Inspektur Tambang     | Ditjen Minerba                       | S-1 Teknik Pertambangan   | Umum  |  12   |

### Section 6: Information Cards (Knowledge Base)

Tiga kartu utama dengan ikon modern:

- **Ketentuan Umum:** Apa saja syarat dasarnya?
- **Dokumen Wajib:** Checklist file yang harus disiapkan.
- **Pusat Bantuan:** Helpdesk dan simulasi CAT.

### Section 7: News & Updates (Blog Style)

Grid berita terbaru mengenai kebijakan seleksi, tips ujian, dan pengumuman resmi instansi.

### Section 8: FAQ & Help Center (Accordion)

Daftar pertanyaan yang paling sering ditanyakan (Top 5 FAQ) dengan visual yang bersih.

### Section 9: Footer (Comprehensive)

- **Column 1:** Logo SSCASN & Deskripsi singkat BKN.
- **Column 2:** Link Penting (Visi Misi, Struktur Organisasi, Kontak Kami).
- **Column 3:** Media Sosial & Aplikasi Mobile (PlayStore/AppStore links).
- **Bottom Bar:** Copyright & Privacy Policy.

---

## 4. Layout Strategy

- **Z-Pattern Layout:** Untuk mengarahkan mata user dari Headline ke CTA.
- **Whitespace:** Memberikan ruang antar section minimal 120px untuk menghindari kesan sesak.
- **Mobile Responsive:** Semua grid harus stack secara vertikal dengan rapi pada resolusi < 768px.
