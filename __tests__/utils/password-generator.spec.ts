import { PasswordGenerator } from '../../src/utils/password-generator';

describe('When using the password generator, it:', () => {
  let password = new PasswordGenerator();

  beforeEach(() => {
    password = new PasswordGenerator();
  });

  it('should generate a password of default length 12', () => {
    expect(password.generate().length).toBe(12);
  });

  it('should set a password length of 20', () => {
    const LENGTH_PASSWORD = 20;

    password.setup({ length: LENGTH_PASSWORD });

    expect(password.generate().length).toBe(LENGTH_PASSWORD);
  });

  it('should give an error when transmitting zero length', () => {
    const LENGTH_PASSWORD = 0;

    password.setup({ length: LENGTH_PASSWORD });

    expect(password.generate).toThrowError();
  });

  it('should give an error if there are no options', () => {
    password.setup({
      isNumber: false, isSymbol: false, isUppercase: false, isLowercase: false,
    });

    expect(password.generate).toThrowError();
  });

  it('should password must be generated from numbers only', () => {
    password.setup({
      isNumber: true, isSymbol: false, isUppercase: false, isLowercase: false,
    });

    expect(password.generate()).toEqual(expect.stringMatching(/[0-9]+/));
  });

  it('should password must be generated from symbol only', () => {
    password.setup({
      isNumber: false, isSymbol: true, isUppercase: false, isLowercase: false,
    });

    expect(password.generate()).toEqual(expect.stringMatching(/[!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~]+/));
  });

  it('should password must be generated from uppercase only', () => {
    password.setup({
      isNumber: false, isSymbol: false, isUppercase: true, isLowercase: false,
    });

    expect(password.generate()).toEqual(expect.stringMatching(/[A-Z]+/));
  });

  it('should password must be generated from lowercase only', () => {
    password.setup({
      isNumber: false, isSymbol: false, isUppercase: false, isLowercase: true,
    });

    expect(password.generate()).toEqual(expect.stringMatching(/[a-z]+/));
  });

  it('matches even if received contains additional elements', () => {
    password.setup({
      isNumber: true, isSymbol: true, isUppercase: true, isLowercase: true, isStrict: true,
    });

    const passwordStr = password.generate();

    expect(passwordStr).toMatch(/[0-9]/);
    expect(passwordStr).toMatch(/[!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~]/);
    expect(passwordStr).toMatch(/[A-Z]/);
    expect(passwordStr).toMatch(/[a-z]/);
  });

  it('should 6 passwords be generated', () => {
    const COUNT_PASSWORD = 6;

    const passwords = password.generateMultiple(COUNT_PASSWORD);

    expect(passwords).toHaveLength(COUNT_PASSWORD);
  })
});
