import React from 'react';
import { resumeData } from '../data/resumeData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[var(--bg-primary)]">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-16 text-center">Experience</h2>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-12">
          {resumeData.experience.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-[var(--accent-color)] shadow-[0_0_10px_var(--accent-color)] group-hover:scale-150 transition-transform duration-300"></div>
              
              <div className="bg-[var(--bg-secondary)] p-6 rounded-lg border border-white/5 hover:border-[var(--accent-color)]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent-color)] transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-[var(--text-secondary)]">{exp.company}</h4>
                  </div>
                  <div className="text-sm font-mono text-[var(--text-secondary)] mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full self-start">
                    {exp.duration}
                  </div>
                </div>
                
                <ul className="list-disc list-outside ml-4 space-y-2 text-[var(--text-secondary)] mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs border border-white/10 rounded-full text-[var(--text-secondary)] hover:bg-white/5 transition-colors"
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

export default Experience;
