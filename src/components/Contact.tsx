import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-[var(--bg-secondary)] relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--accent-color)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom max-w-4xl text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          {t('contact.title')}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-[var(--text-secondary)] mb-12"
        >
          {t('contact.description')}
        </motion.p>

        <motion.a 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`mailto:${resumeData.personalInfo.email}`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent-color)] text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-[var(--accent-glow)]"
        >
          <Mail className="w-5 h-5" />
          {t('contact.button')}
        </motion.a>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex justify-center space-x-8"
        >
           {/* Social Links */}
           <a href="#" className="p-3 bg-[var(--bg-primary)] rounded-full hover:text-[var(--accent-color)] hover:shadow-[0_0_15px_var(--accent-glow)] transition-all">
             <Linkedin className="w-6 h-6" />
           </a>
           <a href="#" className="p-3 bg-[var(--bg-primary)] rounded-full hover:text-[var(--accent-color)] hover:shadow-[0_0_15px_var(--accent-glow)] transition-all">
             <Github className="w-6 h-6" />
           </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
