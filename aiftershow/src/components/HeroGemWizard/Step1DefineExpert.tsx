import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  domain: string;
  setDomain: (val: string) => void;
  role: string;
  setRole: (val: string) => void;
  task: string;
  setTask: (val: string) => void;
  onNext: () => void;
}

export const Step1DefineExpert: React.FC<Props> = ({
  domain, setDomain, role, setRole, task, setTask, onNext
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 bg-card-dark p-8 border border-secondary/20">
      <h3 className="font-display text-2xl font-bold text-primary">
        {t('heroGemWizard.step1Title')}
      </h3>
      <form onSubmit={(e) => { e.preventDefault(); onNext(); }} className="flex flex-col gap-6">
        <div>
          <label htmlFor="domain" className="font-mono text-sm uppercase text-text-light/80">
            {t('heroGemWizard.domainLabel')}
          </label>
          <input
            type="text"
            id="domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="mt-2 w-full bg-background-dark text-text-light font-mono text-sm p-3 border border-secondary/50 focus:border-primary focus:ring-0 focus:shadow-glow-blue transition-all"
            placeholder={t('heroGemWizard.domainPlaceholder')}
            required
          />
        </div>
        <div>
          <label htmlFor="role" className="font-mono text-sm uppercase text-text-light/80">
            {t('heroGemWizard.roleLabel')}
          </label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-2 w-full bg-background-dark text-text-light font-mono text-sm p-3 border border-secondary/50 focus:border-primary focus:ring-0 focus:shadow-glow-blue transition-all"
            placeholder={t('heroGemWizard.rolePlaceholder')}
            required
          />
        </div>
        <div>
          <label htmlFor="task" className="font-mono text-sm uppercase text-text-light/80">
            {t('heroGemWizard.taskLabel')}
          </label>
          <input
            type="text"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="mt-2 w-full bg-background-dark text-text-light font-mono text-sm p-3 border border-secondary/50 focus:border-primary focus:ring-0 focus:shadow-glow-blue transition-all"
            placeholder={t('heroGemWizard.taskPlaceholder')}
            required
          />
        </div>
        <button
          type="submit"
          className="font-mono uppercase text-lg bg-primary text-background-dark font-bold py-3 px-6 hover:shadow-glow-blue transition-shadow"
        >
          {t('heroGemWizard.step1Button')}
        </button>
      </form>
    </div>
  );
};