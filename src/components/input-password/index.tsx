// Core
import { FC } from 'react';

// Icons
import CopyIcon from './icons/copy.svg';
import RefreshIcon from './icons/refresh.svg';

// Instruments
import * as classes from './input-password.module.css';

type InputPasswordType = {
  password: string,
  onUpdate: () => void,
}

const InputPassword: FC<InputPasswordType> = ({ password, onUpdate }) => {
  return (
    <div className={`container ${classes.container}`}>
      <input className={classes.input} value={password} readOnly />
      <div className={classes.actions}>
        <button>
          <CopyIcon />
        </button>
        <button onClick={onUpdate}>
          <RefreshIcon />
        </button>
      </div>
      <ul className={classes.complexity}>
        <li className={classes.active}></li>
        <li className={classes.active}></li>
        <li className={classes.active}></li>
        <li className={classes.active}></li>
        <li className={classes.active}></li>
        <li className={classes.active}></li>
      </ul>
    </div>
  )
};

export { InputPassword }