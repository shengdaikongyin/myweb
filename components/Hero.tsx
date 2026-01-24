import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Mail, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = PERSONAL_INFO.description;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm text-indigo-300 text-sm font-medium tracking-wide animate-fade-in-down">
          Hello World, I'm an Embedded Engineer.
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white animate-fade-in-up">
          我是 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">{PERSONAL_INFO.name}</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light animate-fade-in-up animation-delay-200">
          {PERSONAL_INFO.title}
        </h2>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto min-h-[3rem] mb-10 leading-relaxed">
          {text}
          <span className="animate-blink inline-block w-0.5 h-5 ml-1 bg-indigo-400 align-middle"></span>
        </p>

        <div className="flex justify-center gap-6 mb-16 animate-fade-in-up animation-delay-400">
           <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 hover:text-indigo-400 transition-all transform hover:scale-110" title="GitHub">
             <Github size={24} />
           </a>
           <a href={PERSONAL_INFO.csdn} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 hover:text-indigo-400 transition-all transform hover:scale-110" title="CSDN Blog">
             <BookOpen size={24} />
           </a>
           <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 hover:text-indigo-400 transition-all transform hover:scale-110" title="Email">
             <Mail size={24} />
           </a>
        </div>

        <a href="#about" className="inline-flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors animate-bounce">
          <span className="text-xs uppercase tracking-widest">了解更多</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;