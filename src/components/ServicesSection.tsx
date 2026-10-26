import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Hammer, 
  Hotel, 
  Fuel, 
  RotateCw, 
  Scale, 
  Search, 
  Clock, 
  FileText, 
  CheckCircle2, 
  MessageCircle, 
  ExternalLink, 
  X, 
  Info,
  ChevronRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [checkedRequirements, setCheckedRequirements] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'Semua Layanan' },
    { id: 'usaha', label: 'Perizinan Usaha (OSS RBA)' },
    { id: 'pbg', label: 'Izin Bangunan & PBG' },
    { id: 'komersial', label: 'Hotel & Restoran' },
    { id: 'spbu', label: 'SPBU & SPBE (Migas)' },
    { id: 'perpanjangan', label: 'Perpanjangan Kilat' },
    { id: 'hukum', label: 'Hukum & Pajak' },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.coverage.some(c => c.toLowerCase().includes(q)) ||
        item.requirements.some(r => r.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Hammer': return <Hammer className="w-6 h-6" />;
      case 'Hotel': return <Hotel className="w-6 h-6" />;
      case 'Fuel': return <Fuel className="w-6 h-6" />;
      case 'RotateCw': return <RotateCw className="w-6 h-6" />;
      case 'Scale': return <Scale className="w-6 h-6" />;
      default: return <FileText className="w-6 h-6" />;
    }
  };

  const toggleRequirement = (req: string) => {
    setCheckedRequirements((prev) => ({
      ...prev,
      [req]: !prev[req]
    }));
  };

  return (
    <section id="layanan" className="py-20 sm:py-24 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#AA8C2C] font-bold tracking-wider uppercase text-xs bg-[#D4AF37]/15 px-3 py-1 rounded-full border border-[#D4AF37]/30">
            Katalog Layanan Komprehensif
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] mt-3 font-heading">
            Layanan Perizinan & Legalitas Resmi Indonesia
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Dari pendirian entitas badan usaha baru, persetujuan konstruksi bangunan gedung, izin operasional kawasan komersial & migas, hingga percepatan perpanjangan dokumen kedaluwarsa.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition ${
                  activeCategory === cat.id
                    ? 'bg-[#0A192F] text-[#D4AF37] shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari izin (PBG, SLF, NIB, SPBU...)"
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] shadow-sm transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 hover:shadow-2xl transition duration-300 hover:border-[#D4AF37] group flex flex-col justify-between relative overflow-hidden"
            >
              {service.badge && (
                <div className="absolute top-4 right-4 bg-[#D4AF37]/15 text-[#AA8C2C] border border-[#D4AF37]/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {service.badge}
                </div>
              )}

              <div>
                {/* Icon & Category */}
                <div className="w-12 h-12 bg-[#0A192F] text-[#D4AF37] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#D4AF37] group-hover:text-[#0A192F] transition duration-300 shadow-md">
                  {getServiceIcon(service.iconName)}
                </div>

                <span className="text-[11px] font-bold tracking-wider text-[#AA8C2C] uppercase block mb-1">
                  {service.categoryLabel}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-[#0A192F] font-heading mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-1.5 mb-5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  {service.coverage.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                  {service.coverage.length > 3 && (
                    <span className="text-[11px] text-slate-400 block pl-5">
                      +{service.coverage.length - 3} layanan cakupan lainnya
                    </span>
                  )}
                </div>

                {/* Meta details */}
                <div className="bg-slate-50 rounded-xl p-3 mb-5 grid grid-cols-2 gap-2 text-xs border border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Estimasi Waktu</span>
                    <strong className="text-slate-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-[#AA8C2C]" />
                      <span className="truncate">{service.estimatedTime}</span>
                    </strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Kisaran Biaya</span>
                    <strong className="text-[#0A192F] font-bold block mt-0.5">
                      {service.estimatedCost}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 rounded-xl transition text-xs flex items-center justify-center gap-1.5 border border-slate-200"
                >
                  <Info className="w-3.5 h-3.5 text-slate-600" />
                  <span>Lihat Syarat & Alur Pengurusan</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-2.5 rounded-xl transition text-xs flex items-center justify-center gap-1"
                  >
                    <span>Formulir</span>
                  </button>
                  <a
                    href={`https://wa.me/6282126666684?text=Halo%20Hadjwina%20LegalPro,%20saya%20tertarik%20mengurus%20layanan%20*${encodeURIComponent(service.title)}*`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-[#050D1A] hover:from-[#C5A028] hover:to-[#D4AF37] font-bold py-2.5 rounded-xl transition text-xs flex items-center justify-center gap-1.5 shadow"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
            <Info className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-slate-800">Layanan Tidak Ditemukan</h4>
            <p className="text-sm text-slate-500 mt-1 mb-4">
              Kata kunci "{searchQuery}" tidak cocok dengan nama layanan kami. Hubungi konsultan kami untuk konsultasi kebutuhan khusus.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="bg-[#0A192F] text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-slate-800"
            >
              Reset Filter Pencarian
            </button>
          </div>
        )}

      </div>

      {/* Detailed Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 mb-5 pr-8">
              <div className="w-12 h-12 rounded-2xl bg-[#0A192F] text-[#D4AF37] flex items-center justify-center shrink-0">
                {getServiceIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase text-[#AA8C2C] tracking-wider block">
                  {selectedService.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A192F] font-heading leading-tight">
                  {selectedService.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{selectedService.subtitle}</p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              {selectedService.description}
            </p>

            {/* Interactive Requirements Checklist */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-[#0A192F] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#AA8C2C]" />
                  <span>Daftar Persyaratan Dokumen (Checklist Mandiri)</span>
                </h4>
                <span className="text-[11px] text-slate-400">Centang dokumen yang sudah siap</span>
              </div>
              <div className="space-y-2">
                {selectedService.requirements.map((req, idx) => {
                  const isChecked = !!checkedRequirements[req];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleRequirement(req)}
                      className={`flex items-start gap-3 p-3 rounded-xl border text-xs cursor-pointer transition ${
                        isChecked 
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium' 
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="flex-1">{req}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Coverage & Workflow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <h4 className="text-xs font-bold text-[#0A192F] uppercase tracking-wider mb-2">
                  Cakupan Layanan Termasuk:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {selectedService.coverage.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#AA8C2C] font-bold">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <h4 className="text-xs font-bold text-[#0A192F] uppercase tracking-wider mb-2">
                  Instansi / Kementerian Terkait:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.authorities.map((auth, i) => (
                    <span key={i} className="bg-white border border-slate-200 text-slate-700 text-[11px] px-2.5 py-1 rounded-lg font-medium">
                      {auth}
                    </span>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-slate-200 text-xs text-slate-500">
                  <div className="flex justify-between py-0.5">
                    <span>Estimasi Waktu:</span>
                    <strong className="text-slate-800">{selectedService.estimatedTime}</strong>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span>Estimasi Biaya:</span>
                    <strong className="text-[#0A192F]">{selectedService.estimatedCost}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  const s = selectedService;
                  setSelectedService(null);
                  onSelectServiceForBooking(s.title);
                }}
                className="w-full sm:flex-1 bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 rounded-xl text-xs sm:text-sm transition text-center"
              >
                Isi Formulir Pengajuan
              </button>
              <a
                href={`https://wa.me/6282126666684?text=Halo%20Hadjwina%20LegalPro,%20saya%20sudah%20membaca%20persyaratan%20untuk%20*${encodeURIComponent(selectedService.title)}*.%20Mohon%20info%20tahap%20selanjutnya.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-[#050D1A] font-bold py-3 rounded-xl text-xs sm:text-sm transition text-center flex items-center justify-center gap-2 shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasikan via WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
