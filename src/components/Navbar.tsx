import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Menu, 
  X, 
  Scale, 
  MessageCircle, 
  CheckCircle2,
  Clock
} from 'lucide-react';

interface NavbarProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Estimasi Biaya', href: '#simulator' },
    { label: 'Cek Kesiapan', href: '#kesiapan' },
    { label: 'Alur Kerja', href: '#alur' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#050D1A] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <a 
              href="mailto:widyactive@gmail.com" 
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition group"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition" />
              <span>widyactive@gmail.com</span>
            </a>
            <a 
              href="https://wa.me/6282126666684" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition group"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition" />
              <span>+62 821-2666-6684</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Babakan Priangan VII No. 9, Kota Bandung</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-[#D4AF37]/15 text-[#D4AF37] px-2.5 py-0.5 rounded-full font-medium text-[11px] border border-[#D4AF37]/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Legalitas 100% Resmi & Terpercaya</span>
            </span>
            <span className="hidden lg:flex items-center gap-1 text-[11px] text-slate-400">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>08:30 - 17:00 WIB</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0A192F]/95 backdrop-blur-md shadow-2xl py-3 border-b border-slate-800' 
            : 'bg-[#0A192F] py-4 border-b border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA8C2C] flex items-center justify-center shadow-lg text-[#050D1A] font-bold transition transform group-hover:scale-105 group-hover:rotate-1">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="text-base sm:text-xl font-extrabold tracking-tight text-white block leading-none font-heading">
                HADJWINA
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase block mt-0.5">
                LEGALPRO
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#D4AF37] transition duration-200 py-1 border-b-2 border-transparent hover:border-[#D4AF37]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBookingModal()}
              className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-4 py-2 rounded-xl text-xs sm:text-sm transition flex items-center gap-2"
            >
              <span>Formulir Cepat</span>
            </button>
            <a
              href="https://wa.me/6282126666684?text=Halo%20Hadjwina%20LegalPro,%20saya%20ingin%20konsultasi%20mengenai%20perizinan%20usaha."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-[#050D1A] font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg hover:from-[#C5A028] hover:to-[#D4AF37] transition transform hover:-translate-y-0.5 flex items-center gap-2 text-xs sm:text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Konsultasi Gratis</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-300 hover:text-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#050D1A] border-b border-slate-800 px-6 py-5 space-y-3 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-200 hover:text-[#D4AF37] py-2 px-3 rounded-lg hover:bg-slate-800/60 text-sm font-medium transition"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2.5 rounded-xl text-center text-sm border border-slate-700 transition"
              >
                Isi Formulir Konsultasi
              </button>
              <a
                href="https://wa.me/6282126666684?text=Halo%20Hadjwina%20LegalPro,%20saya%20ingin%20konsultasi%20mengenai%20perizinan%20usaha."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-[#050D1A] font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat WhatsApp Resmi</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
