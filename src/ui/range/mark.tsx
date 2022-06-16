// Core
import React, { FC } from 'react';

// Styles
import { IMarkProps } from 'react-range/lib/types';
import * as classes from './mark.module.css';

// Utils
import { clsx } from '../../utils';

// Types

type MarkPropsType = {
  props: IMarkProps;
  index: number;
};

const getIsActiveMark = (index: number, step: number, value: number) => index * step < value;

// eslint-disable-next-line max-len
const getIsCurrentMark = (index: number, step: number, value: number) => index * step === value - step;

const mark = (
  labels: string[],
  value: number,
  step: number,
): FC<MarkPropsType> => ({ props, index }) => (
  <div
    {...props}
    className={clsx(classes.mark, {
      [classes.active]: getIsActiveMark(index, step, value),
      [classes.current]: getIsCurrentMark(index, step, value),
    })}
  >
    <span className={classes.label}>{labels[index]}</span>
  </div>
);

export { mark };
