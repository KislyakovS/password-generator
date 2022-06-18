import { Storage } from './storage';

enum Theme {
  dark = 'dark',
  light = 'light',
}

class ThemeStorage extends Storage<'theme', Theme> {
  getTheme() {
    return this.get('theme');
  }

  setTheme(value: Theme) {
    this.set('theme', value);
  }
}

export { Theme, ThemeStorage };
