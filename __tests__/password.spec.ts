import { Password } from '../src/utils/password';

describe('When using the password generator, it:', () => {
  let password = new Password();

  beforeEach(() => {
    password = new Password();
  });

  it('should generate a password of default length 12', () => {
    expect(password.generate().length).toBe(12);
  });

  it('should set a password length of 20', () => {
    const LENGTH_PASSWORD = 20;

    password.setup({ length: LENGTH_PASSWORD });

    expect(password.generate().length).toBe(LENGTH_PASSWORD);
  });

  it('should throw an error', () => {
    const LENGTH_PASSWORD = 0;

    password.setup({ length: LENGTH_PASSWORD });

    expect(password.generate).toThrowError();
  });

  it('should password must be generated from numbers only', () => {
    password.setup({ isNumber: true, isSymbol: false, isUppercase: false, isLowercase: false });

    expect(password.generate()).toEqual(expect.stringMatching(/[0-9]+/));[[]]
  })

  it('should password must be generated from symbol only', () => {
    password.setup({ isNumber: false, isSymbol: true, isUppercase: false, isLowercase: false });

    expect(password.generate()).toEqual(expect.stringMatching(/[!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~]+/));
  })

  it('should password must be generated from uppercase only', () => {
    password.setup({ isNumber: false, isSymbol: false, isUppercase: true, isLowercase: false });

    expect(password.generate()).toEqual(expect.stringMatching(/[A-Z]+/));
  })

  it('should password must be generated from lowercase only', () => {
    password.setup({ isNumber: false, isSymbol: false, isUppercase: false, isLowercase: true });

    expect(password.generate()).toEqual(expect.stringMatching(/[a-z]+/));
  })
});
