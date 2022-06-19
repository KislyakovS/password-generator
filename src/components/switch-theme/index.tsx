import React, { FC } from 'react';

import { Switcher } from '../../ui';

import MoonIcon from './icons/moon.svg';
import SunIcon from './icons/sun.svg';

import { useSwitchTheme } from '../../hooks';

import * as classes from './switch-theme.module.css';

const SwitchTheme: FC = () => {
  const { isDark, onSwitchTheme } = useSwitchTheme();

  return (
    <Switcher checked={isDark} onChange={onSwitchTheme} aria-label={isDark ? 'Enable light theme' : 'Enable dark theme'}>
      {isDark ? <MoonIcon className={classes.icon} /> : <SunIcon className={classes.icon} />}
    </Switcher>
  );
};

export { SwitchTheme };
