import React from 'react';
import { Award, CheckCircle, Clock, Shield } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      number: '1,500+',
      label: 'Izin Selesai & Terbit',
      subtext: 'Dari UMKM hingga Korporasi Nasional',
      icon: Award
    },
    {
      number: '99.9%',
      label: 'Klien Puas & Sukses',
      subtext: 'Tingkat keberhasilan approval instansi',
      icon: CheckCircle
    },
    {
      number: '12+',
      label: 'Tahun Pengalaman',
      subtext: 'Mendampingi regulasi & birokrasi RI',
      icon: Clock
    },
    {
      number: '100%',
      label: 'Legalitas Resmi',
      subtext: 'Sesuai regulasi & bebas sengketa',
      icon: Shield
    }
  ];

  return (
    <section className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-[#050D1A] py-8 sm:py-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="text-center px-3 sm:px-4 border-r border-[#050D1A]/15 last:border-none group"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#050D1A]/10 text-[#050D1A] mb-2 group-hover:scale-110 transition">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-[#050D1A]">
                  {item.number}
                </div>
                <div className="text-xs sm:text-sm font-bold mt-1 uppercase tracking-wider text-[#0A192F]">
                  {item.label}
                </div>
                <div className="text-[11px] text-[#0A192F]/80 hidden sm:block mt-0.5">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
