import React, {
  FC,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

import CheckIcon from './icons/check.svg';

import * as classes from './checkbox.module.css';

import { clsx } from '../../utils';

type DefaultElement = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type CheckboxPropsType = DefaultElement & {
  type?: never;
  children: ReactNode;
};

const Checkbox: FC<CheckboxPropsType> = ({
  className,
  checked,
  children,
  ...props
}) => (
  <label
    className={clsx(classes.checkbox, className, { [classes.checked]: Boolean(checked) })}
  >
    <input
      className={classes.input}
      {...props}
      type="checkbox"
      checked={checked}
    />
    <span className={classes.box}>
      {checked && <CheckIcon className={classes.check} />}
    </span>
    {children}
  </label>
);

export { Checkbox };
