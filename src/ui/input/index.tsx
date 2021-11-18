// Core
import { FC, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

// Instruments
import * as classes from './input.module.css';

// Types
type InputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: FC<InputType> = ({ className, ...props }: InputType) => {
  return <input className={`${classes.input} ${className ? className : ''}`} {...props} />
}

export { Input };
