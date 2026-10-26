import React from 'react';
import { 
  MessageSquare, 
  SearchCheck, 
  FileCheck, 
  Award, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Konsultasi Awal & Diagnosa Kebutuhan',
      desc: 'Diskusikan kebutuhan jenis perizinan, lokasi rencana usaha, dan kendala dokumen Anda secara gratis melalui telepon, WhatsApp, atau temu tatap muka di kantor pusat Bandung.',
      icon: MessageSquare,
      deliverable: 'Rekomendasi KBLI & Estimasi Biaya Resmi'
    },
    {
      step: '02',
      title: 'Verifikasi & Penyusunan Berkas Teknis',
      desc: 'Tim hukum dan konsultan teknis kami memeriksa validitas dokumen kepemilikan tanah, menyusun gambar arsitektur/struktur berstempel SKA, serta dokumen lingkungan (SPPL/UKL-UPL).',
      icon: SearchCheck,
      deliverable: 'Berkas Lengkap Siap Sidang / Uji Teknis'
    },
    {
      step: '03',
      title: 'Pengajuan & Pengawalan Dinas Terpadu',
      desc: 'Pengajuan berkas resmi ke sistem OSS RBA, SIMBG Kementerian PUPR, ESDM Migas, atau DPMPTSP daerah, disertai pendampingan sidang profesi ahli (TPA) hingga disetujui.',
      icon: FileCheck,
      deliverable: 'Tracking Progres Transparan & Real-Time'
    },
    {
      step: '04',
      title: 'Izin Terbit Sah & Serah Terima Dokumen',
      desc: 'Dokumen legalitas berkekuatan hukum tetap terbit secara resmi dengan barcode/tanda tangan elektronik negara, diserahkan dalam bentuk fisik dokumen maupun arsip digital aman.',
      icon: Award,
      deliverable: 'Legalitas Usaha 100% Aktif & Sah'
    }
  ];

  return (
    <section id="alur" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#AA8C2C] font-bold tracking-wider uppercase text-xs bg-[#D4AF37]/15 px-3 py-1 rounded-full border border-[#D4AF37]/30">
            Alur Kerja Profesional & Terstruktur
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] mt-3 font-heading">
            Prosedur Pengurusan Izin di Hadjwina Legalpro
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Kami menyederhanakan birokrasi yang rumit menjadi alur 4 langkah yang jelas, terukur, dan bebas dari pungutan liar.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-7 relative group hover:border-[#D4AF37] hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#AA8C2C] text-[#050D1A] rounded-2xl font-black flex items-center justify-center text-lg shadow-md font-heading group-hover:scale-105 transition">
                      {item.step}
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-slate-200/70 text-slate-700 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-bold text-[#0A192F] text-base sm:text-lg mb-2.5 font-heading leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {item.desc}
                  </p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 text-[11px] text-slate-700 font-medium flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{item.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0A192F] to-[#172A45] text-white p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold font-heading text-white">
              Punya dokumen izin yang macet atau ditolak instansi?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Tim spesialis advokasi perizinan kami siap mengevaluasi berkas dan mendampingi pengajuan banding teknis.
            </p>
          </div>

          <a
            href="https://wa.me/6282126666684?text=Halo%20Hadjwina%20LegalPro,%20saya%20butuh%20bantuan%20karena%20izin%20usaha%20saya%20mengalami%20kendala%20di%20instansi."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#C5A028] text-[#050D1A] font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition text-center shrink-0 shadow flex items-center justify-center gap-2"
          >
            <span>Konsultasi Dokumen Terkendala</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
