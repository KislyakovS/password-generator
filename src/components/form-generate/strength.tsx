// Core
import { FC } from 'react';
import { observer } from 'mobx-react-lite';

// Components
import { Range } from '../../ui';

// State
import { password } from '../../store/password';

const MIN_RANGE = 1;
const MAX_RANGE = 4;
const MARKS = ['Bad', 'Low', 'Medium', 'High'];

const Strength: FC = observer(() => {
  return (
    <Range
      value={password.strength}
      min={MIN_RANGE}
      max={MAX_RANGE}
      marks={MARKS}
      onChange={(value) => password.setStrength(value)}
    />
  )
})

export { Strength }