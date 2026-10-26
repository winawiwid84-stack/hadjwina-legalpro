import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { EstimatorSection } from './components/EstimatorSection';
import { ChecklistTool } from './components/ChecklistTool';
import { WorkflowSection } from './components/WorkflowSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingFormSection } from './components/BookingFormSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { X, MessageCircle, Scale, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string>('');
  const [isQuickModalOpen, setIsQuickModalOpen] = useState<boolean>(false);

  // Quick modal form state
  const [modalName, setModalName] = useState('');
  const [modalPhone, setModalPhone] = useState('');
  const [modalService, setModalService] = useState('Perizinan Usaha (OSS RBA)');
  const [modalMessage, setModalMessage] = useState('');

  const handleOpenBookingModal = (serviceName?: string) => {
    if (serviceName) {
      setModalService(serviceName);
      setSelectedServiceForForm(serviceName);
    }
    setIsQuickModalOpen(true);
  };

  const handleSelectServiceForBooking = (serviceName: string) => {
    setSelectedServiceForForm(serviceName);
    setModalService(serviceName);
    // Smooth scroll to booking section
    const elem = document.getElementById('kontak');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo Hadjwina LegalPro, saya ingin konsultasi langsung perizinan:\n\n*Nama:* ${modalName}\n*No. WA:* ${modalPhone}\n*Layanan:* ${modalService}\n*Pesan:* ${modalMessage || 'Mohon info syarat dan penawaran biaya resmi.'}`;
    window.open(`https://wa.me/6282126666684?text=${encodeURIComponent(msg)}`, '_blank');
    setIsQuickModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-[#D4AF37] selection:text-[#050D1A] flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar onOpenBookingModal={handleOpenBookingModal} />

      {/* Hero Section */}
      <main className="flex-grow">
        <Hero onOpenBookingModal={handleOpenBookingModal} />

        {/* Trust Stats Bar */}
        <TrustStats />

        {/* About Company & Headquarters */}
        <AboutSection />

        {/* Services Catalog with Filter & Search */}
        <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* Interactive Cost & Time Estimator */}
        <EstimatorSection />

        {/* Interactive Document Checklist & Readiness Tool */}
        <ChecklistTool />

        {/* 4-Step Professional Workflow */}
        <WorkflowSection />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* Consultation Booking Form Section */}
        <BookingFormSection prefilledService={selectedServiceForForm} />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Quick Consultation Modal */}
      {isQuickModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setIsQuickModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA8C2C] text-[#050D1A] flex items-center justify-center font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0A192F] font-heading">
                  Konsultasi Kilat Hadjwina Legalpro
                </h3>
                <span className="text-xs text-slate-500">
                  Tersambung langsung ke WhatsApp Konsultan Resmi
                </span>
              </div>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-3.5 mt-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Anda *
                </label>
                <input
                  type="text"
                  required
                  value={modalName}
                  onChange={(e) => setModalName(e.target.value)}
                  placeholder="Contoh: Hendra Wijaya"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#D4AF37] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nomor WhatsApp Aktif *
                </label>
                <input
                  type="tel"
                  required
                  value={modalPhone}
                  onChange={(e) => setModalPhone(e.target.value)}
                  placeholder="Contoh: 082126666684"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#D4AF37] transition font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pilih Layanan Perizinan *
                </label>
                <select
                  value={modalService}
                  onChange={(e) => setModalService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#D4AF37] transition"
                >
                  <option value="Perizinan Usaha (OSS RBA)">Perizinan Usaha (OSS RBA & PT/CV)</option>
                  <option value="Izin Bangunan & PBG Gedung">Izin Bangunan PBG & SLF Gedung</option>
                  <option value="Gedung Kantor, Hotel & Restoran">Gedung Kantor, Hotel & Restoran</option>
                  <option value="Izin Khusus SPBU & SPBE Migas">Izin Khusus SPBU & SPBE Migas</option>
                  <option value="Perpanjangan Dokumen Kedaluwarsa">Perpanjangan Dokumen Kedaluwarsa</option>
                  <option value="Konsultasi Hukum & Pajak Badan">Konsultasi Hukum & Pajak Badan</option>
                  <option value="Konsultasi Perizinan Umum">Konsultasi Perizinan Umum</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Catatan Kebutuhan (Opsional)
                </label>
                <textarea
                  rows={2}
                  value={modalMessage}
                  onChange={(e) => setModalMessage(e.target.value)}
                  placeholder="Tuliskan pertanyaan singkat atau lokasi usaha..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#D4AF37] transition"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-[#050D1A] font-bold py-3.5 rounded-xl shadow-lg hover:from-[#C5A028] hover:to-[#D4AF37] transition text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Kirim ke WhatsApp (+62 821-2666-6684)</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 text-center">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Konsultasi awal 100% Bebas Biaya & Tanpa Komitmen</span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
