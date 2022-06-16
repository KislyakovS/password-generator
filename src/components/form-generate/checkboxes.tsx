// Core
import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

// Components
import { Checkbox } from '../../ui';

// State
import { password } from '../../store/password';

// Styles
import * as classes from './checkboxes.module.css';

// Utils
import { clsx } from '../../utils';

// Types
type CheckboxesPropsType = {
  className?: string;
};

const Checkboxes: FC<CheckboxesPropsType> = observer(({ className }) => (
  <div className={clsx(classes.checkboxes, className)}>
    <Checkbox
      name="uppercase"
      checked={password.customize.isUppercase}
      onChange={(event) => password.setIsUppercase(event.target.checked)}
    >
      Uppercase
    </Checkbox>
    <Checkbox
      name="lowercase"
      checked={password.customize.isLowercase}
      onChange={(event) => password.setIsLowercase(event.target.checked)}
    >
      Lowercase
    </Checkbox>
    <Checkbox
      name="numbers"
      checked={password.customize.isNumber}
      onChange={(event) => password.setIsNumber(event.target.checked)}
    >
      Numbers
    </Checkbox>
    <Checkbox
      name="symbols"
      checked={password.customize.isSymbol}
      onChange={(event) => password.setIsSymbol(event.target.checked)}
    >
      Symbols
    </Checkbox>
  </div>
));

export { Checkboxes };
