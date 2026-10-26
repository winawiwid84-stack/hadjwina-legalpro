import React from 'react';
import { 
  Building, 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle, 
  ExternalLink, 
  MessageCircle, 
  FileBadge2,
  Users2,
  Scale
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Bio & Strengths */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#AA8C2C] font-bold tracking-wider uppercase text-xs bg-[#D4AF37]/15 px-3 py-1 rounded-full border border-[#D4AF37]/30">
              Tentang Hadjwina Legalpro
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] leading-tight font-heading">
              Mitra Terpercaya Pengurusan Legalitas & Perizinan Usaha Anda
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>HADJWINA LEGALPRO</strong> adalah biro konsultan hukum, perizinan, dan legalitas berbadan hukum resmi yang berkedudukan di Kota Bandung. Kami berdedikasi membantu para pendiri usaha, korporasi skala nasional, developer properti, pemilik restoran, hingga investor dalam menavigasi regulasi birokrasi di Indonesia secara cepat, transparan, dan sesuai hukum yang berlaku.
            </p>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Mulai dari pendirian badan usaha berisiko rendah hingga tinggi (OSS RBA), pengurusan izin bangunan PBG/SLF gedung komersial, perizinan khusus industri minyak dan gas (SPBU/SPBE), hingga perpanjangan berkala dokumen legalitas perusahaan yang mendesak.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl hover:border-[#D4AF37]/50 transition group">
                <div className="w-10 h-10 rounded-xl bg-[#0A192F] text-[#D4AF37] flex items-center justify-center mb-3 group-hover:scale-105 transition">
                  <FileBadge2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0A192F] text-sm">Konsultan Berlisensi</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Tim ahli perizinan & praktisi hukum berpengalaman mendampingi regulasi teknis.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl hover:border-[#D4AF37]/50 transition group">
                <div className="w-10 h-10 rounded-xl bg-[#0A192F] text-[#D4AF37] flex items-center justify-center mb-3 group-hover:scale-105 transition">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0A192F] text-sm">Transparan & Bebas Pungli</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Estimasi waktu dan rincian biaya resmi yang jelas tanpa pungutan tak terduga.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Surat Perjanjian Kerja (SPK) & Kwitansi Resmi menjamin keamanan transaksi Anda.</span>
            </div>
          </div>

          {/* Right: Office Profile Card */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-[#0A192F] to-[#050D1A] text-white p-7 sm:p-9 rounded-3xl shadow-2xl relative overflow-hidden border border-slate-800">
              <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase block">
                    Headquarters
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-0.5">
                    Kantor Pusat Hadjwina Legalpro
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center">
                  <Building className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3.5 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-medium text-xs text-slate-400">Alamat Lengkap:</strong>
                    <span className="text-xs sm:text-sm text-slate-200">
                      Babakan Priangan VII No. 9, Kota Bandung, Jawa Barat 40255
                    </span>
                    <a 
                      href="https://maps.google.com/?q=Babakan+Priangan+VII+No.+9+Kota+Bandung" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1 text-[#D4AF37] hover:underline text-xs mt-1 font-semibold"
                    >
                      <span>Lihat Rute di Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-xs text-slate-400 font-medium">Email Resmi:</strong>
                    <a href="mailto:widyactive@gmail.com" className="text-xs sm:text-sm text-slate-200 hover:text-[#D4AF37] transition">
                      widyactive@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-xs text-slate-400 font-medium">Hotline / WhatsApp Resmi:</strong>
                    <a href="https://wa.me/6282126666684" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-200 hover:text-[#D4AF37] transition font-mono font-semibold">
                      +62 821-2666-6684
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-xs text-slate-400 font-medium">Jam Pelayanan Kantor:</strong>
                    <span className="text-xs sm:text-sm text-slate-200">
                      Senin - Jumat (08:30 - 17:00 WIB) | Sabtu (09:00 - 14:00 WIB)
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <a
                  href="https://wa.me/6282126666684?text=Halo%20Hadjwina%20LegalPro,%20saya%20ingin%20menjadwalkan%20kunjungan%20konsultasi%20ke%20kantor%20pusat%20Bandung."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-[#050D1A] font-bold py-3.5 rounded-xl text-center block shadow-lg hover:from-[#C5A028] hover:to-[#D4AF37] transition text-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Jadwalkan Kunjungan / Tatap Muka</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
