// Core
import React, { FC, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

// Icons
import CheckIcon from './icons/check.svg';

// Instruments
import * as classes from './checkbox.module.css';

// Types
type DefaultElement = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type CheckboxPropsType = DefaultElement & {
  type?: never,
  children: ReactNode,
}

const Checkbox: FC<CheckboxPropsType> = ({ className, checked, children, ...props }) => {
  return (
    <label className={`${classes.checkbox} ${className ? className : ''} ${checked ? classes.checked : ''}`}>
      <input className={classes.input} {...props} type="checkbox" checked={checked} />
      <span className={classes.box}>
        {checked && <CheckIcon />}
      </span>
      {children}
    </label>
  )
}

export { Checkbox };
