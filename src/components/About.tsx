import React from 'react';
import { resumeData } from '../data/resumeData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[var(--bg-secondary)]">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg text-[var(--text-secondary)] leading-relaxed text-center">
          <p>{resumeData.personalInfo.summary}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
