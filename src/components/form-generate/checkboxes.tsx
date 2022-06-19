// Core
import React, { FC, ChangeEvent, useCallback } from 'react';
import { useStore } from 'effector-react';

// Components
import { Checkbox } from '../../ui';

// State
import {
  $options, setIsUppercase, setIsLowercase, setIsNumber, setIsSymbol,
} from '../../bus/options';

// Styles
import * as classes from './checkboxes.module.css';

// Utils
import { clsx } from '../../utils';

// Types
type CheckboxesPropsType = {
  className?: string;
};

const Checkboxes: FC<CheckboxesPropsType> = ({ className }) => {
  const options = useStore($options);

  const onChangeCheck = useCallback((fn) => (event: ChangeEvent<HTMLInputElement>) => {
    fn(event.target.checked);
  }, []);

  return (
    <div className={clsx(classes.checkboxes, className)}>
      <Checkbox
        name="uppercase"
        checked={options.isUppercase}
        onChange={onChangeCheck(setIsUppercase)}
      >
        Uppercase
      </Checkbox>
      <Checkbox
        name="lowercase"
        checked={options.isLowercase}
        onChange={onChangeCheck(setIsLowercase)}
      >
        Lowercase
      </Checkbox>
      <Checkbox
        name="numbers"
        checked={options.isNumber}
        onChange={onChangeCheck(setIsNumber)}
      >
        Numbers
      </Checkbox>
      <Checkbox
        name="symbols"
        checked={options.isSymbol}
        onChange={onChangeCheck(setIsSymbol)}
      >
        Symbols
      </Checkbox>
    </div>
  );
};

export { Checkboxes };
