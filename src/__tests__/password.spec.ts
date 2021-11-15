import { Password } from '../utils/password';

describe('When using the password generator, it:', () => {
  let password = new Password();

  beforeEach(() => {
    password = new Password();
  });

  it('should generate a password of default length 12', () => {
    expect(password.generate()?.length).toBe(12);
  });

  it('should set a password length of 20', () => {
    const LENGTH_PASSWORD = 20;

    password.setup({ length: LENGTH_PASSWORD });

    expect(password.generate()?.length).toBe(LENGTH_PASSWORD);
  });
});
