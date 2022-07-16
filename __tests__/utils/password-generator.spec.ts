import { PasswordGenerator } from '../../src/utils';

describe('PasswordGenerator', () => {
  let sut: PasswordGenerator;

  beforeEach(() => {
    sut = new PasswordGenerator();
  });

  describe('setup', () => {
    it('should generate a password of default length 12', () => {
      const result = sut.generate();

      expect(result).toHaveLength(12);
    });

    it('should set a password length of 20', () => {
      const LENGTH_PASSWORD = 20;
      sut.setup({ length: LENGTH_PASSWORD });

      const result = sut.generate();

      expect(result).toHaveLength(LENGTH_PASSWORD);
    });

    it('should give an error when transmitting zero length', () => {
      const LENGTH_PASSWORD = 0;
      sut.setup({ length: LENGTH_PASSWORD });

      expect(sut.generate).toThrowError();
    });

    it('should give an error if there are no options', () => {
      sut.setup({
        isNumber: false, isSymbol: false, isUppercase: false, isLowercase: false,
      });

      expect(sut.generate).toThrowError();
    });

    it('should password must be generated from numbers only', () => {
      sut.setup({
        isNumber: true, isSymbol: false, isUppercase: false, isLowercase: false,
      });

      const result = sut.generate();

      expect(result).toMatch(/[0-9]{12}/);
    });

    it('should password must be generated from symbol only', () => {
      sut.setup({
        isNumber: false, isSymbol: true, isUppercase: false, isLowercase: false,
      });

      const result = sut.generate();

      expect(result).toMatch(/[!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~]{12}/);
    });

    it('should password must be generated from uppercase only', () => {
      sut.setup({
        isNumber: false, isSymbol: false, isUppercase: true, isLowercase: false,
      });

      const result = sut.generate();

      expect(result).toMatch(/[A-Z]{12}/);
    });

    it('should password must be generated from lowercase only', () => {
      sut.setup({
        isNumber: false, isSymbol: false, isUppercase: false, isLowercase: true,
      });

      const result = sut.generate();

      expect(result).toMatch(/[a-z]{12}/);
    });

    it('matches even if received contains additional elements', () => {
      sut.setup({
        isNumber: true, isSymbol: true, isUppercase: true, isLowercase: true, isStrict: true,
      });

      const result = sut.generate();

      expect(result).toMatch(/[0-9]/);
      expect(result).toMatch(/[!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~]/);
      expect(result).toMatch(/[A-Z]/);
      expect(result).toMatch(/[a-z]/);
    });
  });

  describe('generateMultiple', () => {
    it('should 6 passwords be generated', () => {
      const COUNT_PASSWORD = 6;

      const results = sut.generateMultiple(COUNT_PASSWORD);

      expect(results).toHaveLength(COUNT_PASSWORD);
    });
  });
});
