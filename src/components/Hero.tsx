import React from 'react';
import { resumeData } from '../data/resumeData';
import '../styles/animations.css';

const Hero: React.FC = () => {
  const { name, title } = resumeData.personalInfo;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[var(--bg-primary)] to-[var(--bg-primary)] -z-10"></div>
      
      <div className="container-custom text-center px-4">
        <h2 className="text-[var(--accent-color)] font-medium tracking-wide uppercase mb-4 animate-fade-in">
          {title}
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-slide-up delay-100">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{name}</span>.
        </h1>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 animate-slide-up delay-200">
          Building scalable, high-performance web applications with a focus on modern React architecture and User Experience.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-slide-up delay-300">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-[var(--accent-color)] text-white rounded-full font-medium hover:bg-blue-600 transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-all hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
