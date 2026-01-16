import React from 'react';
import { Globe, Smartphone, BarChart3 } from 'lucide-react';
import { CONTACT_INFO } from '../config';

const services = [
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "Pengembangan Web",
    description: "Membantu membuatkan halaman website, baik untuk portofolio sederhana maupun profil usaha, agar informasi Anda mudah diakses orang banyak.",
    color: "from-gold-500 to-amber-600",
    shadow: "shadow-gold-500/30",
    hoverBorder: "group-hover:border-gold-300"
  },
  {
    icon: <Smartphone className="w-8 h-8 text-white" />,
    title: "Desain Antarmuka",
    description: "Berikhtiar merancang tampilan yang ramah pengguna, agar pengunjung website merasa nyaman dan mudah menemukan apa yang mereka cari.",
    color: "from-amber-500 to-yellow-500",
    shadow: "shadow-amber-500/30",
    hoverBorder: "group-hover:border-amber-300"
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    title: "Perbaikan Performa",
    description: "Membantu meninjau struktur website agar lebih ringan saat dibuka dan lebih mudah dikenali oleh mesin pencari seperti Google.",
    color: "from-yellow-500 to-orange-500",
    shadow: "shadow-orange-500/30",
    hoverBorder: "group-hover:border-orange-300"
  }
];

export const Services: React.FC = () => {
  const handleConsultation = (serviceName: string) => {
    const text = `Assalamualaikum Dooze Project, saya tertarik diskusi santai mengenai layanan: ${serviceName}.`;
    window.open(CONTACT_INFO.whatsapp.createLink(text), '_blank');
  };

  return (
    <section className="py-24 relative bg-gold-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Apa yang Bisa <span className="text-gold-600">Saya Bantu?</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Berikut adalah beberapa hal yang sedang saya tekuni dan insyaAllah bisa bermanfaat untuk kebutuhan digital Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-3xl bg-white border border-slate-100 ${service.hoverBorder} shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col`}
            >
              <div className={`mb-8 inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg ${service.shadow} transition-shadow duration-300 w-fit`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              <div className="mt-auto pt-4">
                <button 
                  onClick={() => handleConsultation(service.title)}
                  className="flex items-center text-sm font-bold text-slate-900 group-hover:text-gold-600 transition-colors cursor-pointer hover:underline underline-offset-4 decoration-gold-600"
                >
                  Diskusi Santai 
                  <span className="ml-2 text-lg transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};