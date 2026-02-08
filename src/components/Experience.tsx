import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-[var(--bg-primary)] overflow-hidden">
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          {t('experience.title')}
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-4 bottom-0 w-0.5 bg-[var(--text-secondary)]/20 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {resumeData.experience.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot (Desktop) */}
                <div className="absolute left-1/2 top-0 w-4 h-4 rounded-full bg-[var(--accent-color)] -translate-x-1/2 z-10 hidden md:block ring-4 ring-[var(--bg-primary)]"></div>

                {/* Content Side */}
                <div className="flex-1 md:w-1/2">
                  <div className={`bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--text-secondary)]/10 hover:border-[var(--accent-color)]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-glow)] group ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <div className={`flex flex-col gap-2 mb-4 ${
                      index % 2 === 0 ? 'items-start' : 'items-start md:items-end'
                    }`}>
                      <h3 className="text-xl font-bold text-[var(--accent-color)] flex items-center gap-2">
                        {index % 2 !== 0 && <Briefcase className="w-5 h-5 md:hidden" />}
                        {exp.role}
                        {index % 2 === 0 && <Briefcase className="w-5 h-5 md:hidden" />}
                      </h3>
                      <h4 className="text-lg font-semibold">{exp.company}</h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)] mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    <ul className={`list-disc list-outside space-y-2 text-[var(--text-secondary)] mb-6 ml-4 ${
                       index % 2 === 0 ? 'ml-4' : 'md:mr-4 md:ml-0 md:text-right'
                    } marker:text-[var(--accent-color)]`}>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 ${
                       index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'
                    }`}>
                      {exp.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 text-xs font-mono border border-[var(--text-secondary)]/20 rounded-full text-[var(--text-secondary)] bg-[var(--bg-primary)] hover:border-[var(--accent-color)] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty Side for layout balance */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
