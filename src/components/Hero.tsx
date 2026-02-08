import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { name } = resumeData.personalInfo;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[var(--bg-primary)] to-[var(--bg-primary)] -z-10"></div>
      
      <div className="container-custom text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[var(--accent-color)] font-medium tracking-wide uppercase mb-4"
        >
          {t('hero.role')}
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          {t('hero.greeting')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{name}</span>.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10"
        >
          {t('hero.description')}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a 
            href="#projects" 
            className="px-8 py-3 bg-[var(--accent-color)] text-white rounded-full font-medium hover:bg-blue-600 transition-all hover:scale-105 shadow-[0_0_20px_var(--accent-glow)]"
          >
            {t('hero.viewProjects')}
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border border-[var(--text-secondary)]/30 text-[var(--text-primary)] rounded-full font-medium hover:bg-[var(--text-primary)]/5 transition-all hover:scale-105"
          >
            {t('hero.contactMe')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
