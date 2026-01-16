import React from 'react';
import { ExternalLink, BookOpen, Search, Coffee, Bot, Mic, Wallet } from 'lucide-react';

const projects = [
  {
    title: "Khazanah Turast",
    category: "Pustaka Digital",
    description: "Sebuah ikhtiar untuk mendigitalisasi literatur klasik Islam (Turast). Dibangun sebagai PWA (Progressive Web App) agar kitab-kitab rujukan ini mudah diakses oleh para penuntut ilmu melalui perangkat mobile maupun desktop.",
    image: "https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Firebase", "Tailwind CSS", "PWA"],
    stats: {
      label: "Akses Literatur",
      value: "Mudah & Gratis",
      icon: <BookOpen className="w-4 h-4" />
    },
    link: "https://khazanahturast.web.app",
    github: "#"
  },
  {
    title: "Mu'jam Turast",
    category: "Kamus Digital",
    description: "Aplikasi kamus digital untuk membantu memahami istilah-istilah dalam kitab kuning. Dirancang dengan antarmuka yang bersih dan pencarian cepat untuk mendukung efisiensi belajar para santri.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Firebase", "Context API", "PWA"],
    stats: {
      label: "Pencarian",
      value: "Cepat & Tepat",
      icon: <Search className="w-4 h-4" />
    },
    link: "https://mu-jam-turats-app.web.app",
    github: "#"
  },
  {
    title: "Dooze Coffee",
    category: "F&B Landing Page",
    description: "Website profil untuk kedai kopi modern. Menampilkan katalog menu interaktif dan suasana tempat (ambience) untuk menarik pelanggan. Dioptimalkan untuk kenyamanan akses via smartphone.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Vite", "Tailwind CSS"],
    stats: {
      label: "Antarmuka",
      value: "Clean & Cozy",
      icon: <Coffee className="w-4 h-4" />
    },
    link: "https://doozecoffee.netlify.app",
    github: "#"
  },
  {
    title: "Dooze Voice Gen",
    category: "AI Text to Speech",
    description: "Generator suara berbasis AI yang mengubah teks menjadi audio dengan intonasi natural. Solusi praktis untuk kebutuhan voice-over konten kreator tanpa perlu peralatan rekaman mahal.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Web Speech API", "Tailwind"],
    stats: {
      label: "Konversi",
      value: "Instan & Jernih",
      icon: <Mic className="w-4 h-4" />
    },
    link: "https://doozevoicegen.netlify.app",
    github: "#"
  },
  {
    title: "DoozeHost Assistant",
    category: "AI Customer Support",
    description: "Bot asisten cerdas yang melayani pelanggan layanan hosting DoozeHost. Mampu menjawab pertanyaan teknis dan administrasi secara otomatis 24/7 dengan gaya bahasa yang luwes dan membantu.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "OpenAI API", "Netlify", "Tailwind"],
    stats: {
      label: "Respon",
      value: "Real-time 24/7",
      icon: <Bot className="w-4 h-4" />
    },
    link: "https://doozehost-assistant.netlify.app",
    github: "#"
  },
  {
    title: "Dooze Kasku",
    category: "Manajemen Keuangan",
    description: "Aplikasi pencatatan arus kas (Cash Flow) harian yang simpel dan transparan. Dirancang untuk memudahkan personal maupun UMKM dalam memonitor pemasukan dan pengeluaran secara teratur.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "LocalStorage", "Tailwind", "PWA"],
    stats: {
      label: "Pencatatan",
      value: "Praktis & Rapi",
      icon: <Wallet className="w-4 h-4" />
    },
    link: "https://doozekasku.netlify.app",
    github: "#"
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Jejak Belajar & <span className="text-gold-600">Berkarya</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Berikut adalah beberapa proyek yang telah saya kerjakan. Dari aplikasi produktivitas hingga integrasi AI, saya berusaha menghadirkan solusi digital yang bermanfaat.
            </p>
          </div>
          {/* GitHub link removed from here */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:border-gold-300 hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-500 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-gold-700 text-xs font-bold uppercase tracking-wider border border-white/50 shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Overlay Button */}
                <div className="absolute bottom-4 right-4 z-20 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white hover:bg-gold-50 text-slate-900 hover:text-gold-600 rounded-full shadow-lg transition-colors block">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-gold-600 transition-colors leading-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-slate-500 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Impact Stat Box */}
                <div className="mb-6 p-4 bg-gradient-to-r from-gold-50 to-white rounded-xl border border-gold-100 flex items-center justify-between group-hover:border-gold-200 transition-colors">
                  <div className="flex items-center gap-2 text-gold-700">
                    {project.stats.icon}
                    <span className="text-sm font-semibold">{project.stats.label}</span>
                  </div>
                  <span className="text-lg font-bold text-slate-900">{project.stats.value}</span>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 rounded-md bg-slate-50 text-xs font-medium text-slate-500 border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile GitHub link removed from here */}
      </div>
    </section>
  );
};