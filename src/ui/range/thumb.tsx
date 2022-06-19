import React, { FC } from 'react';

import { IThumbProps } from 'react-range/lib/types';
import * as classes from './thumb.module.css';

type ThumbType = {
  props: IThumbProps;
};

const Thumb: FC<ThumbType> = ({ props }: ThumbType) => (
  <div {...props} className={classes.slider} />
);

export { Thumb };
