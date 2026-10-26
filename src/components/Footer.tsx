import React from 'react';
import { Scale, Mail, Phone, MapPin, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050D1A] text-slate-400 text-xs py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Address Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA8C2C] flex items-center justify-center text-[#050D1A] font-bold shadow-md">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="text-base font-extrabold text-white block leading-none font-heading">
                  HADJWINA
                </span>
                <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.2em] mt-0.5 block">
                  LEGALPRO
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Mitra resmi dan terpercaya untuk jasa konsultasi dan pengurusan izin usaha OSS RBA, PBG/SLF bangunan gedung, kawasan komersial, stasiun pengisian migas (SPBU/SPBE), dan perpanjangan legalitas perusahaan di seluruh Indonesia.
            </p>

            <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <strong className="text-[#D4AF37] block font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Kantor Pusat Bandung:</span>
              </strong>
              <p className="text-slate-400 leading-snug">
                Babakan Priangan VII No. 9, Kota Bandung, Jawa Barat 40255
              </p>
            </div>
          </div>

          {/* Layanan Utama Column */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 font-heading flex items-center gap-1.5">
              <span>Layanan Utama</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#layanan" className="hover:text-[#D4AF37] transition flex items-center gap-1.5">
                  <span className="text-[#D4AF37] font-bold">›</span>
                  <span>Perizinan Usaha OSS RBA (NIB, PT/CV)</span>
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#D4AF37] transition flex items-center gap-1.5">
                  <span className="text-[#D4AF37] font-bold">›</span>
                  <span>Izin Bangunan & PBG Gedung (Eks IMB)</span>
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#D4AF37] transition flex items-center gap-1.5">
                  <span className="text-[#D4AF37] font-bold">›</span>
                  <span>Sertifikat Laik Fungsi (SLF) Gedung</span>
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#D4AF37] transition flex items-center gap-1.5">
                  <span className="text-[#D4AF37] font-bold">›</span>
                  <span>Gedung Kantor, Hotel & Restoran</span>
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#D4AF37] transition flex items-center gap-1.5">
                  <span className="text-[#D4AF37] font-bold">›</span>
                  <span>Izin Khusus SPBU & SPBE Pertamina</span>
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#D4AF37] transition flex items-center gap-1.5">
                  <span className="text-[#D4AF37] font-bold">›</span>
                  <span>Perpanjangan Dokumen Kilat & Pajak</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Tautan Cepat Column */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 font-heading">
              Tautan Cepat
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#D4AF37] transition">Beranda Utama</a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-[#D4AF37] transition">Tentang Hadjwina Legalpro</a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-[#D4AF37] transition">Kalkulator Estimasi Biaya & Waktu</a>
              </li>
              <li>
                <a href="#kesiapan" className="hover:text-[#D4AF37] transition">Cek Kesiapan Dokumen Mandiri</a>
              </li>
              <li>
                <a href="#alur" className="hover:text-[#D4AF37] transition">Alur & Prosedur Pengurusan</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D4AF37] transition">Tanya Jawab Regulasi (FAQ)</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#D4AF37] transition">Formulir Konsultasi Cepat</a>
              </li>
            </ul>
          </div>

          {/* Kontak & Jam Kerja */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 font-heading">
              Kontak & Jam Kerja
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300 mb-5">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Senin - Jumat: 08:30 - 17:00 WIB</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Sabtu: 09:00 - 14:00 WIB</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+6282126666684" className="hover:text-[#D4AF37] transition font-mono">
                  +62 821-2666-6684
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:widyactive@gmail.com" className="hover:text-[#D4AF37] transition">
                  widyactive@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/6282126666684"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#D4AF37] hover:text-[#050D1A] text-[#D4AF37] flex items-center justify-center transition shadow"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:widyactive@gmail.com"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#D4AF37] hover:text-[#050D1A] text-[#D4AF37] flex items-center justify-center transition shadow"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://maps.google.com/?q=Babakan+Priangan+VII+No.+9+Kota+Bandung"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#D4AF37] hover:text-[#050D1A] text-[#D4AF37] flex items-center justify-center transition shadow"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
          <p>
            &copy; {new Date().getFullYear()} <strong>HADJWINA LEGALPRO</strong>. Hak Cipta Dilindungi Undang-Undang Republik Indonesia.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition cursor-pointer">Kebijakan Privasi</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition cursor-pointer">Syarat & Ketentuan Layanan</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition cursor-pointer">Kode Etik Konsultan</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
