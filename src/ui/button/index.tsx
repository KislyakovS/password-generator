// Core
import React, {
  FC, ButtonHTMLAttributes, DetailedHTMLProps,
} from 'react';

// Styles
import * as classes from './button.module.css';

// Utils
import { clsx } from '../../utils';

// Types
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
