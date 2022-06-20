import {
  useState, useCallback, useEffect, ChangeEvent,
} from 'react';

import { Theme, ThemeStorage } from '../utils';

const themeStorage = new ThemeStorage();

const useSwitchTheme = () => {
  const [isDark, setIsDark] = useState(true);

  const setBodyDarkTheme = () => {
    document.body.classList.remove(Theme.light);
    document.body.classList.add(Theme.dark);
  };

  const setBodyLightTheme = () => {
    document.body.classList.remove(Theme.dark);
    document.body.classList.add(Theme.light);
  };

  const onSwitchTheme = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;

    setIsDark(checked);

    if (checked) {
      setBodyDarkTheme();
      themeStorage.setTheme(Theme.dark);
    } else {
      setBodyLightTheme();
      themeStorage.setTheme(Theme.light);
    }
  }, []);

  useEffect(() => {
    const theme = themeStorage.getTheme();

    switch (theme) {
      case Theme.light:
        setIsDark(false);
        setBodyLightTheme();
        break;
      default:
        setIsDark(true);
        setBodyDarkTheme();
    }
  }, []);

  return { isDark, onSwitchTheme };
};

export { useSwitchTheme };
