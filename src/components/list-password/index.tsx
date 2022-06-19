// Core
import React, { FC } from 'react';
import { useList } from 'effector-react';

// Assets
import CopyIcon from './icons/copy.svg';

// State
import { $passwords } from '../../bus/passwords';

// Styles
import * as classes from './list-password.module.css';

const ListPassword: FC = () => {
  const passwords = useList(
    $passwords,
    (password) => (
      <li key={password} className={classes.item}>
        <div className={classes.line}>
          <span className={classes.password}>{password}</span>
          <button
            type="button"
            className={classes.button}
            onClick={onClickCopyText(password)}
          >
            <CopyIcon />
            Click to copy
          </button>
        </div>
      </li>
    ),
  );

  const onClickCopyText = (text: string) => () => navigator.clipboard.writeText(text);

  return (
    <ul className={classes.list}>
      {passwords}
    </ul>
  );
};

export { ListPassword };
