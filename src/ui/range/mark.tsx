// Core
import React, { FC } from 'react';

// Styles
import * as classes from './mark.module.css';

// Types
import { IMarkProps } from 'react-range/lib/types';

type MarkPropsType = {
  props: IMarkProps,
  index: number
}

const getIsActiveMark = (index: number, step: number, value: number) => {
  return index * step < value;
}

const getIsCurrentMark = (index: number, step: number, value: number) => {
  return index * step === (value - step);
}

const mark = (labels: string[], value: number, step: number): FC<MarkPropsType> => ({ props, index }) => {
  return <div {...props}
    className={`
      ${classes.mark} 
      ${getIsActiveMark(index, step, value) ? classes.active : ''}
      ${getIsCurrentMark(index, step, value) ? classes.current : ''}
    `}
  >
    <span className={classes.label}>{labels[index]}</span>
  </div>
}

export { mark }