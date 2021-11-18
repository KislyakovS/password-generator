// Core
import { FC } from 'react';
import { Range as Input } from 'react-range';

// Components
import { track } from './track';
import { Thumb } from './thumb';

// Types
export type RangeType = {
  className?: string,
  value: number,
  step?: number,
  min: number,
  max: number,
  onChange: (value: number) => void,
}

const Range: FC<RangeType> = ({ className, step = 1, min, max, value, onChange }: RangeType) => {
  return <div className={className ? className : ''}>
    <Input
      values={[value]}
      step={step}
      min={min}
      max={max}
      onChange={([value]) => onChange(value)}
      renderTrack={track(min, max, value)}
      renderThumb={Thumb}
    />
  </div>
}

export { Range };
