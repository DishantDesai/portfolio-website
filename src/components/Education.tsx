import React from 'react';
import { resumeData } from '../data/resumeData';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[var(--bg-secondary)] border-t border-white/5">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-16 text-center">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resumeData.education.map((edu) => (
            <div 
              key={edu.id} 
              className="bg-[var(--bg-primary)] p-8 rounded-xl border border-white/5 hover:border-[var(--accent-color)]/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-white">{edu.degree}</h3>
              <h4 className="text-[var(--accent-color)] mb-4">{edu.school}</h4>
              <div className="flex justify-between text-sm text-[var(--text-secondary)] border-t border-white/5 pt-4">
                <span>{edu.duration}</span>
                <span className="font-mono">CGPA: {edu.gpa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
