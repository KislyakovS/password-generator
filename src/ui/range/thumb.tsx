// Core
import React, { FC } from 'react';

// Instruments
import { IThumbProps } from 'react-range/lib/types';
import * as classes from './thumb.module.css';

// Types
type ThumbType = {
  props: IThumbProps;
};

const Thumb: FC<ThumbType> = ({ props }: ThumbType) => (
  <div {...props} className={classes.slider} />
);

export { Thumb };
