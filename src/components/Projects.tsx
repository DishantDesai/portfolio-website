import React from 'react';
import { resumeData } from '../data/resumeData';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[var(--bg-primary)]">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-16 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[var(--bg-secondary)] rounded-xl overflow-hidden border border-white/5 hover:border-[var(--accent-color)]/30 transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              {/* Image Placeholder (Gradient since no images provided) */}
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden group-hover:from-gray-800 group-hover:to-[var(--accent-color)]/20 transition-colors duration-500">
                <span className="text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                  {/* Icon or Initials based on Title */}
                  {project.title.charAt(0)}
                </span>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--accent-color)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono text-[var(--accent-color)] bg-[var(--accent-color)]/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
