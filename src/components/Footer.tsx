import React from 'react';
import { useTranslation } from 'react-i18next';
import { resumeData } from '../data/resumeData';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-primary)] py-8 border-t border-[var(--text-secondary)]/10">
      <div className="container-custom text-center">
        <div className="mb-4 text-[var(--text-secondary)]">
          <p>{resumeData.personalInfo.email}</p>
          <p>{resumeData.personalInfo.location}</p>
        </div>
        <div className="text-sm text-[var(--text-secondary)]/60">
          &copy; {currentYear} {resumeData.personalInfo.name}. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
