import { Storage } from './storage';

enum Theme {
  dark = 'dark',
  light = 'light',
}

const KEY_THEME_STORAGE = 'theme';

class ThemeStorage extends Storage<typeof KEY_THEME_STORAGE, Theme> {
  getTheme() {
    return this.get(KEY_THEME_STORAGE);
  }

  setTheme(value: Theme) {
    this.set(KEY_THEME_STORAGE, value);
  }
}

export { Theme, ThemeStorage };
