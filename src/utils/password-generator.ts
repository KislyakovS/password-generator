import { randomNumber } from './random-number';

import { Options } from '../types/options';
import { Password } from '../types/password';

type StrictRuleType = {
  name: keyof Options;
  regex: RegExp;
};

const defaultOptions: Options = Object.freeze({
  length: 12,
  isNumber: true,
  isSymbol: true,
  isUppercase: false,
  isLowercase: true,
  isStrict: false,
});

const combinations = Object.freeze({
  numbers: '0123456789',
  symbols: '!@#$%^&*()+_-=}{[]|:;"/?.><,`~',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
});

const strictRules: StrictRuleType[] = [
  { name: 'isNumber', regex: /[0-9]/ },
  { name: 'isSymbol', regex: /[!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~]/ },
  { name: 'isUppercase', regex: /[A-Z]/ },
  { name: 'isLowercase', regex: /[a-z]/ },
];

class PasswordGenerator {
  private options: Options;

  constructor(options: Options = defaultOptions) {
    this.options = options;
  }

  private getPool() {
    const {
      isNumber, isSymbol, isUppercase, isLowercase,
    } = this.options;
    let pool = '';

    if (isNumber) {
      pool += combinations.numbers;
    }

    if (isSymbol) {
      pool += combinations.symbols;
    }

    if (isUppercase) {
      pool += combinations.uppercase;
    }

    if (isLowercase) {
      pool += combinations.lowercase;
    }

    if (!pool) {
      throw new Error(
        'there are no configuration fields, use the method "setup"',
      );
    }

    return pool;
  }

  private checkingStrict(password: Password): boolean {
    const isStrict = strictRules.every((rule) => {
      const { name, regex } = rule;

      if (!this.options[name]) {
        return true;
      }

      return regex.test(password);
    });

    return isStrict;
  }

  public setup(options: Partial<Options>) {
    this.options = {
      ...this.options,
      ...options,
    };
  }

  public generate(): Password {
    const { length, isStrict } = this.options;

    if (!length) {
      throw new Error(`password length cannot be ${length}`);
    }

    const pool = this.getPool();

    let password = '';
    for (let _ = 0; _ < length; _++) {
      password += pool[randomNumber(0, pool.length - 1)];
    }

    if (isStrict && !this.checkingStrict(password)) {
      return this.generate();
    }

    return password;
  }

  public generateMultiple(count = 5): Password[] {
    const passwords: string[] = [];

    for (let _ = 0; _ < count; _++) {
      passwords.push(this.generate());
    }

    return passwords;
  }
}

export { defaultOptions, PasswordGenerator };
