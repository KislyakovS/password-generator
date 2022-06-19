import React, { FC } from 'react';
import { useStore } from 'effector-react';

import { Range } from '../../ui';

import { $complexity, setComplexity } from '../../bus/complexity';

const MIN_RANGE = 1;
const MAX_RANGE = 4;
const MARKS = ['Bad', 'Low', 'Medium', 'High'];

const Strength: FC = () => {
  const complexity = useStore($complexity);

  return (
    <Range
      value={complexity as number}
      min={MIN_RANGE}
      max={MAX_RANGE}
      marks={MARKS}
      onChange={setComplexity}
    />
  );
};

export { Strength };
