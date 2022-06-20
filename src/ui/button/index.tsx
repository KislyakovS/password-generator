import React, {
  FC, ButtonHTMLAttributes, DetailedHTMLProps,
} from 'react';

import { clsx } from '../../utils';

import * as classes from './button.module.css';

type DefaultProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultProps & {
  description?: string;
}

const Button: FC<ButtonPropsType> = ({
  className,
  description,
  children,
  ...props
}) => (
  <div className={clsx(classes.container, className)}>
    <button className={classes.button} {...props}>
      {children}
    </button>
    {description && <span className={classes.description}>{description}</span>}
  </div>
);

export { Button };
