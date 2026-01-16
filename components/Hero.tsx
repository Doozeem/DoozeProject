import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full bg-grid-gold opacity-[0.5] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 pointer-events-none"></div>
      
      {/* Animated Blobs - Gold/Amber Tones */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-gold-200 rounded-full mix-blend-multiply filter blur-[96px] opacity-60 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-[96px] opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-[96px] opacity-60 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gold-200 shadow-sm text-gold-700 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
          </span>
          Terus Belajar & Berkarya
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-slate-900 animate-fade-in-up [animation-delay:200ms]">
          Menghadirkan Manfaat <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-yellow-500 to-amber-600 drop-shadow-sm">
            Lewat Baris Kode
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          Berikhtiar membantu mewujudkan ide Anda menjadi website yang sederhana, fungsional, dan mudah digunakan untuk kebaikan bersama.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up [animation-delay:600ms]">
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="group relative px-8 py-4 bg-gradient-to-r from-gold-600 to-amber-600 text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-gold-500/40 overflow-hidden shadow-md"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="flex items-center gap-2 relative z-10">
              Sapa Saya
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a
            href="#services"
            onClick={(e) => handleScroll(e, 'services')}
            className="group px-8 py-4 bg-white hover:bg-gold-50 text-slate-700 border border-slate-200 hover:border-gold-300 rounded-full font-semibold transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
          >
            <Code2 className="w-4 h-4 text-slate-400 group-hover:text-gold-600 transition-colors" />
            Lihat Yang Bisa Dibantu
          </a>
        </div>
      </div>
    </section>
  );
};