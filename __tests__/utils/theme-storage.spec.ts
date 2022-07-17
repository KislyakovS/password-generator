import { Theme, ThemeStorage } from '../../src/utils';

describe('ThemeStorage', () => {
  const KEY_THEME_STORAGE = 'theme';
  let sut: ThemeStorage;

  const mockStorageSetItem = jest.fn();
  const mockStorageGetItem = jest.fn();

  beforeEach(() => {
    sut = new ThemeStorage();

    global.Storage.prototype.setItem = mockStorageSetItem;
    global.Storage.prototype.getItem = mockStorageGetItem;
  });

  it('add a dark theme to localStorage', () => {
    sut.setTheme(Theme.dark);

    expect(mockStorageSetItem).toHaveBeenCalledWith(KEY_THEME_STORAGE, JSON.stringify(Theme.dark));
  });

  it('get from localStorage theme', () => {
    sut.getTheme();

    expect(mockStorageGetItem).toHaveBeenCalledWith(KEY_THEME_STORAGE);
  });
});
