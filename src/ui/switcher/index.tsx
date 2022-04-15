// Core
import React, {
  FC,
  useMemo,
  DetailedHTMLProps,
  InputHTMLAttributes
} from "react";

// Styles
import * as classes from "./switcher.module.css";

// Types
type SwitcherPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Switcher: FC<SwitcherPropsType> = ({ className, children, ...props }) => {
  const id = useMemo(() => crypto.randomUUID(), []);

  return (
    <>
      <input id={id} type="checkbox" className={classes.input} {...props} />
      <label className={classes.switcher} htmlFor={id}>
        <div className={classes.track}>
          <span className={classes.thumb} />
        </div>
        {children && <div className={classes.label}>{children}</div>}
      </label>
    </>
  );
};

export { Switcher };
