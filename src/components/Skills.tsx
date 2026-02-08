import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent-color)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          {t('skills.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resumeData.skills.map((category, index) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--bg-primary)] p-8 rounded-xl border border-[var(--text-secondary)]/10 hover:border-[var(--accent-color)]/30 transition-all duration-300 group hover:shadow-lg hover:shadow-[var(--accent-glow)]/20"
            >
              <h3 className="text-xl font-semibold mb-6 text-[var(--accent-color)]">
                {category.category}
              </h3>
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.span 
                    key={skill}
                    variants={item}
                    className="px-4 py-2 bg-[var(--bg-secondary)] rounded-lg text-sm font-medium text-[var(--text-secondary)] border border-[var(--text-secondary)]/10 hover:text-[var(--text-primary)] hover:border-[var(--accent-color)]/50 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
