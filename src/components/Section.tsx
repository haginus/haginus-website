import React from 'react';
import './Section.scss';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section>
      <div className="section-description">
        <div className="sticky-content">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="section-body">
        {children}
      </div>
    </section>
  )
}