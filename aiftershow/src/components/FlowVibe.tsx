import React from 'react';
import { useTranslation } from 'react-i18next';

export const FlowVibe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24" id="flow-vibe">
      <h2 className="font-display text-4xl font-bold text-text-light mb-12">
        {t('flowVibe.title')}
      </h2>
      
      {/* This grid stacks on mobile. On medium screens and up (md:), 
        it becomes a 2-column grid.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12">
        
        {/* Column 1: Vibe Coding */}
        <div className="flex flex-col gap-4">
          {/* Header accent (Neon Blue) */}
          <h3 className="font-display text-2xl font-bold text-primary text-glow-blue border-l-4 border-primary pl-4">
            {t('flowVibe.vibeTitle')}
          </h3>
          <p className="font-body text-text-light/80 leading-relaxed">
            {t('flowVibe.vibeDesc')}
          </p>
          <p className="font-body text-text-light/80 leading-relaxed">
            {t('flowVibe.vibeTools')}
          </p>
        </div>
        
        {/* Column 2: Flow Coding */}
        {/* On mobile, we add a top border. On desktop, we remove the top 
          border and add the vertical left border as a divider.
        */}
        <div className="flex flex-col gap-4 border-t-2 border-secondary pt-12 md:border-t-0 md:border-l-2 md:pt-0 md:pl-12">
          {/* Header accent (Electric Purple) */}
          <h3 className="font-display text-2xl font-bold text-secondary border-l-4 border-secondary pl-4">
            {t('flowVibe.flowTitle')}
          </h3>
          <p className="font-body text-text-light/80 leading-relaxed">
            {t('flowVibe.flowDesc')}
          </p>
          <p className="font-body text-text-light/80 leading-relaxed">
            {t('flowVibe.flowTools')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlowVibe;