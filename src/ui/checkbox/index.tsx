// Core
import React, {
  FC,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode
} from "react";

// Icons
import CheckIcon from "./icons/check.svg";

// Styles
import * as classes from "./checkbox.module.css";

// Utils
import { clsx } from '../../utils';

// Types
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
