import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-20 bg-[var(--bg-secondary)] border-t border-[var(--text-secondary)]/10">
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          {t('education.title')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resumeData.education.map((edu, index) => (
            <motion.div 
              key={edu.id} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--bg-primary)] p-8 rounded-xl border border-[var(--text-secondary)]/10 hover:border-[var(--accent-color)]/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--accent-color)]/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-[var(--accent-color)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 text-[var(--text-primary)]">{edu.degree}</h3>
                  <h4 className="text-[var(--accent-color)] mb-4">{edu.school}</h4>
                  <div className="flex justify-between text-sm text-[var(--text-secondary)] border-t border-[var(--text-secondary)]/10 pt-4">
                    <span>{edu.duration}</span>
                    <span className="font-mono">{t('education.gpa')}: {edu.gpa}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
