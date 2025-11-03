import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-card-dark py-8 border-t border-primary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-text-light/60 text-sm font-mono">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;