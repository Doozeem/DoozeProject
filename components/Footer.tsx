import React from 'react';

export const Footer: React.FC = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        
        {/* Logo Section */}
        <a href="#home" onClick={handleScrollToTop} className="group flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
           {/* Custom SVG Logo 'D' - Footer Version */}
           <div className="relative flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8 text-gold-600 fill-current relative z-10 transition-transform duration-300 group-hover:scale-110"
              >
                {/* Left Pillar */}
                <path d="M6 6a3 3 0 0 1 3-3h1v18H9a3 3 0 0 1-3-3V6z" />
                {/* Right Curve */}
                <path d="M13 4h2c3.87 0 7 3.13 7 7s-3.13 7-7 7h-2v-4h2c1.66 0 3-1.34 3-3s-1.34-3-3-3h-2V4z" />
              </svg>
            </div>
          
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Dooze <span className="text-gold-600">Project</span>
          </span>
        </a>

        <p className="text-slate-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Dooze Project. All rights reserved. <br/>
          Dibuat dengan niat belajar dan berbagi.
        </p>
      </div>
    </footer>
  );
};