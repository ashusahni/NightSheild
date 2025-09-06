
'use client';

import React, { useEffect } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  definition: string;
  className?: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ definition, className = '' }) => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      securityLevel: 'loose',
      themeVariables: {
        primaryColor: '#ef4444',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#ef4444',
        lineColor: '#ef4444',
        secondaryColor: '#991b1b',
        tertiaryColor: '#450a0a',
      }
    });
    mermaid.contentLoaded();
  }, []);

  return (
    <div className={`mermaid ${className}`}>
      {definition}
    </div>
  );
};

export default MermaidDiagram;
