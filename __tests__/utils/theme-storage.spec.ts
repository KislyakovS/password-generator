import { Theme, ThemeStorage } from '../../src/utils';

describe('ThemeStorage', () => {
  let sut: ThemeStorage;

  const mockStorageSetItem = jest.fn();
  const mockStorageGetItem = jest.fn();

  beforeEach(() => {
    sut = new ThemeStorage();

    global.Storage.prototype.setItem = mockStorageSetItem;
    global.Storage.prototype.getItem = mockStorageGetItem;
  });

  it('should call the write method in localStorage', () => {
    sut.setTheme(Theme.dark);

    expect(mockStorageSetItem).toHaveBeenCalled();
  });

  it('should call the read method from localStorage', () => {
    sut.getTheme();

    expect(mockStorageGetItem).toHaveBeenCalled();
  });
});
