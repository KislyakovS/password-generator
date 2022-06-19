import { clsx } from '../../src/utils';

describe('Clsx', () => {
  it('handles strings and undefined values', () => {
    const classes = clsx('a', null, 'b', undefined, 'c', true);

    expect(classes).toBe('a b c');
  });

  it('handles arrays with undefined values', () => {
    const classes = clsx(['a', null, ['b', undefined, 'c']]);

    expect(classes).toBe('a b c');
  });

  it('handles object', () => {
    const classes = clsx({
      a: true, b: true, c: true, d: false,
    });

    expect(classes).toBe('a b c');
  });

  it('handles deep array recursion', () => {
    const classes = clsx(['a', ['b', ['c', { d: true }]]]);

    expect(classes).toBe('a b c d');
  });
});
