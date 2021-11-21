// Core
import { FC, ReactNode } from 'react';
import { getTrackBackground } from 'react-range';

// Instruments
import * as classes from './track.module.css';

// Types
import { ITrackProps } from 'react-range/lib/types';

type TrackType = {
  props: ITrackProps,
  children: ReactNode,
}

const track = (min: number, max: number, value: number): FC<TrackType> => ({ props, children }: TrackType) => {
  return (
    <div
      onMouseDown={props.onMouseDown}
      onTouchStart={props.onTouchStart}
      style={{ ...props.style }}
      className={classes.track}
    >
      <div
        ref={props.ref}
        style={{
          background: getTrackBackground({
            values: [value],
            colors: ['#1e75d0', '#353940'],
            min,
            max,
          })
        }}
        className={classes.line}
      >
        {children}
      </div>
    </div>
  );
}

export { track };
