import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Simple state to track active section for nav highlighting
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      // Added 'projects' to the tracked sections
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      // Adjust offset for trigger point
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans transition-colors duration-300">
      <Navbar activeSection={activeSection} />
      <main>
        {/* Added scroll-mt-20 to ensure content isn't hidden behind the fixed navbar when navigating */}
        <div id="home" className="scroll-mt-20">
          <Hero />
        </div>
        <div id="about" className="scroll-mt-20">
          <About />
        </div>
        <div id="services" className="scroll-mt-20">
          <Services />
        </div>
        <div id="projects" className="scroll-mt-20">
          <Projects />
        </div>
        <div id="contact" className="scroll-mt-20">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;