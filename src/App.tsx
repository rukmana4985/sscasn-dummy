/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  FileText, 
  ChevronRight, 
  ExternalLink, 
  Download, 
  Headset,
  Instagram,
  Facebook,
  Twitter,
  ChevronDown,
  Globe,
  Mail,
  Share2,
  Info,
  Sun,
  Moon,
  Calendar,
  Building,
  Clock,
  CheckCircle,
  Award,
  type LucideIcon,
  LogIn,
  UserPlus,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, ReactNode } from 'react';

// --- Data Types & Mock Data ---

interface FormasiRow {
  no: number;
  instansi: string;
  jabatan: string;
  lokasi: string;
  pendidikan: string;
  jenis: 'Umum' | 'Khusus';
  kuota: number;
}

const FORMASI_DATA: FormasiRow[] = [
  { no: 1, instansi: 'Kemendikbudristek', jabatan: 'Ahli Pertama - Guru Matematika', lokasi: 'SMA Negeri 1 Jakarta', pendidikan: 'S-1 Pendidikan Matematika', jenis: 'Umum', kuota: 2 },
  { no: 2, instansi: 'Kementerian Kesehatan', jabatan: 'Terampil - Perawat', lokasi: 'RSUP Nasional Dr. Cipto Mangunkusumo', pendidikan: 'D-III Keperawatan', jenis: 'Umum', kuota: 15 },
  { no: 3, instansi: 'Kejaksaan Agung', jabatan: 'Ahli Pertama - Jaksa', lokasi: 'Kejaksaan Tinggi Jawa Barat', pendidikan: 'S-1 Hukum', jenis: 'Umum', kuota: 10 },
  { no: 4, instansi: 'Kemenkumham', jabatan: 'Penjaga Tahanan', lokasi: 'Lapas Kelas I Cipinang', pendidikan: 'SMA/Sederajat', jenis: 'Umum', kuota: 50 },
  { no: 5, instansi: 'Pemprov DKI Jakarta', jabatan: 'Ahli Pertama - Pranata Komputer', lokasi: 'Diskominfotik DKI', pendidikan: 'S-1 Sistem Informasi', jenis: 'Umum', kuota: 5 },
  { no: 6, instansi: 'Kementerian Keuangan', jabatan: 'Ahli Pertama - Analis Kebijakan', lokasi: 'Sekretariat Jenderal', pendidikan: 'S-1 Ekonomi / S-1 Hukum', jenis: 'Umum', kuota: 8 },
  { no: 7, instansi: 'BKN', jabatan: 'Ahli Pertama - Auditor Manajemen', lokasi: 'Kanreg II BKN Surabaya', pendidikan: 'S-1 Manajemen', jenis: 'Umum', kuota: 3 },
  { no: 8, instansi: 'Kementerian Agama', jabatan: 'Ahli Pertama - Penghulu', lokasi: 'KUA Kecamatan Gambir', pendidikan: 'S-1 Hukum Keluarga', jenis: 'Umum', kuota: 2 },
  { no: 9, instansi: 'Pemkot Surabaya', jabatan: 'Terampil - Bidan', lokasi: 'Puskesmas Mulyorejo', pendidikan: 'D-III Kebidanan', jenis: 'Umum', kuota: 12 },
  { no: 10, instansi: 'Kementerian PUPR', jabatan: 'Ahli Pertama - Teknik Jalan', lokasi: 'BBPJN', pendidikan: 'S-1 Teknik Sipil', jenis: 'Umum', kuota: 20 },
  { no: 11, instansi: 'Polri', jabatan: 'Tenaga Kesehatan - Dokter Umum', lokasi: 'RS Bhayangkara', pendidikan: 'Profesi Dokter', jenis: 'Umum', kuota: 11 },
  { no: 12, instansi: 'Kementerian Pertanian', jabatan: 'Ahli Pertama - Penyuluh Pertanian', lokasi: 'Dinas Pertanian Jateng', pendidikan: 'S-1 Agroteknologi', jenis: 'Umum', kuota: 10 },
  { no: 13, instansi: 'Mahkamah Agung', jabatan: 'Ahli Pertama - Analis Perkara', lokasi: 'Pengadilan Negeri Bandung', pendidikan: 'S-1 Hukum', jenis: 'Umum', kuota: 15 },
  { no: 14, instansi: 'Kementerian Sosial', jabatan: 'Ahli Pertama - Pekerja Sosial', lokasi: 'PSMP Antasena', pendidikan: 'S-1 Kesejahteraan Sosial', jenis: 'Umum', kuota: 6 },
  { no: 15, instansi: 'Setjen DPR RI', jabatan: 'Ahli Pertama - Risalah Legislatif', lokasi: 'Sekretariat Jenderal', pendidikan: 'S-1 Ilmu Politik', jenis: 'Umum', kuota: 4 },
  { no: 16, instansi: 'Pemprov Jawa Timur', jabatan: 'Ahli Pertama - Guru Bahasa Inggris', lokasi: 'SMK Negeri 1 Surabaya', pendidikan: 'S-1 Pendidikan B. Inggris', jenis: 'Umum', kuota: 8 },
  { no: 17, instansi: 'Kemenhub', jabatan: 'Ahli Pertama - Pengelola Laut', lokasi: 'BPTD', pendidikan: 'S-1 Kelautan', jenis: 'Umum', kuota: 5 },
  { no: 18, instansi: 'BNN', jabatan: 'Ahli Pertama - Konselor Adiksi', lokasi: 'BNN Provinsi Bali', pendidikan: 'S-1 Psikologi', jenis: 'Umum', kuota: 4 },
  { no: 19, instansi: 'Pemkot Bandung', jabatan: 'Ahli Pertama - Arsitek', lokasi: 'Dinas Tata Ruang', pendidikan: 'S-1 Arsitektur', jenis: 'Umum', kuota: 3 },
  { no: 20, instansi: 'Kementerian ESDM', jabatan: 'Ahli Pertama - Inspektur Tambang', lokasi: 'Ditjen Minerba', pendidikan: 'S-1 Teknik Pertambangan', jenis: 'Umum', kuota: 12 },
];

const FAQ_DATA = [
  { q: 'Bagaimana cara mendaftar jika saya lupa password akun tahun lalu?', a: 'Anda dapat menggunakan fitur Lupa Password pada halaman login dengan memasukkan NIK dan email yang terdaftar atau melakukan reset melalui Helpdesk.' },
  { q: 'Apakah saya bisa mendaftar CPNS dan PPPK sekaligus?', a: 'Sesuai regulasi terbaru, pelamar hanya dapat memilih satu jenis pengadaan (CPNS atau PPPK) dan satu formasi jabatan pada satu instansi di satu periode seleksi.' },
  { q: 'Format dokumen apa yang diperbolehkan untuk upload?', a: 'Dokumen biasanya diunggah dalam format PDF dengan ukuran maksimal sesuai yang ditentukan sistem (biasanya 500kb - 1MB). Pastikan dokumen terbaca dengan jelas.' },
  { q: 'Apa yang dimaksud dengan ambang batas (Passing Grade)?', a: 'Ambang batas adalah nilai minimal yang harus dipenuhi oleh setiap peserta seleksi untuk dapat dinyatakan lulus ke tahap berikutnya.' },
  { q: 'Dimana saya bisa melihat lokasi ujian CAT?', a: 'Lokasi ujian dapat dilihat pada kartu peserta ujian yang dicetak setelah masa sanggah seleksi administrasi selesai.' }
];

// --- Sub-components ---

function SectionHeading({ children, className = "", isDark }: { children: ReactNode; className?: string; isDark?: boolean }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-black mb-8 ${isDark ? 'text-blue-400' : 'text-primary'} ${className}`}>
      {children}
    </h2>
  );
}

function StatCard({ label, value, trend, isDark, subValue, isFeatured, icon: Icon }: { label: string; value: string; trend?: string; isDark?: boolean; subValue?: string; isFeatured?: boolean; icon?: LucideIcon }) {
  return (
    <div className={`bento-card relative overflow-hidden group h-full flex flex-col justify-between transition-all duration-500 hover:shadow-2xl ${isFeatured ? (isDark ? 'bg-primary/20 border-primary/30' : 'bg-primary/5 border-primary/10') : (isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100')}`}>
      <div className="flex justify-between items-start z-10">
        <span className={`text-sm font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</span>
        {Icon && (
          <div className={`p-2 rounded-xl transition-colors ${isDark ? 'bg-slate-800 text-blue-400' : 'bg-slate-50 text-primary'}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
      <div className="mt-6 z-10">
        <h3 className={`text-4xl font-black tabular-nums ${isDark ? 'text-white' : 'text-primary'}`}>{value}</h3>
        {subValue && <p className={`text-sm mt-1 font-medium ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{subValue}</p>}
      </div>
      {trend && (
        <div className={`mt-4 pt-4 border-t flex items-center gap-2 font-black text-[10px] uppercase tracking-widest z-10 ${isDark ? 'border-white/5' : 'border-slate-50'}`}>
          {trend.startsWith('+') ? (
            <span className="flex items-center gap-1 text-green-500 bg-green-500/10 px-2 py-1 rounded-md">
              <TrendingUp className="w-3 h-3" />
              {trend}
            </span>
          ) : (
            <span className={`flex items-center gap-1 opacity-60 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {trend}
            </span>
          )}
        </div>
      )}
      
      {/* Subtle Background Icon Decor */}
      {Icon && (
        <Icon className={`absolute -right-8 -bottom-8 w-32 h-32 opacity-[0.03] transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12 ${isDark ? 'text-white' : 'text-primary'}`} />
      )}
    </div>
  );
}

// --- Main Components ---

function Navbar({ isDark, onToggle, activeSection }: { isDark: boolean; onToggle: () => void; activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: 'Beranda', id: 'beranda' },
    { label: 'Formasi Jabatan', id: 'formasi' },
    { label: 'Alur Pendaftaran', id: 'alur' },
    { label: 'FAQ & Bantuan', id: 'faq' },
    { label: 'Kontak Kami', id: 'kontak' },
  ];

  return (
    <nav className={`sticky top-0 z-50 py-4 transition-all ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'} backdrop-blur-xl border-b`}>
      <div className="mx-auto px-4 md:px-12 lg:px-20 max-w-[1800px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
            </svg>
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-primary'}`}>SSCASN</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className={`text-sm font-bold transition-all relative group ${activeSection === item.id ? (isDark ? 'text-blue-400' : 'text-primary') : (isDark ? 'text-slate-500 hover:text-primary' : 'text-slate-600 hover:text-primary')}`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:gap-3">
          <button 
            onClick={onToggle}
            className={`p-2 rounded-full transition-colors ${isDark ? 'text-amber-400 hover:bg-slate-800' : 'text-slate-500 hover:bg-slate-100'}`}
            title="Toggle Theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            <button className={`px-4 lg:px-6 py-2 rounded-full text-sm font-bold transition-colors flex items-center gap-2 ${isDark ? 'text-white hover:bg-slate-800' : 'text-primary hover:bg-slate-100'}`}>
              <LogIn className="w-4 h-4" />
              Masuk
            </button>
            <button className="px-4 lg:px-6 py-2 bg-primary text-white text-sm font-bold rounded-full shadow-md hover:bg-primary-dark transition-all flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              Daftar
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 lg:hidden rounded-xl transition-colors ${isDark ? 'bg-slate-900 text-white border border-slate-800' : 'bg-slate-50 text-primary border border-slate-200'}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden overflow-hidden border-t ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-100'}`}
          >
            <div className="px-4 py-8 space-y-6">
              {menuItems.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-bold transition-all ${activeSection === item.id ? (isDark ? 'text-blue-400' : 'text-primary') : (isDark ? 'text-slate-500' : 'text-slate-600')}`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
                <button className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 ${isDark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-primary'}`}>
                  <LogIn className="w-5 h-5" />
                  Masuk ke Akun
                </button>
                <button className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-lg flex items-center justify-center gap-2">
                  <UserPlus className="w-5 h-5" />
                  Buat Akun Baru
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero({ isDark }: { isDark: boolean }) {
  return (
    <section className="relative overflow-hidden py-24 w-full" id="beranda">
      {/* Advanced Background Decor - Now Full Width */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated Primary Blobs */}
        <motion.div 
          animate={{ 
            x: [0, 150, 0],
            y: [0, 100, 0],
            scale: [1, 1.4, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -top-60 -left-60 w-[800px] h-[800px] rounded-full blur-[160px] opacity-[0.15] ${isDark ? 'bg-blue-600' : 'bg-primary'}`}
        />
        <motion.div 
          animate={{ 
            x: [0, -120, 0],
            y: [0, 150, 0],
            scale: [1, 1.2, 1],
            rotate: [0, -45, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-0 -right-60 w-[700px] h-[700px] rounded-full blur-[160px] opacity-[0.1] ${isDark ? 'bg-indigo-500' : 'bg-secondary'}`}
        />

        {/* Geometric Grid Pattern - Softer & Full Width */}
        <div className={`absolute inset-0 ${isDark ? 'opacity-[0.1]' : 'opacity-[0.08]'}`} 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #3e4093 1px, transparent 1px),
              linear-gradient(to bottom, #3e4093 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 90%)'
          }}>
        </div>

        {/* Abstract Tech Lines - Softer */}
        <svg className={`absolute inset-0 w-full h-full opacity-[0.05] ${isDark ? 'text-white' : 'text-primary'}`} viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            d="M0,20 Q25,10 50,20 T100,20" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.1" 
          />
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
            d="M0,80 Q25,90 50,80 T100,80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.1" 
          />
        </svg>

        {/* Tech Circles Decor */}
        <div className={`absolute top-20 left-10 opacity-30 ${isDark ? 'text-white' : 'text-primary'}`}>
          <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="120" cy="120" r="119" stroke="currentColor" strokeDasharray="12 12" className="animate-spin-slow" />
            <circle cx="120" cy="120" r="80" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="4 4" />
            <circle cx="120" cy="120" r="40" stroke="currentColor" strokeOpacity="0.2" />
          </svg>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-0 transform rotate-180 opacity-[0.05]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[150px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={isDark ? '#FFFFFF' : '#3e4093'}></path>
          </svg>
        </div>

        {/* CPNS Background Overlay (Faded) */}
        <div className="absolute inset-0 -z-20 opacity-[0.03] grayscale transition-opacity duration-1000">
          <img 
            src="./hero_people.png" 
            className="w-full h-full object-cover object-top scale-110 blur-[1px]" 
            alt="Background Overlay" 
          />
        </div>
      </div>

      <div className="mx-auto px-4 md:px-12 lg:px-20 max-w-[1800px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-[1.2] space-y-6 relative z-10"
        >
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${isDark ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-primary/5 text-primary border border-primary/10'}`}>
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Seleksi ASN 2026 Telah Dibuka
        </div>
        <h1 className={`text-3xl md:text-5xl font-black leading-[1.1] ${isDark ? 'text-white' : 'text-primary'}`}>
          Wujudkan Bakti untuk Negeri. <br />
          <span className={isDark ? 'text-secondary' : 'text-secondary-dark'}>Mulai Langkahmu di Sini.</span>
        </h1>
        <p className={`text-sm md:text-lg max-w-xl leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
          Konsep ini adalah proyek pribadi (Personal Project) untuk tujuan edukasi dan portofolio desain. Tidak berafiliasi dengan BKN atau instansi pemerintah terkait.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <button className={`px-8 py-3.5 font-black rounded-full text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group ${isDark ? 'bg-secondary text-primary-dark shadow-secondary/10' : 'bg-secondary text-primary-dark shadow-secondary/20'}`}>
            Buat Akun
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className={`px-8 py-3.5 border-2 font-bold rounded-full text-sm transition-all ${isDark ? 'border-white/10 text-white hover:bg-white hover:text-primary-dark' : 'border-primary/20 text-primary hover:bg-primary hover:text-white'}`}>
            Lihat Alur
          </button>
        </div>
        
        <div className="flex items-center gap-6 pt-6 opacity-60">
          <span className="text-3xl font-black tracking-tighter text-[#003D7C] dark:text-blue-400">BKN</span>
          <div className={`w-px h-6 ${isDark ? 'bg-white/20' : 'bg-black/20'}`}></div>
          <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-primary'}`}>Terverifikasi BKN</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 relative"
      >
        <div className={`mx-auto w-full max-w-[400px] aspect-4/5 rounded-3xl overflow-hidden relative shadow-2xl border-4 ${isDark ? 'bg-slate-800 border-slate-800' : 'bg-slate-100 border-white'}`}>
          <img 
            className="w-full h-full object-cover" 
            src="./hero_people.png" 
            alt="Hero SSCASN People"
          />
          <div className={`absolute inset-0 bg-linear-to-t to-transparent ${isDark ? 'from-slate-950/60' : 'from-primary/20'}`}></div>
        </div>
        
        {/* Floating Decorative Elements */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className={`absolute -bottom-6 -left-6 p-6 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border max-w-[200px] ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}
        >
          <p className={`text-[9px] font-black uppercase tracking-[0.2em] mb-2 ${isDark ? 'text-blue-400' : 'text-primary'}`}>Status Sistem</p>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Berjalan Optimal</span>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className={`absolute top-4 right-2 w-24 h-24 rounded-3xl backdrop-blur-md flex flex-col items-center justify-center border shadow-xl ${isDark ? 'bg-blue-600/30 border-white/10' : 'bg-white/60 border-white/80'}`}
        >
          <span className={`text-2xl font-black ${isDark ? 'text-white' : 'text-primary'}`}>20+</span>
          <span className={`text-[8px] font-black uppercase text-center leading-none ${isDark ? 'text-white/60' : 'text-primary/60'}`}>Tahun <br /> Seleksi</span>
        </motion.div>
      </motion.div>
    </div>
  </section>
  );
}

function Stats({ isDark }: { isDark: boolean }) {
  return (
    <section className={`py-24 relative overflow-hidden mx-auto px-4 md:px-12 lg:px-20 max-w-[1800px] rounded-t-[4rem] border-t transition-all duration-500 -mt-12 z-20 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100 shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.05)]'}`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Real-time Monitoring</span>
          </div>
          <SectionHeading isDark={isDark} className="mb-0 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-primary/10 text-primary'}`}>
              <TrendingUp className="w-7 h-7" />
            </div>
            Statistik Seleksi 2026
          </SectionHeading>
        </div>
        <div className={`px-6 py-3 rounded-2xl border flex items-center gap-4 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100 shadow-sm'}`}>
          <div className="text-right">
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Update Terakhir</p>
            <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-primary'}`}>Hari ini, 17:44 WIB</p>
          </div>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? 'bg-slate-800 text-blue-400' : 'bg-slate-50 text-primary'}`}>
            <Calendar className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard 
          label="Formasi Tersedia" 
          value="1.245.000" 
          trend="+12% dari 2025" 
          isDark={isDark} 
          icon={FileText}
        />
        <StatCard 
          label="Instansi Aktif" 
          value="542" 
          subValue="Pusat & Daerah" 
          isDark={isDark} 
          isFeatured 
          icon={Building}
        />
        <StatCard 
          label="Sudah Mendaftar" 
          value="892.341" 
          trend="+84k hari ini" 
          isDark={isDark} 
          icon={Users}
        />
        
        {/* Modern Countdown Card */}
        <div className={`bento-card relative overflow-hidden border-none shadow-2xl ${isDark ? 'bg-blue-600! shadow-blue-600/20' : 'bg-primary! shadow-primary/20'} group`}>
          <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">Batas Waktu Daftar</span>
              <Clock className="w-4 h-4 text-white/50" />
            </div>
            <div className="mt-4">
              <div className="flex items-end gap-1">
                <span className="text-4xl font-black text-white tabular-nums tracking-tighter">12</span>
                <span className="text-xs font-black text-white/50 mb-1.5 uppercase">Hari</span>
                <span className="text-4xl font-black text-white/30 mx-1">:</span>
                <span className="text-4xl font-black text-white tabular-nums tracking-tighter">04</span>
                <span className="text-xs font-black text-white/50 mb-1.5 uppercase">Jam</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-4 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '65%' }}
                  className="h-full bg-secondary rounded-full"
                ></motion.div>
              </div>
            </div>
            <button className="mt-8 w-full py-3.5 bg-secondary text-primary-dark rounded-full font-black text-xs uppercase tracking-widest transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-lg shadow-black/10">
              Daftar Sekarang
            </button>
          </div>
          {/* Animated background shape */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-3xl blur-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function Timeline({ isDark }: { isDark: boolean }) {
  const steps = [
    { 
      n: 1, 
      label: 'Pendaftaran Akun', 
      desc: 'Langkah awal bagi pelamar untuk membuat akun di portal SSCASN menggunakan data kependudukan yang valid (NIK dan Nomor KK).',
      time: '20 Mei - 15 Juni 2026',
      icon: Users
    },
    { 
      n: 2, 
      label: 'Pemilihan Formasi', 
      desc: 'Pelamar melengkapi biodata dan memilih satu formasi jabatan pada instansi yang dituju sesuai kualifikasi pendidikan.',
      time: '16 Juni - 30 Juni 2026',
      icon: Search
    },
    { 
      n: 3, 
      label: 'Seleksi Administrasi', 
      desc: 'Tahap verifikasi dokumen yang telah diunggah pelamar oleh panitia seleksi instansi masing-masing.',
      time: '1 Juli - 15 Juli 2026',
      icon: FileText
    },
    { 
      n: 4, 
      label: 'SKD (CAT)', 
      desc: 'Ujian Computer Assisted Test yang meliputi Tes Karakteristik Pribadi (TKP), Tes Intelegensia Umum (TIU), dan Tes Wawasan Kebangsaan (TWK).',
      time: '1 Agustus - 14 Agustus 2026',
      icon: Globe
    },
    { 
      n: 5, 
      label: 'SKB', 
      desc: 'Tahap lanjutan bagi peserta yang lolos SKD, berfokus pada kompetensi spesifik bidang jabatan yang dilamar.',
      time: '1 September - 15 September 2026',
      icon: Award
    },
    { 
      n: 6, 
      label: 'Pengumuman Akhir', 
      desc: 'Penetapan hasil kelulusan akhir berdasarkan integrasi nilai SKD dan SKB serta proses pemberkasan NIP.',
      time: '1 Oktober 2026',
      icon: CheckCircle
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="alur">
      {/* Decorative Background Elements */}
      <div className={`absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none ${isDark ? 'invert' : ''}`}
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #3e4093 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }}>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-24">
          <SectionHeading isDark={isDark} className="mb-4">Alur Seleksi Pendaftaran</SectionHeading>
          <p className={`text-sm md:text-base max-w-2xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            Ikuti tahapan seleksi secara berurutan untuk memastikan pendaftaran Anda berjalan lancar dan sesuai prosedur resmi BKN.
          </p>
        </div>
        
        <div className="relative">
          {/* Central Vertical Line (Desktop & Mobile) */}
          <div className={`absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className={`w-full rounded-full ${isDark ? 'bg-blue-600' : 'bg-primary'}`}
            />
          </div>

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.n}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col lg:flex-row items-start lg:items-center justify-between lg:mb-32 last:mb-0 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content Card */}
                <div className="w-full lg:w-[44%] pl-16 lg:pl-0">
                  <div className={`p-6 md:p-10 rounded-3xl border relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)]'}`}>
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                        <div className={`w-fit p-3 rounded-2xl ${isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-primary/10 text-primary'}`}>
                          <step.icon className="w-6 h-6" />
                        </div>
                        <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 w-fit ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-50 text-slate-500'}`}>
                          <Clock className="w-3.5 h-3.5" />
                          {step.time}
                        </div>
                      </div>
                      
                      <h3 className={`text-xl md:text-2xl font-black mb-4 ${isDark ? 'text-white' : 'text-primary'}`}>
                        {step.label}
                      </h3>
                      <p className={`text-xs md:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Central Point */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-lg lg:text-xl font-black border-4 transition-all duration-500 hover:scale-110 ${isDark ? 'bg-blue-600 text-white border-slate-950 shadow-xl shadow-blue-600/40' : 'bg-primary text-white border-white shadow-xl shadow-primary/40'}`}>
                    {step.n}
                  </div>
                </div>

                {/* Empty Side (for alignment) */}
                <div className="hidden lg:block lg:w-[44%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormasiSearch({ isDark }: { isDark: boolean }) {
  const [activePage, setActivePage] = useState(1);

  return (
    <section className="py-24 mx-auto px-4 md:px-12 lg:px-20 max-w-[1800px]" id="formasi">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-8 md:p-16 rounded-3xl border relative overflow-hidden transition-all duration-500 ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.04)]'}`}
      >
        {/* Decorative background blur */}
        <div className={`absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-10 rounded-full ${isDark ? 'bg-blue-600' : 'bg-primary'}`}></div>
        <div className={`absolute -bottom-24 -left-24 w-64 h-64 blur-[100px] opacity-10 rounded-full ${isDark ? 'bg-indigo-600' : 'bg-secondary'}`}></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-primary/5 text-primary'}`}>
                <Search className="w-3 h-3" />
                Smart Filtering System
              </div>
              <h2 className={`text-3xl md:text-4xl font-black mb-3 ${isDark ? 'text-white' : 'text-primary'}`}>
                Pencarian Formasi
              </h2>
              <p className={`text-sm md:text-base font-medium ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Temukan formasi impianmu dengan filter cerdas yang akurat dan transparan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Periode */}
            <div className="space-y-3">
              <label className={`text-[10px] font-black uppercase tracking-[0.2em] ml-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Periode</label>
              <div className="relative group">
                <Calendar className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${isDark ? 'text-slate-500 group-focus-within:text-blue-400' : 'text-slate-400 group-focus-within:text-primary'}`} />
                <select className={`w-full pl-12 pr-4 py-4 rounded-2xl text-sm font-bold outline-none transition-all appearance-none cursor-pointer border ${isDark ? 'bg-slate-800 border-slate-700 text-white focus:ring-4 focus:ring-blue-500/10' : 'bg-slate-50 border-slate-200 text-primary focus:bg-white focus:ring-4 focus:ring-primary/10'}`}>
                  <option>2026</option>
                  <option>2025 (Arsip)</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 pointer-events-none" />
              </div>
            </div>

            {/* Jenjang */}
            <div className="space-y-3">
              <label className={`text-[10px] font-black uppercase tracking-[0.2em] ml-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Jenjang</label>
              <div className="relative group">
                <Globe className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${isDark ? 'text-slate-500 group-focus-within:text-blue-400' : 'text-slate-400 group-focus-within:text-primary'}`} />
                <select className={`w-full pl-12 pr-4 py-4 rounded-2xl text-sm font-bold outline-none transition-all appearance-none cursor-pointer border ${isDark ? 'bg-slate-800 border-slate-700 text-white focus:ring-4 focus:ring-blue-500/10' : 'bg-slate-50 border-slate-200 text-primary focus:bg-white focus:ring-4 focus:ring-primary/10'}`}>
                  <option>Semua Jenjang</option>
                  <option>D-III</option>
                  <option>S-1 / D-IV</option>
                  <option>S-2 / S-3</option>
                  <option>SMA/Sederajat</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 pointer-events-none" />
              </div>
            </div>

            {/* Prodi */}
            <div className="space-y-3">
              <label className={`text-[10px] font-black uppercase tracking-[0.2em] ml-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Program Studi</label>
              <div className="relative group">
                <Award className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${isDark ? 'text-slate-500 group-focus-within:text-blue-400' : 'text-slate-400 group-focus-within:text-primary'}`} />
                <input type="text" placeholder="Ketik Prodi..." className={`w-full pl-12 pr-4 py-4 rounded-2xl text-sm font-bold outline-none transition-all border ${isDark ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-600 focus:ring-4 focus:ring-blue-500/10' : 'bg-slate-50 border-slate-200 text-primary placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-primary/10'}`} />
              </div>
            </div>

            {/* Instansi */}
            <div className="space-y-3">
              <label className={`text-[10px] font-black uppercase tracking-[0.2em] ml-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Instansi</label>
              <div className="relative group">
                <Building className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${isDark ? 'text-slate-500 group-focus-within:text-blue-400' : 'text-slate-400 group-focus-within:text-primary'}`} />
                <input type="text" placeholder="Ketik Instansi..." className={`w-full pl-12 pr-4 py-4 rounded-2xl text-sm font-bold outline-none transition-all border ${isDark ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-600 focus:ring-4 focus:ring-blue-500/10' : 'bg-slate-50 border-slate-200 text-primary placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-primary/10'}`} />
              </div>
            </div>

            {/* Jenis */}
            <div className="space-y-3">
              <label className={`text-[10px] font-black uppercase tracking-[0.2em] ml-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Jenis Pengadaan</label>
              <div className="relative group">
                <FileText className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${isDark ? 'text-slate-500 group-focus-within:text-blue-400' : 'text-slate-400 group-focus-within:text-primary'}`} />
                <select className={`w-full pl-12 pr-4 py-4 rounded-2xl text-sm font-bold outline-none transition-all appearance-none cursor-pointer border ${isDark ? 'bg-slate-800 border-slate-700 text-white focus:ring-4 focus:ring-blue-500/10' : 'bg-slate-50 border-slate-200 text-primary focus:bg-white focus:ring-4 focus:ring-primary/10'}`}>
                  <option>Semua</option>
                  <option>CPNS</option>
                  <option>PPPK</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className={`mt-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t pt-10 ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
             <div className="flex items-center gap-3">
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <div key={i} className={`w-8 h-8 rounded-full border-2 ${isDark ? 'bg-slate-800 border-slate-900' : 'bg-slate-100 border-white'} flex items-center justify-center`}>
                     <Users className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-primary'}`} />
                   </div>
                 ))}
               </div>
               <p className={`text-xs font-bold ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                 <span className={isDark ? 'text-white' : 'text-primary'}>892k+</span> Pelamar sudah mencari hari ini
               </p>
             </div>
             <button className={`w-full md:w-auto px-12 py-4 rounded-full font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl ${isDark ? 'bg-blue-600 text-white shadow-blue-600/30' : 'bg-primary text-white shadow-primary/30 hover:bg-primary-dark'}`}>
               <Search className="w-5 h-5" />
               Cari Formasi Sekarang
             </button>
          </div>
        </div>
      </motion.div>

      <div className={`mt-12 rounded-3xl border overflow-hidden transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.04)]'}`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className={`font-bold ${isDark ? 'bg-slate-800/50 text-slate-400' : 'bg-slate-50 text-slate-500'}`}>
              <tr>
                <th className={`px-8 py-5 border-b text-center w-12 font-black uppercase tracking-widest text-[10px] ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>No</th>
                <th className={`px-8 py-5 border-b font-black uppercase tracking-widest text-[10px] ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>Instansi</th>
                <th className={`px-8 py-5 border-b font-black uppercase tracking-widest text-[10px] ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>Jabatan</th>
                <th className={`px-8 py-5 border-b font-black uppercase tracking-widest text-[10px] ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>Lokasi</th>
                <th className={`px-8 py-5 border-b font-black uppercase tracking-widest text-[10px] ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>Pendidikan</th>
                <th className={`px-8 py-5 border-b text-center font-black uppercase tracking-widest text-[10px] ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>Jenis</th>
                <th className={`px-8 py-5 border-b text-center font-black uppercase tracking-widest text-[10px] ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>Kuota</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${isDark ? 'divide-slate-800' : 'divide-slate-100'}`}>
              {FORMASI_DATA.map((row) => (
                <tr key={row.no} className={`transition-colors group ${isDark ? 'hover:bg-slate-800/30' : 'hover:bg-slate-50/50'}`}>
                  <td className={`px-8 py-5 text-center font-bold text-slate-400 transition-colors ${isDark ? 'group-hover:text-blue-400' : 'group-hover:text-primary'}`}>{row.no}</td>
                  <td className={`px-8 py-5 font-black text-base ${isDark ? 'text-white' : 'text-primary'}`}>{row.instansi}</td>
                  <td className={`px-8 py-5 font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{row.jabatan}</td>
                  <td className={`px-8 py-5 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{row.lokasi}</td>
                  <td className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-tight">{row.pendidikan}</td>
                  <td className="px-8 py-5 text-center">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-500/10 text-green-600'}`}>{row.jenis}</span>
                  </td>
                  <td className={`px-8 py-5 text-center font-black text-lg ${isDark ? 'text-blue-400' : 'text-primary'}`}>{row.kuota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={`px-8 py-6 flex flex-col sm:flex-row items-center justify-between border-t gap-6 ${isDark ? 'bg-slate-800/30 border-slate-800' : 'bg-slate-50/50 border-slate-100'}`}>
          <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Menampilkan 20 dari 1,245,000 data formasi</span>
          <div className="flex gap-2">
            {[1, 2, 3, '...', 622].map((p, i) => (
              <button 
                key={i}
                onClick={() => typeof p === 'number' && setActivePage(p)}
                className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all text-xs font-black ${activePage === p ? (isDark ? 'bg-blue-600 border-blue-600 text-white shadow-blue-600/20 scale-110' : 'bg-primary border-primary text-white shadow-primary/20 scale-110') : p === '...' ? 'border-transparent cursor-default text-slate-400' : (isDark ? 'bg-slate-900 border-slate-700 text-slate-400 hover:border-blue-400' : 'bg-white border-slate-200 text-slate-600 hover:border-primary/50')}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsSection({ isDark }: { isDark: boolean }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const announcements = [
    {
      tag: 'Pengumuman Resmi',
      title: 'Jadwal Pelaksanaan Seleksi Kompetensi Dasar (SKD) CPNS 2026',
      desc: 'Simak jadwal lengkap pelaksanaan SKD di berbagai titik lokasi di seluruh Indonesia untuk persiapan yang lebih matang.',
      date: '14 Okt 2025',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop'
    },
    {
      tag: 'Siaran Pers',
      title: 'Penyesuaian Sistem CAT BKN untuk Seleksi Tahun 2026',
      desc: 'BKN melakukan pembaruan sistem CAT untuk meningkatkan keamanan dan transparansi seleksi berbasis teknologi tinggi.',
      date: '13 Okt 2025',
      img: 'https://images.unsplash.com/photo-1454165833767-027ffea9e78a?q=80&w=800&auto=format&fit=crop'
    },
    {
      tag: 'Info Penting',
      title: 'Batas Akhir Sanggah Hasil Seleksi Administrasi',
      desc: 'Peserta yang tidak lolos seleksi administrasi diingatkan untuk segera mengajukan sanggah sebelum batas waktu berakhir.',
      date: '12 Okt 2025',
      img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const newsItems = [
    { title: 'Panduan Lengkap Pendaftaran PPPK Tenaga Teknis 2026', date: '12 Okt 2025', tag: 'Kebijakan' },
    { title: '5 Hal yang Sering Menyebabkan Gagal Seleksi Administrasi', date: '10 Okt 2025', tag: 'Tips & Trik' },
    { title: 'Daftar Instansi dengan Kuota Terbanyak di Jawa Barat', date: '08 Okt 2025', tag: 'Statistik' },
    { title: 'Peluang Karir di Kementerian Luar Negeri Tahun 2026', date: '05 Okt 2025', tag: 'Karir' }
  ];

  return (
    <section className="py-32 relative" id="berita">
      {/* Background Decor */}
      <div className={`absolute inset-0 -z-10 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className={`absolute top-0 right-0 w-1/2 h-1/2 opacity-[0.03] ${isDark ? 'invert' : ''}`}
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, #3e4093 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}>
        </div>
        <div className={`absolute -bottom-24 -left-24 w-96 h-96 blur-[120px] opacity-10 rounded-full ${isDark ? 'bg-blue-600' : 'bg-primary'}`}></div>
      </div>

      <div className="mx-auto px-4 md:px-12 lg:px-20 max-w-[1800px]">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-primary/5 text-primary'}`}>
              <Globe className="w-3 h-3" />
              Pusat Informasi Terintegrasi
            </div>
            <SectionHeading isDark={isDark} className="mb-0">Berita & Pengumuman</SectionHeading>
          </div>
          <button className={`px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all ${isDark ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-white text-primary border border-slate-100 shadow-sm hover:shadow-md'}`}>
            Lihat Semua Berita
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side: Announcement Slider */}
          <div className="lg:col-span-2 space-y-8">
            <div className={`relative aspect-4/5 sm:aspect-21/9 rounded-3xl overflow-hidden border shadow-2xl ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <img src={announcements[activeSlide].img} className="w-full h-full object-cover" alt="Announcement" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-3/4">
                    <span className="px-3 py-1 bg-secondary text-primary-dark rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
                      {announcements[activeSlide].tag}
                    </span>
                    <h3 className="text-xl md:text-4xl font-black text-white mb-4 leading-tight">
                      {announcements[activeSlide].title}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base line-clamp-2 mb-2 font-medium">
                      {announcements[activeSlide].desc}
                    </p>
                    <div className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-widest">
                      <Calendar className="w-4 h-4" />
                      {announcements[activeSlide].date}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Dots - Moved below the image for better visibility */}
            <div className="flex justify-center gap-3">
              {announcements.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveSlide(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${activeSlide === i ? 'w-10 bg-secondary shadow-lg shadow-secondary/30' : 'w-2 bg-slate-300 dark:bg-slate-700'}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side: News List */}
          <div className="space-y-8">
            <h4 className={`text-xl font-black flex items-center gap-3 ${isDark ? 'text-white' : 'text-primary'}`}>
              <TrendingUp className="w-6 h-6 text-secondary" />
              Berita Terpopuler
            </h4>
            <div className="space-y-4">
              {newsItems.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className={`p-6 rounded-3xl border cursor-pointer transition-all flex flex-col gap-3 group ${isDark ? 'bg-slate-900 border-slate-800 hover:border-blue-400/30' : 'bg-white border-slate-100 hover:border-primary/20 shadow-sm'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-50 text-slate-500'}`}>
                      {item.tag}
                    </span>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.date}</span>
                  </div>
                  <h5 className={`font-black text-sm leading-snug group-hover:text-secondary transition-colors ${isDark ? 'text-white' : 'text-primary'}`}>
                    {item.title}
                  </h5>
                  <div className={`w-0 h-0.5 bg-secondary transition-all group-hover:w-full`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ isDark }: { isDark: boolean }) {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section className="py-24 mx-auto px-4 md:px-12 lg:px-20 max-w-[1400px]" id="faq">
      <SectionHeading isDark={isDark} className="text-center">Pertanyaan Sering Diajukan (FAQ)</SectionHeading>
      <div className="space-y-6">
        {FAQ_DATA.map((item, i) => (
          <div key={i} className={`rounded-3xl overflow-hidden shadow-sm transition-all border ${isDark ? 'bg-slate-900 border-slate-800 hover:border-blue-400/30' : 'bg-white border-slate-100 hover:border-primary/20'}`}>
            <button 
              onClick={() => setOpen(open === i ? null : i)}
              className={`w-full px-10 py-6 text-left font-black flex items-center justify-between transition-colors ${isDark ? 'text-blue-400 hover:bg-slate-800/50' : 'text-primary hover:bg-slate-50'}`}
            >
              <span className="pr-8">{item.q}</span>
              <div className={`p-2 rounded-full transition-all ${open === i ? (isDark ? 'bg-blue-600 text-white rotate-180 shadow-lg' : 'bg-primary text-white rotate-180 shadow-lg') : (isDark ? 'bg-slate-800 text-blue-400' : 'bg-slate-100 text-primary')}`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className={`px-10 pb-10 text-base leading-relaxed pt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`mt-24 relative overflow-hidden p-12 md:p-20 rounded-3xl border text-center transition-all duration-500 ${isDark ? 'bg-slate-900/80 border-slate-800 shadow-2xl shadow-blue-600/10' : 'bg-primary border-primary shadow-2xl shadow-primary/20'}`}
      >
        {/* Advanced Background Decor */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute -top-24 -right-24 w-96 h-96 blur-[120px] opacity-20 rounded-full ${isDark ? 'bg-blue-600' : 'bg-white'}`}></div>
          <div className={`absolute -bottom-24 -left-24 w-96 h-96 blur-[120px] opacity-20 rounded-full ${isDark ? 'bg-indigo-600' : 'bg-secondary'}`}></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative z-10">
          <div className={`w-24 h-24 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-6 ${isDark ? 'bg-blue-600 text-white shadow-blue-600/30' : 'bg-white text-primary shadow-white/20'}`}>
            <Headset className="w-12 h-12" />
          </div>
          
          <div className="space-y-6 mb-12">
            <h3 className="text-3xl md:text-6xl font-black text-white leading-tight">
              Masih Butuh Bantuan?
            </h3>
            <p className={`text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-white/70'}`}>
              Jangan ragu untuk menghubungi kami. Tim Helpdesk BKN siap melayani pertanyaan teknis Anda seputar portal SSCASN 2026.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className={`w-full sm:w-auto px-12 py-5 font-black rounded-full shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3 group ${isDark ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-secondary text-primary-dark hover:bg-white hover:scale-105'}`}>
              <Headset className="w-6 h-6" />
              Hubungi Pusat Layanan
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className={`w-full sm:w-auto px-12 py-5 font-black rounded-full transition-all border flex items-center justify-center gap-3 ${isDark ? 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-600' : 'border-white/20 text-white hover:bg-white/10'}`}>
              <Globe className="w-6 h-6" />
              Portal Helpdesk Resmi
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary-dark dark:bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5" id="kontak">
      <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-white/5 blur-[120px] rounded-full"></div>
      
      <div className="mx-auto px-4 md:px-12 lg:px-20 max-w-[1800px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-[1.25rem] flex items-center justify-center text-primary shadow-2xl shadow-white/10">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                </svg>
              </div>
              <span className="text-3xl font-black tracking-tighter">SSCASN</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs font-medium">
              Sistem Seleksi Calon Aparatur Sipil Negara (SSCASN) adalah portal resmi pendaftaran ASN nasional yang transparan dan akuntabel.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-black border-l-4 border-secondary pl-4">Badan Kepegawaian Negara</p>
              <p className="text-sm text-white/40 pl-5 font-bold">Jl. Mayjen Sutoyo No. 12, Cililitan, Jakarta Timur 13640</p>
            </div>
          </div>
          
          <div>
            <h5 className="font-black text-lg mb-8 text-white uppercase tracking-widest text-[12px]">Menu Utama</h5>
            <ul className="space-y-4 text-sm text-white/50 group font-bold">
              {['Beranda', 'Alur Pendaftaran', 'Formasi Jabatan', 'FAQ & Bantuan', 'Kontak Kami'].map(link => (
                <li key={link}><a href="#" className="hover:text-secondary hover:translate-x-2 inline-block transition-all">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-black text-lg mb-8 text-white uppercase tracking-widest text-[12px]">Mobile Portal</h5>
            <p className="text-sm text-white/50 mb-8 leading-relaxed font-medium">Dapatkan kemudahan akses pendaftaran langsung dari genggaman Anda.</p>
            <div className="flex flex-col gap-4">
              <a href="#" className="inline-block transition-transform hover:scale-105 active:scale-95">
                <img src="/google-play-badge.png" className="h-[56px] object-contain" alt="Get it on Google Play" />
              </a>
              <a href="#" className="inline-block transition-transform hover:scale-105 active:scale-95 pl-1.5">
                <img src="/app-store-badge.svg" className="h-[40px] object-contain" alt="Download on the App Store" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-black text-lg mb-8 text-white uppercase tracking-widest text-[12px]">Dukungan</h5>
            <div className="flex gap-4 mb-10">
              {[Instagram, Facebook, Twitter, Globe].map((Icon, i) => (
                <button key={i} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-secondary transition-all group shadow-xl">
                  <Icon className="w-6 h-6 text-white/60 group-hover:text-primary-dark" />
                </button>
              ))}
            </div>
            <div className="bg-secondary p-8 rounded-4xl relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-24 h-24 bg-white/20 rounded-full blur-2xl transition-all group-hover:scale-150"></div>
              <p className="text-[10px] font-black text-primary-dark mb-2 uppercase tracking-[0.2em] relative z-10 opacity-70">Layanan Helpdesk 24/7</p>
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-2 bg-primary-dark rounded-xl text-white">
                  <Headset className="w-5 h-5" />
                </div>
                <p className="text-2xl font-black text-primary-dark">021-80887009</p>
              </div>
              <p className="text-[10px] text-primary-dark/40 mt-4 font-black relative z-10 italic uppercase tracking-widest">
                Senin - Jumat | 08:00 - 16:00 WIB
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black tracking-[0.3em] text-white/20 uppercase">
          <p>© 2026 Project SSCASN Redesign by <a href="https://rukmana.vercel.app" target="_blank" rel="noopener noreferrer" className="text-secondary">@rukmana4985</a> | All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms</a>
            <a href="#" className="hover:text-secondary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}



export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'formasi', 'alur', 'faq', 'kontak'];
      const scrollPosition = window.scrollY + 200;

      // Force 'kontak' active if at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('kontak');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-surface-dark text-slate-100 dark' : 'bg-surface text-slate-900'} flex flex-col`}>
      <Navbar isDark={isDark} onToggle={() => setIsDark(!isDark)} activeSection={activeSection} />
      
      <main className="w-full animate-in fade-in duration-1000">
        <Hero isDark={isDark} />
        
        <Stats isDark={isDark} />

        <FormasiSearch isDark={isDark} />
        <Timeline isDark={isDark} />
        <NewsSection isDark={isDark} />
        <FAQ isDark={isDark} />

        <section className="py-24 mx-auto px-4 md:px-12 lg:px-20 max-w-[1800px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -8 }} className={`bento-card text-center flex flex-col items-center group ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.04)]'}`}>
            <div className={`w-20 h-20 rounded-4xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-primary'}`}>
              <FileText className="w-10 h-10" />
            </div>
            <h3 className={`text-xl md:text-2xl font-black mb-4 ${isDark ? 'text-white' : 'text-primary'}`}>Ketentuan Umum</h3>
            <p className={`text-sm md:text-base mb-10 leading-relaxed px-6 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Pahami syarat dasar, batas usia, dan kualifikasi yang dibutuhkan sebelum mendaftar.</p>
            <a href="#" className={`mt-auto font-black uppercase tracking-widest text-[11px] flex items-center gap-2 group py-3 px-6 rounded-full transition-all border ${isDark ? 'text-blue-400 border-blue-400/20 hover:bg-blue-400/10' : 'text-primary border-primary/10 hover:bg-primary/5'}`}>
              Pelajari Selengkapnya 
              <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className={`bento-card text-center flex flex-col items-center group ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.04)]'}`}>
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-4xl flex items-center justify-center mb-8 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 ${isDark ? 'bg-secondary/10 text-secondary' : 'bg-secondary/10 text-secondary-dark'}`}>
              <Download className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h3 className={`text-xl md:text-2xl font-black mb-4 ${isDark ? 'text-white' : 'text-primary'}`}>Dokumen Wajib</h3>
            <p className={`text-sm md:text-base mb-10 leading-relaxed px-6 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Persiapkan file digital Anda sesuai format dan ukuran yang ditentukan sistem agar tidak gagal verifikasi.</p>
            <a href="#" className={`mt-auto font-black uppercase tracking-widest text-[11px] flex items-center gap-2 group py-3 px-6 rounded-full transition-all border ${isDark ? 'text-blue-400 border-blue-400/20 hover:bg-blue-400/10' : 'text-primary border-primary/10 hover:bg-primary/5'}`}>
              Unduh Checklist 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className={`bento-card text-center flex flex-col items-center group ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.04)]'}`}>
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-4xl flex items-center justify-center mb-8 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-50 text-slate-700'}`}>
              <Headset className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h3 className={`text-xl md:text-2xl font-black mb-4 ${isDark ? 'text-white' : 'text-primary'}`}>Pusat Bantuan</h3>
            <p className={`text-sm md:text-base mb-10 leading-relaxed px-6 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Layanan helpdesk 24/7 dan simulasi CAT (Computer Assisted Test) untuk persiapan ujian yang matang.</p>
            <a href="#" className={`mt-auto font-black uppercase tracking-widest text-[11px] flex items-center gap-2 group py-3 px-6 rounded-full transition-all border ${isDark ? 'text-blue-400 border-blue-400/20 hover:bg-blue-400/10' : 'text-primary border-primary/10 hover:bg-primary/5'}`}>
              Hubungi Kami 
              <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
