import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import * as classes from './input.module.css';

import { clsx } from '../../utils';

type DefaultElement = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type InputPropsType = DefaultElement & {
  label: string;
  isHiddenLabel?: boolean;
};

const Input: FC<InputPropsType> = ({
  className,
  label,
  isHiddenLabel = false,
  ...props
}) => (
  <label className={clsx(className)}>
    <span className={clsx({ 'visually-hidden': isHiddenLabel })}>{label}</span>
    <input className={classes.input} {...props} />
  </label>
);

export { Input };
