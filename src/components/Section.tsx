import React from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles["section-description"]}>
        <div className={styles["sticky-content"]}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className={styles["section-body"]}>
        {children}
      </div>
    </section>
  )
}