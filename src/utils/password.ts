import { randomNumber } from './random-number';

type OptionsType = {
  length?: number,
  isNumber?: boolean,
  isSymbol?: boolean,
  isUppercase?: boolean,
  isLowercase?: boolean,
};

const defaultOptions = Object.freeze({
  length: 12,
  isNumber: true,
  isSymbol: true,
  isUppercase: false,
  isLowercase: true,
});

const combinations = Object.freeze({
  numbers: '0123456789',
  symbols: '!@#$%^&*()+_-=}{[]|:;"/?.><,`~',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
});

class Password {
  private options: OptionsType;

  constructor(options: OptionsType = defaultOptions) {
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

    return pool;
  }

  public setup(options: OptionsType) {
    this.options = {
      ...this.options,
      ...options,
    };
  }

  public generate() {
    if (!this.options.length) {
      return null;
    }

    const { length } = this.options;

    let password = '';

    const pool = this.getPool();

    for (let i = 0; i < length; i++) {
      password += pool[randomNumber(0, pool.length)];
    }

    return password;
  }
}

export { Password };
