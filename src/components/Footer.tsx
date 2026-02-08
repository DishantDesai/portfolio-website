import React from 'react';
import { resumeData } from '../data/resumeData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-secondary)] py-8 border-t border-white/5">
      <div className="container-custom text-center">
        <div className="mb-4 text-[var(--text-secondary)]">
          <p>{resumeData.personalInfo.email}</p>
          <p>{resumeData.personalInfo.location}</p>
        </div>
        <div className="text-sm text-[var(--text-secondary)]/60">
          &copy; {currentYear} {resumeData.personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
