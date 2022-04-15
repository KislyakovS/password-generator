// Core
import React, { FC, MouseEvent, ReactNode } from "react";

// Styles
import * as classes from "./button.module.css";

// Types
type ButtonPropsType = {
  className?: string;
  description?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

const Button: FC<ButtonPropsType> = ({
  className,
  description,
  onClick,
  children
}) => (
  <div className={`${classes.container} ${className ? className : ""}`}>
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
    {description && <span className={classes.description}>{description}</span>}
  </div>
);

export { Button };
