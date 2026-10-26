import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  Check, 
  HelpCircle, 
  AlertCircle, 
  MessageCircle, 
  Award,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  label: string;
  category: 'Legal' | 'Teknis' | 'Lokasi' | 'Lingkungan';
  mandatory: boolean;
  tip: string;
}

const CHECKLIST_SCENARIOS: Record<string, { title: string; subtitle: string; items: ChecklistItem[] }> = {
  pt_cv: {
    title: 'Pendirian PT / CV & Izin OSS RBA',
    subtitle: 'Checklist persiapan legalitas badan usaha baru',
    items: [
      { id: 'ktp_npwp', label: 'E-KTP & NPWP Pribadi seluruh calon pengurus/pemegang saham', category: 'Legal', mandatory: true, tip: 'Pastikan status KSWP (Konfirmasi Status Wajib Pajak) dalam keadaan Valid.' },
      { id: 'nama_pt', label: 'Usulan 3 opsi nama PT/CV (minimal 3 suku kata bahasa Indonesia)', category: 'Legal', mandatory: true, tip: 'Tidak boleh menggunakan nama yang telah terdaftar di Kemenkumham RI.' },
      { id: 'domisili', label: 'Bukti domisili usaha (Sertifikat Hak Milik atau Surat Perjanjian Sewa)', category: 'Lokasi', mandatory: true, tip: 'Lokasi harus berada di zonasi perkantoran/perdagangan (bukan pemukiman murni).' },
      { id: 'kbli', label: 'Penetapan Klasifikasi Baku Lapangan Usaha Indonesia (KBLI 5 Digit)', category: 'Legal', mandatory: true, tip: 'Menentukan tingkat risiko usaha (Rendah, Menengah, atau Tinggi).' },
      { id: 'modal', label: 'Struktur modal dasar dan modal disetor perusahaan', category: 'Legal', mandatory: false, tip: 'Bebas disepakati para pendiri, biasanya minimal Rp 10 - 50 Juta.' },
    ]
  },
  pbg_gedung: {
    title: 'Pengurusan Izin PBG & SLF Bangunan Gedung',
    subtitle: 'Checklist Persetujuan Bangunan Gedung (Eks-IMB) SIMBG PUPR',
    items: [
      { id: 'tanah', label: 'Sertifikat kepemilikan tanah sah (SHM / SHGB) & bukti lunas PBB tahun berjalan', category: 'Lokasi', mandatory: true, tip: 'Tidak dalam sengketa atau jaminan sita perdata.' },
      { id: 'krk', label: 'Keterangan Rencana Kota (KRK) atau Advice Planning dari Dinas Tata Ruang', category: 'Lokasi', mandatory: true, tip: 'Menentukan Garis Sempadan Bangunan (GSB) dan Koefisien Dasar Bangunan (KDB).' },
      { id: 'gambar_arsitektur', label: 'Gambar teknis arsitektur lengkap berstempel Arsitek Berlisensi (STRA)', category: 'Teknis', mandatory: true, tip: 'Termasuk denah, tampak, potongan, dan detail arsitektur.' },
      { id: 'struktur', label: 'Perhitungan & gambar struktur bangunan oleh Ahli Struktur (SKA/SKK)', category: 'Teknis', mandatory: true, tip: 'Termasuk laporan penyelidikan tanah (Soil Investigation / Sondir).' },
      { id: 'mep', label: 'Gambar utilitas mekanikal, elektrikal, dan plumbing (MEP) serta proteksi kebakaran', category: 'Teknis', mandatory: true, tip: 'Wajib memenuhi standar keselamatan bangunan komersial.' },
      { id: 'lingkungan', label: 'Dokumen lingkungan (SPPL / UKL-UPL) sesuai luas lantai bangunan', category: 'Lingkungan', mandatory: false, tip: 'Diwajibkan bagi bangunan bertingkat komersial atau usaha publik.' },
    ]
  },
  restoran_hotel: {
    title: 'Perizinan Usaha Restoran, Kafe & Hotel',
    subtitle: 'Checklist operasional hospitality & sanitasi komersial',
    items: [
      { id: 'nib_pariwisata', label: 'NIB dengan KBLI Restoran (56101) atau Hotel Bintang/Melati', category: 'Legal', mandatory: true, tip: 'Diterbitkan melalui sistem OSS RBA.' },
      { id: 'andalalin', label: 'Rekomendasi Analisis Dampak Lalu Lintas (Andalalin) Dinas Perhubungan', category: 'Teknis', mandatory: false, tip: 'Wajib bila kapasitas parkir atau bangkitan lalu lintas melebihi ambang batas.' },
      { id: 'slhs', label: 'Sertifikat Laik Higiene Sanitasi (SLHS) dari Dinas Kesehatan', category: 'Teknis', mandatory: true, tip: 'Termasuk uji lab air bersih dan pelatihan penjamah makanan (food handler).' },
      { id: 'limbah', label: 'Persetujuan Teknis Pembuangan Air Limbah / Grease Trap (IPAL)', category: 'Lingkungan', mandatory: true, tip: 'Restoran wajib memiliki penangkap lemak limbah dapur sebelum dialirkan.' },
      { id: 'reklame', label: 'Izin penyelenggaraan reklame & papan nama usaha', category: 'Legal', mandatory: false, tip: 'Didaftarkan ke Bapenda / DPMPTSP setempat.' },
    ]
  },
  spbu_migas: {
    title: 'Perizinan SPBU / SPBE & Agen Bahan Bakar',
    subtitle: 'Checklist pendirian stasiun pengisian energi dan migas',
    items: [
      { id: 'lahan_spbu', label: 'Lahan minimal 1.500 m² - 2.000 m² dengan lebar muka jalan memadai', category: 'Lokasi', mandatory: true, tip: 'Memenuhi batas radius aman dari tikungan dan pemukiman padat.' },
      { id: 'loi_pertamina', label: 'Surat Kesiapan / Letter of Intent (LOI) dari PT Pertamina Patra Niaga', category: 'Legal', mandatory: true, tip: 'Hasil verifikasi survey lapangan pihak Pertamina.' },
      { id: 'esdm_migas', label: 'Rekomendasi Teknis Kementerian ESDM & Ditjen Migas RI', category: 'Legal', mandatory: true, tip: 'Persetujuan kelayakan usaha niaga migas.' },
      { id: 'damkar_k3ll', label: 'Rekomendasi proteksi keselamatan bahaya kebakaran (Damkar & K3LL)', category: 'Teknis', mandatory: true, tip: 'Penyediaan hydrant, APAR, ground tank foam system, dan sensor kebocoran.' },
      { id: 'amdal_spbu', label: 'Dokumen UKL-UPL atau AMDAL dari Dinas Lingkungan Hidup', category: 'Lingkungan', mandatory: true, tip: 'Melindungi air tanah dari resiko rembesan hidrokarbon tangki BBM.' },
    ]
  }
};

export const ChecklistTool: React.FC = () => {
  const [selectedScenarioKey, setSelectedScenarioKey] = useState<string>('pt_cv');
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  const scenario = CHECKLIST_SCENARIOS[selectedScenarioKey];
  const items = scenario.items;

  const toggleItem = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = items.filter((item) => checkedIds[item.id]).length;
  const percentage = Math.round((completedCount / items.length) * 100);

  const handleConsultMissing = () => {
    const missingItems = items.filter((item) => !checkedIds[item.id]).map((i) => i.label);
    const message = `Halo Hadjwina LegalPro, saya telah melakukan cek kesiapan dokumen untuk: *${scenario.title}*.\n\nKesiapan saat ini: ${percentage}%\nDokumen yang belum lengkap:\n${missingItems.map(m => `- ${m}`).join('\n')}\n\nMohon bantuan asistensi pengurusan dokumen yang belum lengkap tersebut.`;
    window.open(`https://wa.me/6282126666684?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="kesiapan" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-[#AA8C2C] font-bold tracking-wider uppercase text-xs bg-[#D4AF37]/15 px-3 py-1 rounded-full border border-[#D4AF37]/30 inline-flex items-center gap-1.5">
            <ClipboardCheck className="w-3.5 h-3.5" />
            <span>Audit Mandiri Kesiapan Izin</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] mt-3 font-heading">
            Cek Kesiapan Dokumen Perizinan Anda
          </h2>
          <p className="text-slate-600 mt-2.5 text-xs sm:text-sm leading-relaxed">
            Pilih skenario perizinan usaha Anda dan centang berkas yang sudah dimiliki. Kami membantu melengkapi berkas yang belum siap hingga izin terbit resmi.
          </p>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {Object.entries(CHECKLIST_SCENARIOS).map(([key, data]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedScenarioKey(key);
                setCheckedIds({});
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                selectedScenarioKey === key
                  ? 'bg-[#0A192F] text-[#D4AF37] shadow-lg'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {data.title.split('&')[0]}
            </button>
          ))}
        </div>

        {/* Checklist Container Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-9 shadow-lg">
          
          {/* Header of the Selected Scenario */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-[#0A192F] font-heading">
                {scenario.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {scenario.subtitle}
              </p>
            </div>

            {/* Score Progress Bar */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200 flex items-center gap-4 min-w-[240px]">
              <div className="flex-1">
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-600">Kesiapan Berkas:</span>
                  <span className={percentage === 100 ? 'text-emerald-600 font-bold' : 'text-[#AA8C2C] font-bold'}>
                    {percentage}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      percentage === 100 ? 'bg-emerald-500' : 'bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C]'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
              <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded-lg shrink-0">
                {completedCount}/{items.length}
              </span>
            </div>
          </div>

          {/* Checklist Items List */}
          <div className="space-y-3 mb-8">
            {items.map((item) => {
              const isChecked = !!checkedIds[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-4 rounded-2xl border transition cursor-pointer flex items-start gap-3.5 ${
                    isChecked
                      ? 'bg-emerald-50/70 border-emerald-300 text-slate-900'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center shrink-0 border transition ${
                      isChecked
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs sm:text-sm font-semibold">{item.label}</span>
                      {item.mandatory && (
                        <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
                          Wajib
                        </span>
                      )}
                      <span className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded-md">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      💡 {item.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold text-[#0A192F] block">
                {percentage === 100 
                  ? 'Luar biasa! Dokumen Anda sudah siap 100% untuk diajukan.'
                  : `Masih ada ${items.length - completedCount} dokumen yang perlu disiapkan atau dilengkapi.`}
              </span>
              <p className="text-xs text-slate-500 mt-0.5">
                Konsultan Hadjwina Legalpro siap membantu penyusunan berkas teknis dari nol.
              </p>
            </div>

            <button
              onClick={handleConsultMissing}
              className="w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-[#050D1A] font-bold px-6 py-3 rounded-xl hover:from-[#C5A028] hover:to-[#D4AF37] transition text-xs sm:text-sm flex items-center justify-center gap-2 shadow shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Konsultasikan Kekurangan Dokumen</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
