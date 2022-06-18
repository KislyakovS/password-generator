// Core
import React, {
  FC,
  useMemo,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';

// Styles
import * as classes from './switcher.module.css';

// Utils
import { randomNumber, clsx } from '../../utils';

// Types
type SwitcherPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Switcher: FC<SwitcherPropsType> = ({ className, children, ...props }) => {
  const id = useMemo(() => randomNumber(0, 100).toString(), []);

  return (
    <>
      <input id={id} type="checkbox" className={classes.input} {...props} />
      <label className={clsx(classes.switcher, className)} htmlFor={id}>
        <div className={classes.track}>
          <span className={classes.thumb} />
        </div>
        {children && <div className={classes.label}>{children}</div>}
      </label>
    </>
  );
};

export { Switcher };
