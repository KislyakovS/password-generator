// Core
import { FC } from 'react';

// Icons
import LockOpenIcon from './icons/lock-open.svg';
import CopyIcon from './icons/copy.svg';
import RefreshIcon from './icons/refresh.svg';

// Instruments
import * as classes from './input-password.module.css';

const InputPassword: FC = () => {
  return (
    <div className={`container ${classes.container}`}>
      <div className={classes.lock}>
        <LockOpenIcon />
      </div>
      <input className={classes.input} value="TpPG%Vhlk2*k" />
      <div className={classes.actions}>
        <button>
          <CopyIcon />
        </button>
        <button>
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