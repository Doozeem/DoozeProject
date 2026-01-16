import React, { useState } from 'react';
import { Send, MessageCircle, Mail, MapPin, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../config';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // State untuk menyimpan pesan error validasi
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formState.name.trim()) {
      newErrors.name = 'Mohon isi nama agar kita bisa saling sapa.';
      isValid = false;
    }
    if (!formState.email.trim()) {
      newErrors.email = 'Mohon isi email untuk korespondensi.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Format email sepertinya belum sesuai.';
      isValid = false;
    }
    if (!formState.message.trim()) {
      newErrors.message = 'Jangan lupa tuliskan pesan atau niat baiknya.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const text = `Assalamualaikum Dooze Project, perkenalkan:\nNama: ${formState.name}\nEmail: ${formState.email}\nPesan:\n${formState.message}`;
      window.open(CONTACT_INFO.whatsapp.createLink(text), '_blank');
      setFormState({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    // Hapus error realtime saat user mengetik ulang
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-gold-50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-gold-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Jalin <span className="text-gold-600">Silaturahmi</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Jika ada yang bisa saya bantu atau sekadar ingin berdiskusi santai mengenai ide digital Anda, pintu silaturahmi selalu terbuka.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Email", val: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}`, color: "text-gold-600", bg: "bg-gold-50" },
                  { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", val: CONTACT_INFO.whatsapp.display, href: CONTACT_INFO.whatsapp.createLink('Assalamualaikum, saya ingin menyapa.'), color: "text-green-600", bg: "bg-green-50" },
                  { icon: <MapPin className="w-5 h-5" />, label: "Lokasi", val: CONTACT_INFO.location, href: CONTACT_INFO.mapsUrl, color: "text-red-500", bg: "bg-red-50" }
                ].map((item, idx) => (
                  <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-xl hover:bg-gold-50/50 transition-colors border border-transparent hover:border-gold-100">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{item.label}</p>
                      <p className="text-slate-900 font-medium group-hover:text-gold-600 transition-colors">{item.val}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 ml-1">Nama Lengkap</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl bg-white border ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-gold-400 focus:ring-gold-400'} text-slate-900 focus:outline-none focus:ring-1 transition-all placeholder:text-slate-400`}
                    placeholder="Nama Anda"
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1 text-red-500 text-xs ml-1 animate-fade-in-up">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl bg-white border ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-gold-400 focus:ring-gold-400'} text-slate-900 focus:outline-none focus:ring-1 transition-all placeholder:text-slate-400`}
                    placeholder="email@anda.com"
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 text-red-500 text-xs ml-1 animate-fade-in-up">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 ml-1">Pesan</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl bg-white border ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-gold-400 focus:ring-gold-400'} text-slate-900 focus:outline-none focus:ring-1 transition-all placeholder:text-slate-400 resize-none`}
                    placeholder="Assalamualaikum, saya ingin berdiskusi tentang..."
                  ></textarea>
                  {errors.message && (
                    <div className="flex items-center gap-1 text-red-500 text-xs ml-1 animate-fade-in-up">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 mt-2 bg-gradient-to-r from-gold-600 to-amber-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  Sapa via WhatsApp
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};