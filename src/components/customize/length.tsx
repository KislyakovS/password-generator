// Core
import { FC, useCallback } from 'react';

// Components
import { Input, Range } from '../../ui';

// Instruments
import * as classes from './length.module.css';

const MIN = 1;
const MAX = 100;
const STEP = 1;

type LengthType = {
  value: number,
  onChange: (value: number) => void;
}

const Length: FC<LengthType> = ({ value, onChange }: LengthType) => {
  const onChangeInput = useCallback((event) => onChange(event.target.value), [onChange]);

  return <div className={classes.container}>
    <label className={classes.label} htmlFor="length">Password Length</label>
    <Input className={classes.input} value={value} onChange={onChangeInput} type="number" name="length" id="length" min={MIN} max={MAX} step={STEP} />
    <Range
      value={value}
      min={MIN}
      max={MAX}
      step={STEP}
      onChange={onChange}
    />
  </div >
});

export { Length };
