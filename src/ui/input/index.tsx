// Core
import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';

// Instruments
import * as classes from './input.module.css';

// Types
type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: FC<InputPropsType> = ({ className, ...props }) => {
  return <input className={`${classes.input} ${className ? className : ''}`} {...props} />
}

export { Input };
