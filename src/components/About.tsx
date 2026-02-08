import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-[var(--bg-secondary)]">
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          {t('about.title')}
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-[var(--text-secondary)] leading-relaxed text-center"
        >
          <p>{resumeData.personalInfo.summary}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
