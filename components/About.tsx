import React from 'react';
import { Layers, Monitor, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Belajar Memberikan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-amber-600">
                Yang Terbaik
              </span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Saya hanyalah seorang penuntut ilmu yang kebetulan menekuni dunia pengembangan web. Harapan saya, setiap baris kode yang ditulis bisa menjadi solusi yang memudahkan urusan orang lain dan membawa kebermanfaatan bagi bisnis maupun ide Anda.
            </p>

            <div className="grid gap-6">
              {[
                { 
                  icon: <Zap className="w-6 h-6 text-gold-600" />, 
                  title: "Optimasi Kode", 
                  desc: "Berusaha menyusun kode agar website berjalan ringkas dan cepat." 
                },
                { 
                  icon: <Monitor className="w-6 h-6 text-amber-600" />, 
                  title: "Tampilan Adaptif", 
                  desc: "Menyesuaikan tampilan agar nyaman dibaca di HP maupun Laptop." 
                },
                { 
                  icon: <Layers className="w-6 h-6 text-yellow-600" />, 
                  title: "Teknologi Terkini", 
                  desc: "Terus belajar menggunakan alat bantu terbaru seperti React & Next.js." 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:bg-gold-50/30 hover:shadow-lg hover:shadow-gold-500/10 hover:border-gold-200 transition-all duration-300">
                  <div className="p-3 rounded-xl bg-gold-50 border border-gold-100 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
            {/* Gradient background behind image */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-gold-500 to-yellow-400 rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-gold-100 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Web Developer Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
              
              {/* Floating Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-gold-100 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-900 font-bold">Dooze Project</p>
                    <p className="text-xs text-gold-600 font-semibold tracking-wider uppercase">Web Developer</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="text-[10px] font-medium text-slate-500">Siap Membantu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};