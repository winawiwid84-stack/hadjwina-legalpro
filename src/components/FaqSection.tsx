import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#AA8C2C] font-bold tracking-wider uppercase text-xs bg-[#D4AF37]/15 px-3 py-1 rounded-full border border-[#D4AF37]/30 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pusat Informasi & Edukasi Regulasi</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] mt-3 font-heading">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Jawaban lugas dari konsultan hukum Hadjwina Legalpro seputar sistem OSS RBA, PBG gedung, izin industri migas, dan perpanjangan dokumen.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-[#D4AF37] bg-slate-50 shadow-md' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#0A192F]/10 text-[#0A192F] font-bold text-xs flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="font-bold text-[#0A192F] text-sm sm:text-base font-heading">
                      {item.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full transition shrink-0 ${isOpen ? 'bg-[#D4AF37] text-[#0A192F]' : 'text-slate-400'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 mt-1">
                    <div className="bg-white p-4 rounded-xl border border-slate-100 mb-2">
                      {item.answer}
                    </div>
                    <span className="text-[11px] text-[#AA8C2C] font-semibold">
                      Kategori: {item.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions CTA */}
        <div className="mt-12 text-center p-6 bg-slate-50 border border-slate-200 rounded-3xl">
          <h4 className="font-bold text-[#0A192F] text-sm sm:text-base mb-1">
            Pertanyaan Anda belum terjawab di atas?
          </h4>
          <p className="text-xs text-slate-500 mb-4">
            Konsultan perizinan kami siap memberikan penjelasan spesifik sesuai kasus usaha Anda.
          </p>
          <a
            href="https://wa.me/6282126666684?text=Halo%20Hadjwina%20LegalPro,%20saya%20punya%20pertanyaan%20spesifik%20mengenai%20perizinan%20usaha."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A192F] hover:bg-slate-800 text-[#D4AF37] font-semibold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanya Langsung ke Konsultan</span>
          </a>
        </div>

      </div>
    </section>
  );
};
