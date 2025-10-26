import React from 'react';
import { useTranslation } from 'react-i18next';

export const Toolkit: React.FC = () => {
  const { t } = useTranslation();

  const toolkitItems = [
    {
      title: t('toolkit.card1Title'),
      description: t('toolkit.card1Desc'),
      link: '#', // Add correct link later
    },
    {
      title: t('toolkit.card2Title'),
      description: t('toolkit.card2Desc'),
      link: 'https://aistudio.google.com',
    },
    {
      title: t('toolkit.card3Title'),
      description: t('toolkit.card3Desc'),
      link: 'https://notebooklm.google.com',
    },
    {
      title: t('toolkit.card4Title'),
      description: t('toolkit.card4Desc'),
      link: '#', // Add correct link later
    },
    {
      title: t('toolkit.card5Title'),
      description: t('toolkit.card5Desc'),
      link: '#', // Add correct link later
    },
    {
      title: t('toolkit.card6Title'),
      description: t('toolkit.card6Desc'),
      link: 'https://www.youtube.com/watch?v=yrdt0l00DEo',
    },
  ];

  return (
    <section className="py-24" id="toolkit">
      <h2 className="font-display text-4xl font-bold text-text-light mb-12">
        {t('toolkit.title')}
      </h2>

      {/* Responsive Grid:
        - Mobile (default): 1 column (grid-cols-1)
        - Tablet (md): 2 columns (md:grid-cols-2)
        - Desktop (lg): 3 columns (lg:grid-cols-3)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {toolkitItems.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-4 bg-card-dark p-6 border border-secondary/20 hover:border-primary hover:shadow-glow-blue transition-all"
          >
            <h3 className="font-display text-xl font-bold text-primary">
              {item.title}
            </h3>
            <p className="font-body text-text-light/80">
              {item.description}
            </p>
          </a>
        ))}

      </div>
    </section>
  );
};

export default Toolkit;