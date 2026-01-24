import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Background from './components/Background';
import AIChat from './components/AIChat';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(Section.HERO);

  // Simple scroll spy to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(Section);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-slate-200 selection:bg-indigo-500/30">
      <Background />
      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>

      <AIChat />
    </div>
  );
};

export default App;