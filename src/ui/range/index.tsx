import React, { FC, useCallback } from 'react';
import { Range as Input } from 'react-range';

import { track } from './track';
import { Thumb } from './thumb';
import { mark } from './mark';

import { clsx } from '../../utils';

export type RangeType = {
  className?: string;
  value: number;
  step?: number;
  min: number;
  max: number;
  marks?: string[];
  onChange: (value: number) => void;
};

const Range: FC<RangeType> = ({
  className,
  step = 1,
  min,
  max,
  value,
  marks,
  onChange,
}: RangeType) => {
  const onChangeIpnut = useCallback(([value]: number[]) => {
    window.navigator.vibrate(200);
    onChange(value);
  }, [onChange]);

  return (
    <div className={clsx(className)}>
      <Input
        values={[value]}
        step={step}
        min={min}
        max={max}
        onChange={onChangeIpnut}
        renderTrack={track(min, max, value)}
        renderMark={marks ? mark(marks, value, step) : undefined}
        renderThumb={Thumb}
      />
    </div>
  );
};

export { Range };
