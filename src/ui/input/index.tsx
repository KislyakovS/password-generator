// Core
import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';

// Instruments
import * as classes from './input.module.css';

// Types
type DefaultElement = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type InputPropsType = DefaultElement & {
  label: string,
  isHiddenLabel?: boolean,
}


const Input: FC<InputPropsType> = ({ className, label, isHiddenLabel = false, ...props }) => {
  return <label className={className ? className : ''}>
    <span className={isHiddenLabel ? 'visually-hidden' : ''}>{label}</span>
    <input className={classes.input} {...props} />
  </label>
}

export { Input };
