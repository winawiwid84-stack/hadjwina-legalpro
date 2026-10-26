import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, X, ChevronRight, Scale } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Quick Popup Card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-3xl shadow-2xl border border-slate-200 p-5 text-slate-800 animate-fadeIn relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
            aria-label="Tutup"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA8C2C] text-[#050D1A] flex items-center justify-center font-bold">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-sm font-bold text-[#0A192F] leading-tight">
                Hadjwina Legalpro
              </strong>
              <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Konsultan Online Siap Membantu</span>
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            Halo! Ada yang bisa kami bantu mengenai pengurusan izin usaha, PBG gedung, atau perpanjangan dokumen?
          </p>

          <div className="space-y-2">
            <a
              href="https://wa.me/6282126666684?text=Halo%20Hadjwina%20LegalPro,%20saya%20ingin%20konsultasi%20perizinan%20usaha."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-3.5 rounded-xl text-xs flex items-center justify-between transition shadow"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Chat WhatsApp Resmi</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="tel:+6282126666684"
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2 px-3.5 rounded-xl text-xs flex items-center justify-between transition"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-600" />
                <span>Telepon: +62 821-2666-6684</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 text-center">
            <span className="text-[10px] text-slate-400">
              Kantor Pusat: Babakan Priangan VII No. 9, Kota Bandung
            </span>
          </div>
        </div>
      )}

      {/* Floating Button Icon */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition transform hover:scale-110 focus:outline-none"
          aria-label="Buka Chat WhatsApp"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <MessageCircle className="w-7 h-7 fill-current" />
          )}

          {/* Glowing pulse ring */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
            </span>
          )}
        </button>

        {!isOpen && (
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-[#0A192F] text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap border border-slate-100">
            Konsultasi WhatsApp
          </span>
        )}
      </div>

    </div>
  );
};
