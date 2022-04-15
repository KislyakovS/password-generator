// Core
import React from "react";

// Components
import { Switcher } from "../../ui";

// Assets
import MoonIcon from "./icons/moon.svg";
import SunIcon from "./icons/sun.svg";

// Hooks
import { useSwitchTheme } from "../../hooks";

// Styles
import * as classes from "./switch-theme.module.css";

const SwitchTheme = () => {
  const { isDark, onSwitchTheme } = useSwitchTheme();

  return (
    <Switcher checked={isDark} onChange={onSwitchTheme} aria-label={isDark ? "Enable light theme" : "Enable dark theme"}>
      {isDark ? <MoonIcon className={classes.icon} /> : <SunIcon className={classes.icon} />}
    </Switcher>
  )
};

export { SwitchTheme };
