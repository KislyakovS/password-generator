import React, { FC, ReactNode } from 'react';
import { getTrackBackground } from 'react-range';

import { ITrackProps } from 'react-range/lib/types';
import * as classes from './track.module.css';

type TrackType = {
  props: ITrackProps;
  children: ReactNode;
};

const track = (min: number, max: number, value: number): FC<TrackType> => ({
  props,
  children,
}: TrackType) => (
  <div
    onMouseDown={props.onMouseDown}
    onTouchStart={props.onTouchStart}
    style={{ ...props.style }}
    className={classes.track}
    tabIndex={0}
    role="slider"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
  >
    <div
      ref={props.ref}
      style={{
        background: getTrackBackground({
          values: [value],
          colors: ['#1e75d0', '#353940'],
          min,
          max,
        }),
      }}
      className={classes.line}
    >
      {children}
    </div>
  </div>
);

export { track };
