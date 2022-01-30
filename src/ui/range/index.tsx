// Core
import React, { FC } from 'react';
import { Range as Input } from 'react-range';

// Components
import { track } from './track';
import { Thumb } from './thumb';
import { mark } from './mark';

// Types
export type RangeType = {
  className?: string,
  value: number,
  step?: number,
  min: number,
  max: number,
  marks?: string[],
  onChange: (value: number) => void,
}

const Range: FC<RangeType> = ({ className, step = 1, min, max, value, marks, onChange }: RangeType) => {
  return <div className={className ? className : ''}>
    <Input
      values={[value]}
      step={step}
      min={min}
      max={max}
      onChange={([value]) => onChange(value)}
      renderTrack={track(min, max, value)}
      renderMark={marks ? mark(marks, value, step) : undefined}
      renderThumb={Thumb}
    />
  </div>
}

export { Range };
