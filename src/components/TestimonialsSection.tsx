import React from 'react';
import { Star, Quote, Building, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Bpk. Budi Santoso',
      role: 'Direktur Utama',
      company: 'PT Graha Mandiri Perkasa',
      location: 'Bandung & Karawang',
      project: 'PBG Gedung Perkantoran & SLF',
      text: 'Pengurusan izin PBG untuk proyek pembangunan gedung kantor 5 lantai kami selesai tepat waktu tanpa kendala birokrasi berbelit. Tim Hadjwina Legalpro sangat komunikatif, memandu sidang TPA SIMBG PUPR hingga terbit rekomendasi teknis resmi.',
      rating: 5,
      avatarInitials: 'BS'
    },
    {
      name: 'Ibu Siska Lestari',
      role: 'Owner & Managing Director',
      company: 'Grand Panorama Resort & Resto',
      location: 'Lembang, Bandung Barat',
      project: 'Izin Pariwisata & Sanitasi Restoran',
      text: 'Sangat terbantu dalam pengurusan izin operasional perhotelan dan sertifikasi laik higiene sanitasi dinkes untuk 3 cabang restoran kami. Dokumen perpanjangan juga ditangani sangat kilat dan transparan tanpa biaya siluman.',
      rating: 5,
      avatarInitials: 'SL'
    },
    {
      name: 'Bpk. Hendra Wijaya',
      role: 'Komisaris',
      company: 'PT Energi Nusantara Migas',
      location: 'Jawa Barat',
      project: 'Pendirian SPBU & Rekomendasi ESDM',
      text: 'Mengurus izin khusus sektor migas dan stasiun pengisian BBM Pertamina membutuhkan standar K3LL yang sangat presisi. Hadjwina Legalpro membuktikan kompetensinya mendampingi dari survey lahan hingga verifikasi Ditjen Migas.',
      rating: 5,
      avatarInitials: 'HW'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#AA8C2C] font-bold tracking-wider uppercase text-xs bg-[#D4AF37]/15 px-3 py-1 rounded-full border border-[#D4AF37]/30">
            Kisah Sukses Klien Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] mt-3 font-heading">
            Dipercaya oleh Ratusan Korporasi & Pengusaha
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Testimoni otentik mengenai kecepatan, kepastian hukum, dan profesionalisme biro konsultan Hadjwina Legalpro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/90 p-7 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Rating stars & Project pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2.5 py-1 rounded-lg">
                    {item.project}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#D4AF37]/30 mb-3" />

                <p className="text-slate-700 text-xs sm:text-sm italic mb-6 leading-relaxed">
                  "{item.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center gap-3.5 border-t border-slate-100 pt-4">
                <div className="w-11 h-11 rounded-2xl bg-[#0A192F] text-[#D4AF37] font-bold flex items-center justify-center text-sm font-heading shadow shrink-0">
                  {item.avatarInitials}
                </div>
                <div>
                  <strong className="text-[#0A192F] block text-sm font-semibold font-heading">
                    {item.name}
                  </strong>
                  <span className="text-xs text-slate-500 block leading-tight">
                    {item.role}, {item.company}
                  </span>
                  <span className="text-[10px] text-[#AA8C2C] font-medium flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Klien Terverifikasi ({item.location})</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
