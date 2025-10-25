import React from 'react';

// Define an array of toolkit items for easy mapping
const toolkitItems = [
  {
    title: 'Google Stitch',
    description: 'The AI web designer. Turn ideas into front-end code.',
    link: '#', // Add correct link later
  },
  {
    title: 'Google AI Studio',
    description: 'The Vibe Coding environment. Build AI brains.',
    link: '[https://aistudio.google.com](https://aistudio.google.com)',
  },
  {
    title: 'NotebookLM',
    description: 'The team knowledge base. Turn docs into an expert.',
    link: '[https://notebooklm.google.com](https://notebooklm.google.com)',
  },
  {
    title: 'Gemini CLI',
    description: 'The power user tool. Vibe code from your terminal.',
    link: '#', // Add correct link later
  },
  {
    title: 'Google Agentspace',
    description: 'The Flow Coding platform. Build robust workflows.',
    link: '#', // Add correct link later
  },
  {
    title: 'Video: Prompting for Marketers',
    description: 'The 5 Elements of effective prompting.',
    link: '[https://www.youtube.com/watch?v=yrdt0l00DEo](https://www.youtube.com/watch?v=yrdt0l00DEo)',
  },
];

export const Toolkit: React.FC = () => {
  return (
    <section className="py-24" id="toolkit">
      <h2 className="font-display text-4xl font-bold text-text-light mb-12">
        Your AI Acceleration Toolkit
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