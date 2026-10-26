import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  MessageCircle, 
  Copy, 
  Check, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { BookingSubmission } from '../types';

interface BookingFormSectionProps {
  prefilledService?: string;
}

export const BookingFormSection: React.FC<BookingFormSectionProps> = ({ prefilledService }) => {
  const [nama, setNama] = useState('');
  const [wa, setWa] = useState('');
  const [layanan, setLayanan] = useState('Perizinan Usaha (OSS RBA)');
  const [entitas, setEntitas] = useState('PT (Perseroan Terbatas)');
  const [lokasi, setLokasi] = useState('Kota Bandung');
  const [urgency, setUrgency] = useState('Standar (Sesuai Prosedur)');
  const [pesan, setPesan] = useState('');

  const [lastSubmission, setLastSubmission] = useState<BookingSubmission | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setLayanan(prefilledService);
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const submissionId = `HWL-${Date.now().toString().slice(-6)}`;
    const submissionData: BookingSubmission = {
      id: submissionId,
      name: nama,
      phone: wa,
      service: layanan,
      entityType: entitas,
      location: lokasi,
      message: pesan,
      urgency: urgency,
      submittedAt: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setLastSubmission(submissionData);

    // Format WhatsApp message
    const waText = 
`*PERMOHONAN KONSULTASI PERIZINAN RESMI*
*HADJWINA LEGALPRO*
----------------------------------------
*No. Registrasi:* ${submissionId}
*Nama Pemohon:* ${nama}
*No. WhatsApp:* ${wa}
*Bentuk Entitas:* ${entitas}
*Jenis Layanan:* ${layanan}
*Wilayah Proyek:* ${lokasi}
*Tingkat Urgensi:* ${urgency}

*Rincian Kebutuhan:*
${pesan}
----------------------------------------
_Dikirim melalui portal resmi Hadjwina Legalpro (hadjwina-legalpro.id)_`;

    window.open(`https://wa.me/6282126666684?text=${encodeURIComponent(waText)}`, '_blank');
  };

  const copyWhatsAppText = () => {
    if (!lastSubmission) return;
    const text = `No. Reg: ${lastSubmission.id} - ${lastSubmission.name} (${lastSubmission.service}) - Pesan: ${lastSubmission.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="kontak" className="py-20 sm:py-24 bg-gradient-to-br from-[#050D1A] via-[#0A192F] to-[#172A45] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Contact details & guarantee */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#D4AF37] font-bold tracking-wider uppercase text-xs bg-[#D4AF37]/15 px-3 py-1 rounded-full border border-[#D4AF37]/30 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Konsultasi & Pengajuan Cepat</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight font-heading">
              Jadwalkan Konsultasi Perizinan Anda Hari Ini
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Punya pertanyaan seputar legalitas usaha baru, PBG gedung, izin pariwisata, perpanjangan dokumen mendesak, atau izin SPBU? Isi formulir di samping atau hubungi tim konsultan kami secara langsung.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3.5 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-xs text-slate-400">Kantor Pusat Bandung</strong>
                  <span className="text-xs sm:text-sm text-slate-200">
                    Babakan Priangan VII No. 9, Kota Bandung, Jawa Barat 40255
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-xs text-slate-400">Email Resmi</strong>
                  <a href="mailto:widyactive@gmail.com" className="text-xs sm:text-sm text-slate-200 hover:text-[#D4AF37] transition">
                    widyactive@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-xs text-slate-400">Hotline & WhatsApp Resmi</strong>
                  <a href="https://wa.me/6282126666684" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-200 hover:text-[#D4AF37] transition font-mono font-bold">
                    +62 821-2666-6684
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-xs text-slate-400">Jam Layanan Konsultasi</strong>
                  <span className="text-xs text-slate-200">
                    Senin - Jumat (08:30 - 17:00 WIB) | Fast Response WhatsApp
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-3.5 rounded-2xl flex items-center gap-2.5 text-xs text-slate-200">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <span>Privasi data perusahaan Anda dijamin aman di bawah perjanjian kerahasiaan resmi (NDA).</span>
            </div>
          </div>

          {/* Right Column: Form Box */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-6 sm:p-9 shadow-2xl relative">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-2">
                Formulir Konsultasi Cepat
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Lengkapi data di bawah ini untuk tersambung otomatis dengan konsultan perizinan kami.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Nama & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Nama Lengkap Pemohon *
                    </label>
                    <input
                      type="text"
                      required
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      required
                      value={wa}
                      onChange={(e) => setWa(e.target.value)}
                      placeholder="Contoh: 082126666684"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition font-mono"
                    />
                  </div>
                </div>

                {/* Layanan & Entitas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Jenis Perizinan yang Dibutuhkan *
                    </label>
                    <select
                      value={layanan}
                      onChange={(e) => setLayanan(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition cursor-pointer"
                    >
                      <option value="Perizinan Usaha (OSS RBA)">Perizinan Usaha (NIB & OSS RBA)</option>
                      <option value="Pendirian PT / CV / Kemenkumham">Pendirian PT / CV / Kemenkumham</option>
                      <option value="Izin Bangunan / PBG Gedung">Izin Bangunan PBG & SLF Gedung</option>
                      <option value="Gedung Kantor, Hotel & Restoran">Gedung Kantor, Hotel & Restoran</option>
                      <option value="Izin Khusus SPBU & SPBE Migas">Izin Khusus SPBU & SPBE Migas</option>
                      <option value="Perpanjangan Dokumen Kedaluwarsa">Perpanjangan Dokumen Kedaluwarsa</option>
                      <option value="Konsultasi Hukum Korporasi & Pajak">Konsultasi Hukum & Pajak Badan</option>
                      <option value="Lainnya / Konsultasi Umum">Lainnya / Konsultasi Umum</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Bentuk Badan Usaha
                    </label>
                    <select
                      value={entitas}
                      onChange={(e) => setEntitas(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition cursor-pointer"
                    >
                      <option value="PT (Perseroan Terbatas)">PT (Perseroan Terbatas Biasa)</option>
                      <option value="PT Perorangan (Usaha Mikro Kecil)">PT Perorangan (UMKM)</option>
                      <option value="CV (Commanditaire Vennootschap)">CV (Persekutuan Komanditer)</option>
                      <option value="Perorangan / Pemilik Usaha">Perorangan / Pribadi</option>
                      <option value="Yayasan / Koperasi / Asosiasi">Yayasan / Koperasi</option>
                    </select>
                  </div>
                </div>

                {/* Lokasi Proyek & Urgensi */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Lokasi Kota / Kabupaten
                    </label>
                    <input
                      type="text"
                      value={lokasi}
                      onChange={(e) => setLokasi(e.target.value)}
                      placeholder="Contoh: Kota Bandung / Cimahi"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Tingkat Kebutuhan Waktu
                    </label>
                    <select
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition cursor-pointer"
                    >
                      <option value="Standar (Sesuai Prosedur)">Standar (Sesuai SOP Reguler)</option>
                      <option value="Mendesak / Prioritas (< 3 Hari)">Mendesak / Prioritas Express</option>
                      <option value="Konsultasi Perencanaan">Konsultasi Awal / Perencanaan</option>
                    </select>
                  </div>
                </div>

                {/* Pesan / Kebutuhan */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Rincian Kebutuhan / Dokumen yang Ingin Diurus *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    placeholder="Sebutkan detail usaha, luas bangunan rencana, atau nomor dokumen izin lama..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-[#050D1A] font-bold py-4 rounded-xl shadow-xl hover:from-[#C5A028] hover:to-[#D4AF37] transition transform hover:-translate-y-0.5 text-sm sm:text-base flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Kirim & Hubungkan ke Konsultan WhatsApp</span>
                </button>
              </form>

              {/* Feedback Success Box if Submitted */}
              {lastSubmission && (
                <div className="mt-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 animate-fadeIn">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="flex-1 text-xs">
                      <strong className="text-white block font-semibold text-sm">
                        Permintaan Konsultasi Telah Dibuat!
                      </strong>
                      <span className="text-slate-300 block mt-0.5">
                        ID Registrasi: <code className="text-[#D4AF37] font-mono font-bold">{lastSubmission.id}</code> atas nama <strong>{lastSubmission.name}</strong>.
                      </span>
                      <p className="text-emerald-300 mt-1">
                        Jendela WhatsApp telah terbuka untuk mengirim detail ini ke tim kami. Jika tidak otomatis terbuka, klik tombol di bawah:
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        <a
                          href={`https://wa.me/6282126666684?text=${encodeURIComponent(`Halo Hadjwina LegalPro, ini ID Registrasi saya: ${lastSubmission.id}. Mohon konfirmasi jadwal konsultasi.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Buka Chat WhatsApp</span>
                        </a>

                        <button
                          onClick={copyWhatsAppText}
                          className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-1.5 rounded-lg text-xs flex items-center gap-1.5 border border-slate-700 transition"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copied ? 'Tersalin' : 'Salin Info'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
