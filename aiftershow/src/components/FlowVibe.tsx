import React from 'react';

export const FlowVibe: React.FC = () => {
  return (
    <section className="py-24" id="flow-vibe">
      <h2 className="font-display text-4xl font-bold text-text-light mb-12">
        Understanding Your New Powers: Flow Coding vs. Vibe Coding
      </h2>
      
      {/* This grid stacks on mobile. On medium screens and up (md:), 
        it becomes a 2-column grid.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12">
        
        {/* Column 1: Vibe Coding */}
        <div className="flex flex-col gap-4">
          {/* Header accent (Neon Blue) */}
          <h3 className="font-display text-2xl font-bold text-primary text-glow-blue border-l-4 border-primary pl-4">
            Vibe Coding (The "Director")
          </h3>
          <p className="font-body text-text-light/80 leading-relaxed">
            Prototype AI behavior with natural language in minutes. For creatives (no coding needed) and developers (skip boilerplate).
          </p>
          <p className="font-body text-text-light/80 leading-relaxed">
            <strong>Tools:</strong> Google AI Studio, Gemini CLI.
          </p>
        </div>
        
        {/* Column 2: Flow Coding */}
        {/* On mobile, we add a top border. On desktop, we remove the top 
          border and add the vertical left border as a divider.
        */}
        <div className="flex flex-col gap-4 border-t-2 border-secondary pt-12 md:border-t-0 md:border-l-2 md:pt-0 md:pl-12">
          {/* Header accent (Electric Purple) */}
          <h3 className="font-display text-2xl font-bold text-secondary border-l-4 border-secondary pl-4">
            Flow Coding (The "Architect")
          </h3>
          <p className="font-body text-text-light/80 leading-relaxed">
            Build precise, multi-step AI workflows visually. Define logic, data handling, and sequences for complex systems requiring control and scalability.
          </p>
          <p className="font-body text-text-light/80 leading-relaxed">
            <strong>Tool:</strong> Google Agentspace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlowVibe;