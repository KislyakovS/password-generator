// Core
import { FC } from 'react';

// Components
import { Input, Range } from '../../ui';

// Instruments
import * as classes from './length.module.css';

const Length: FC = () => {
  return <div className={classes.container}>
    <label className={classes.label} htmlFor="length">Password Length</label>
    <Input className={classes.input} type="number" name="length" id="length" min="1" max="100" step="1" />
    <Range
      value={50}
      min={1}
      max={100}
      onChange={(value) => console.log(value)}
    />
  </div >
};

export { Length };
