import React from 'react';
import { 
  Calculator, 
  MessageCircle, 
  Award, 
  CheckCircle2, 
  FileCheck2, 
  Building2, 
  Flame, 
  Zap, 
  FileText,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface HeroProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-[#050D1A] via-[#0A192F] to-[#172A45] text-white py-16 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background Subtle Geometric Grid & Glows */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full text-[#D4AF37] text-xs font-semibold tracking-wide">
              <Award className="w-4 h-4" />
              <span>Kantor Pusat Bandung - Biro Konsultan Perizinan & Legalitas Resmi</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] font-heading">
              HADJWINA LEGALPRO
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA8C2C] block mt-2">
                Solusi Kilat & Legal Perizinan Usaha Anda
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Melayani pendirian badan usaha, izin bangunan (PBG/SLF), pembangunan gedung kantor, hotel, restoran, SPBU, SPBE, hingga perpanjangan dokumen secara profesional, transparan, dan terpercaya di seluruh Indonesia.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#simulator"
                className="w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-[#050D1A] font-bold px-7 py-3.5 rounded-xl shadow-xl hover:from-[#C5A028] hover:to-[#D4AF37] transition transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2.5 text-sm sm:text-base group"
              >
                <Calculator className="w-5 h-5 group-hover:rotate-6 transition" />
                <span>Cek Estimasi Biaya & Waktu</span>
              </a>

              <a
                href="https://wa.me/6282126666684?text=Halo%20Hadjwina%20LegalPro,%20saya%20mau%20konsultasi%20perizinan%20usaha."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-slate-800/90 border border-slate-700 hover:border-[#D4AF37]/50 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-slate-800 transition text-center flex items-center justify-center gap-2.5 text-sm sm:text-base"
              >
                <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
                <span>Konsultasi Langsung WhatsApp</span>
              </a>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Bebas Pungli & Biaya Terbuka</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Pendampingan Sidang Teknis TPA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Garansi Dokumen Terbit Sah</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Focus Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/95 border border-slate-700/80 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-md relative">
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-[#050D1A] font-bold text-xs px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Terverifikasi Resmi</span>
              </div>

              <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <FileCheck2 className="w-5 h-5 text-[#D4AF37]" />
                    <span>Fokus Layanan Utama</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">Penanganan langsung oleh konsultan legal berlisensi</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div 
                  onClick={() => onOpenBookingModal('Perizinan Usaha OSS RBA')}
                  className="group flex items-start gap-3 bg-slate-800/60 hover:bg-slate-800 p-3.5 rounded-2xl border border-slate-700/50 hover:border-[#D4AF37]/50 transition cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-white text-xs sm:text-sm font-semibold group-hover:text-[#D4AF37] transition">
                        Perizinan Usaha & OSS RBA
                      </strong>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#D4AF37] transition" />
                    </div>
                    <span className="text-xs text-slate-400 block mt-0.5">NIB Kilat, Akta PT/CV, SK Kemenkumham, & Sertifikat Standar</span>
                  </div>
                </div>

                <div 
                  onClick={() => onOpenBookingModal('Izin Bangunan PBG & SLF')}
                  className="group flex items-start gap-3 bg-slate-800/60 hover:bg-slate-800 p-3.5 rounded-2xl border border-slate-700/50 hover:border-[#D4AF37]/50 transition cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-white text-xs sm:text-sm font-semibold group-hover:text-[#D4AF37] transition">
                        Izin Bangunan & PBG Gedung
                      </strong>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#D4AF37] transition" />
                    </div>
                    <span className="text-xs text-slate-400 block mt-0.5">Persetujuan Bangunan Gedung (Eks IMB), SLF, & KRK Tata Ruang</span>
                  </div>
                </div>

                <div 
                  onClick={() => onOpenBookingModal('Gedung Kantor, Hotel & Restoran')}
                  className="group flex items-start gap-3 bg-slate-800/60 hover:bg-slate-800 p-3.5 rounded-2xl border border-slate-700/50 hover:border-[#D4AF37]/50 transition cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-white text-xs sm:text-sm font-semibold group-hover:text-[#D4AF37] transition">
                        Hotel, Restoran & Komersial
                      </strong>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#D4AF37] transition" />
                    </div>
                    <span className="text-xs text-slate-400 block mt-0.5">Izin Pariwisata, Andalalin Dishub, & Kajian Lingkungan Hidup</span>
                  </div>
                </div>

                <div 
                  onClick={() => onOpenBookingModal('Izin Khusus SPBU & SPBE')}
                  className="group flex items-start gap-3 bg-slate-800/60 hover:bg-slate-800 p-3.5 rounded-2xl border border-slate-700/50 hover:border-[#D4AF37]/50 transition cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-white text-xs sm:text-sm font-semibold group-hover:text-[#D4AF37] transition">
                        Izin Khusus SPBU & SPBE
                      </strong>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#D4AF37] transition" />
                    </div>
                    <span className="text-xs text-slate-400 block mt-0.5">Rekomendasi ESDM, Ditjen Migas, Pertamina & Standar K3LL</span>
                  </div>
                </div>
              </div>

              {/* Urgency Highlight banner */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs text-slate-300">Butuh perpanjangan izin kilat?</span>
                </div>
                <a
                  href="https://wa.me/6282126666684?text=Halo%20Hadjwina%20LegalPro,%20saya%20butuh%20layanan%20express%20perpanjangan%20dokumen%20izin."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1"
                >
                  <span>Proses Kilat</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
