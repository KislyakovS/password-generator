// Core
import React, { FC, useCallback, ChangeEvent } from 'react';
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
  const onChangeRage = useCallback(
    (value: number) => password.setLength(value),
    [],
  );
  const onChangeInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    password.setLength(+event.target.value);
  }, []);

  return (
    <div className={classes.length}>
      <Range
        className={classes.range}
        value={password.customize.length}
        min={MIN_RANGE}
        max={MAX_RANGE}
        onChange={onChangeRage}
      />
      <Input
        className={classes.input}
        label="Password length"
        isHiddenLabel
        value={password.customize.length}
        onChange={onChangeInput}
      />
    </div>
  );
});

export { Length };
