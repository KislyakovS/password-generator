import React, { FC, useCallback, ChangeEvent } from 'react';
import { useStore } from 'effector-react';

import { Range, Input } from '../../ui';

import { $options, setLength } from '../../bus/options';

import * as classes from './length.module.css';

const MIN_RANGE = 1;
const MAX_RANGE = 100;

const Length: FC = () => {
  const { length } = useStore($options);

  const onChangeInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setLength(+event.target.value);
  }, []);

  return (
    <div className={classes.length}>
      <Range
        className={classes.range}
        value={length}
        min={MIN_RANGE}
        max={MAX_RANGE}
        onChange={setLength}
      />
      <Input
        className={classes.input}
        label="Password length"
        isHiddenLabel
        value={length}
        onChange={onChangeInput}
      />
    </div>
  );
};

export { Length };
