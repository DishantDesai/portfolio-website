import React from 'react';
import { resumeData } from '../data/resumeData';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[var(--bg-secondary)] relative">
       {/* Background Decor */}
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--accent-color)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-12">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, 
          feel free to reach out!
        </p>

        <a 
          href={`mailto:${resumeData.personalInfo.email}`}
          className="inline-block px-8 py-4 bg-[var(--accent-color)] text-white font-bold rounded-lg hover:bg-blue-600 transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
        >
          Say Hello
        </a>
        
        <div className="mt-16 flex justify-center space-x-8">
           {/* Social Links would go here if provided in resume */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
