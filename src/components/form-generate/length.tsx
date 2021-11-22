// Core
import { FC } from 'react';
import { observer } from 'mobx-react-lite';

// Components
import { Range, Input } from '../../ui';

// State
import { password } from '../../store/password';

// Styles
import * as classes from './length.module.css';

const MIN_RANGE = 1;
const MAX_RANGE = 100;

const Length: FC = observer(() => {
  return (
    <div className={classes.length}>
      <Range
        className={classes.range}
        value={password.customize.length}
        min={MIN_RANGE}
        max={MAX_RANGE}
        onChange={(value) => password.setLength(value)}
      />
      <Input
        className={classes.input}
        value={password.customize.length}
        onChange={(event) => password.setLength(+event.target.value)}
      />
    </div>
  )
});

export { Length }