import React, { FC, ReactNode } from 'react';

import * as classes from './fieldset.module.css';

type FieldsetPropsType = {
  legend: string;
  description?: string;
  children: ReactNode;
};

const Fieldset: FC<FieldsetPropsType> = ({ legend, description, children }) => (
  <fieldset className={classes.fieldset}>
    <legend className={classes.legend}>{legend}</legend>
    {description && <p className={classes.description}>{description}</p>}
    <div className={classes.body}>{children}</div>
  </fieldset>
);

export { Fieldset };
