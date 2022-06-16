abstract class Storage<K extends string, T> {
  private readonly storage = window.localStorage;

  protected get(key: K): T | null {
    const result = this.storage.getItem(key);

    if (result) {
      return JSON.parse(result);
    }

    return null;
  }

  protected set(key: K, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }
}

export { Storage };
