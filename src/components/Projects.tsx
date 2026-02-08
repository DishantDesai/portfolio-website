import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 bg-[var(--bg-primary)]">
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          {t('projects.title')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--bg-secondary)] rounded-xl overflow-hidden border border-[var(--text-secondary)]/10 hover:border-[var(--accent-color)]/30 transition-all duration-300 hover:-translate-y-2 group flex flex-col hover:shadow-xl hover:shadow-[var(--accent-glow)]/20"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] flex items-center justify-center relative overflow-hidden group-hover:from-[var(--bg-secondary)] group-hover:to-[var(--accent-color)]/20 transition-colors duration-500">
                <span className="text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity text-[var(--accent-color)]">
                  {project.title.charAt(0)}
                </span>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold group-hover:text-[var(--accent-color)] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {/* Mock Links since resume didn't have them */}
                    <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <p className="text-[var(--text-secondary)] text-sm mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono text-[var(--accent-color)] bg-[var(--accent-color)]/10 px-2 py-1 rounded border border-[var(--accent-color)]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
