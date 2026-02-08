import React from 'react';
import { resumeData } from '../data/resumeData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent-color)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <h2 className="text-3xl font-bold mb-16 text-center">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resumeData.skills.map((category) => (
            <div 
              key={category.category} 
              className="bg-[var(--bg-primary)] p-8 rounded-xl border border-white/5 hover:border-[var(--accent-color)]/30 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-6 text-[var(--accent-color)] group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-[var(--bg-secondary)] rounded-lg text-sm font-medium text-[var(--text-secondary)] border border-white/5 data-[hover=true]:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
