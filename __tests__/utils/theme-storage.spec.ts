import { Theme, ThemeStorage } from '../../src/utils';

describe('ThemeStorage', () => {
  let themeStorage = new ThemeStorage();

  beforeEach(() => {
    themeStorage = new ThemeStorage();

    global.Storage.prototype.setItem = jest.fn();
    global.Storage.prototype.getItem = jest.fn();
  });

  it('should call the write method in localStorage', () => {
    global.Storage.prototype.setItem = jest.fn();

    themeStorage.setTheme(Theme.dark);
    expect(global.Storage.prototype.setItem).toHaveBeenCalled();
  });

  it('should call the read method from localStorage', () => {
    global.Storage.prototype.getItem = jest.fn();

    themeStorage.getTheme();
    expect(global.Storage.prototype.getItem).toHaveBeenCalled();
  });
});
