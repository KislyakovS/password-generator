// Core
import { FC, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

// Icons
import CheckIcon from './icons/check.svg';

// Instruments
import * as classes from './checkbox.module.css';

// Types
type DefaultElement = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type CheckboxType = DefaultElement & {
  type?: never,
  children: ReactNode,
}

const Checkbox: FC<CheckboxType> = ({ className, checked, children, ...props }: CheckboxType) => {
  return (
    <label className={`${className} ${classes.checkbox}`}>
      <input className={classes.input} {...props} type="checkbox" checked={checked} />
      <span className={classes.box}>
        {checked && <CheckIcon />}
      </span>
      {children}
    </label>
  )
}

export { Checkbox };
