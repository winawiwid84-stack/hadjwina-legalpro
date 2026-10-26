import React, { useState } from 'react';
import { 
  Calculator, 
  Clock, 
  DollarSign, 
  MessageCircle, 
  CheckCircle2, 
  MapPin, 
  Sparkles, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { ESTIMATOR_CONFIG } from '../data/servicesData';

export const EstimatorSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'usaha' | 'pbg' | 'komersial' | 'spbu' | 'perpanjangan'>('usaha');
  const [selectedType, setSelectedType] = useState<'baru' | 'perpanjangan' | 'perubahan'>('baru');
  const [selectedRegion, setSelectedRegion] = useState<string>('Kota Bandung (Prioritas Cepat)');
  const [businessScale, setBusinessScale] = useState<string>('Menengah (PT/CV)');

  const currentResult = ESTIMATOR_CONFIG[selectedCategory][selectedType];

  const handleConsultWhatsApp = () => {
    const message = `Halo Hadjwina LegalPro, saya tertarik dengan hasil simulasi estimasi perizinan:\n\n*Layanan:* ${currentResult.title}\n*Kebutuhan:* ${selectedType.toUpperCase()}\n*Wilayah:* ${selectedRegion}\n*Skala Usaha:* ${businessScale}\n*Estimasi Waktu:* ${currentResult.time}\n*Kisaran Biaya:* ${currentResult.cost}\n\nMohon informasi langkah awal & penawaran resminya. Terima kasih.`;
    window.open(`https://wa.me/6282126666684?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="simulator" className="py-20 sm:py-24 bg-[#050D1A] text-white relative overflow-hidden">
      {/* Background Decorative patterns */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-[#D4AF37] font-bold tracking-wider uppercase text-xs bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simulasi Instan 2026</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 font-heading text-white">
            Kalkulator Estimasi Biaya & Waktu
          </h2>
          <p className="text-slate-400 mt-2.5 text-xs sm:text-sm leading-relaxed">
            Pilih kategori perizinan, jenis pengurusan, dan wilayah untuk mendapatkan gambaran transparan mengenai kisaran biaya serta durasi penyelesaian dokumen.
          </p>
        </div>

        {/* Estimator Card Box */}
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          
          {/* Form Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            
            {/* Step 1: Kategori Perizinan */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
                1. Pilih Kategori Perizinan Usaha
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as any)}
                className="w-full bg-[#0A192F] border border-slate-700 rounded-xl px-4 py-3.5 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition cursor-pointer"
              >
                <option value="usaha">Perizinan Usaha (NIB, PT/CV, OSS RBA)</option>
                <option value="pbg">Izin Bangunan & PBG (Eks-IMB & SLF)</option>
                <option value="komersial">Gedung Kantor, Hotel & Restoran</option>
                <option value="spbu">Izin Khusus SPBU / SPBE / Gas Migas</option>
                <option value="perpanjangan">Perpanjangan Dokumen Kedaluwarsa</option>
              </select>
            </div>

            {/* Step 2: Jenis Pengurusan */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
                2. Jenis Pengurusan Dokumen
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as any)}
                className="w-full bg-[#0A192F] border border-slate-700 rounded-xl px-4 py-3.5 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition cursor-pointer"
              >
                <option value="baru">Pengurusan Dokumen Baru (Baru Mulai)</option>
                <option value="perpanjangan">Perpanjangan / Pembaruan Izin</option>
                <option value="perubahan">Perubahan Data / Akta / Kepemilikan</option>
              </select>
            </div>

            {/* Step 3: Wilayah Pelaksanaan */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
                3. Wilayah Lokasi Proyek / Usaha
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full bg-[#0A192F] border border-slate-700 rounded-xl px-4 py-3.5 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition cursor-pointer"
              >
                <option value="Kota Bandung (Prioritas Cepat)">Kota Bandung (Kantor Pusat / Jalur Cepat)</option>
                <option value="Bandung Raya (Cimahi, Kab Bandung, KBB)">Bandung Raya (Cimahi, Kab Bandung, KBB)</option>
                <option value="Wilayah Jawa Barat (Lainnya)">Wilayah Jawa Barat (Lainnya)</option>
                <option value="Jabodetabek & Nasional">Jabodetabek & Seluruh Indonesia</option>
              </select>
            </div>

            {/* Step 4: Skala Usaha */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
                4. Skala Entitas Usaha
              </label>
              <select
                value={businessScale}
                onChange={(e) => setBusinessScale(e.target.value)}
                className="w-full bg-[#0A192F] border border-slate-700 rounded-xl px-4 py-3.5 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition cursor-pointer"
              >
                <option value="Mikro & Kecil (PT Perorangan / Usaha Kecil)">Mikro & Kecil (PT Perorangan / UMKM)</option>
                <option value="Menengah (PT Biasa / CV)">Menengah (PT Biasa / CV / Gedung 2-4 Lantai)</option>
                <option value="Besar & Korporasi (Komersial / Industri)">Besar & Korporasi (Hotel / SPBU / Pabrik)</option>
              </select>
            </div>

          </div>

          {/* Dynamic Result Display Card */}
          <div className="bg-[#0A192F] border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 mb-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-bl-full pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-1.5 text-[11px] uppercase font-bold tracking-widest text-[#D4AF37]">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Hasil Estimasi Sementara</span>
                </div>
                
                <h4 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {currentResult.title}
                </h4>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentResult.desc}
                </p>

                {/* Included deliverables badges */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {currentResult.included.map((item, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1 bg-slate-800 text-slate-200 text-[11px] px-2.5 py-1 rounded-lg border border-slate-700"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Time and Price Stat Tiles */}
              <div className="flex flex-row sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
                <div className="bg-slate-900/90 border border-slate-700/80 px-5 py-3.5 rounded-xl text-center flex-1 lg:min-w-[190px]">
                  <span className="text-[10px] text-slate-400 block uppercase font-medium flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>Estimasi Waktu</span>
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#F3E5AB] block mt-0.5">
                    {currentResult.time}
                  </span>
                </div>

                <div className="bg-slate-900/90 border border-[#D4AF37]/40 px-5 py-3.5 rounded-xl text-center flex-1 lg:min-w-[190px]">
                  <span className="text-[10px] text-slate-400 block uppercase font-medium">
                    Kisaran Biaya Mulai
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-[#D4AF37] block mt-0.5">
                    {currentResult.cost}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* CTA & WhatsApp Direct Action */}
          <div className="text-center space-y-3">
            <button
              onClick={handleConsultWhatsApp}
              className="w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-[#050D1A] font-extrabold px-9 py-4 rounded-xl shadow-2xl hover:from-[#C5A028] hover:to-[#D4AF37] transition transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-3 text-sm sm:text-base cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Konsultasikan Estimasi Ini via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldAlert className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Estimasi bersifat indikatif awal. Biaya resmi final disesuaikan dengan retribusi daerah dan kelengkapan berkas fisik.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
