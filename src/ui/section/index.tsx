// Core
import React, { FC, ReactNode } from 'react';

// Styles
import * as classes from './section.module.css';

// Types
type SectionPropsType = {
  title: string,
  description?: string,
  children: ReactNode
}

const Section: FC<SectionPropsType> = ({ title, description, children }) => (
  <section className={classes.section}>
    <h3 className={classes.title}>{title}</h3>
    {description && <p className={classes.description}>{description}</p>}
    <div className={classes.body}>
      {children}
    </div>
  </section>
);

export { Section }