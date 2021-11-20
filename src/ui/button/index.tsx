// Core
import { FC, ReactNode } from 'react';

// Styles
import * as classes from './button.module.css';

// Types
type ButtonPropsType = {
  className?: string;
  description?: string,
  children: ReactNode
}

const Button: FC<ButtonPropsType> = ({ className, description, children }) => (
  <div className={`${classes.container} ${className ? className : ''}`}>
    <button className={classes.button}>{children}</button>
    {description && <span className={classes.description}>{description}</span>}
  </div>
)

export { Button }