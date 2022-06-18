// Core
import { makeAutoObservable } from 'mobx';
import { defaultOptions, PasswordGenerator } from '../utils';

enum Complexity {
  bad = 1,
  low,
  medium,
  high
}

const presets = [
  {
    length: 6,
    isUppercase: true,
    isLowercase: true,
    isSymbol: false,
    isNumber: false,
    isStrict: false,
  },
  {
    length: 8,
    isUppercase: true,
    isLowercase: true,
    isSymbol: false,
    isNumber: false,
    isStrict: false,
  },
  {
    length: 12,
    isUppercase: false,
    isLowercase: true,
    isSymbol: true,
    isNumber: true,
    isStrict: true,
  },
  {
    length: 16,
    isUppercase: true,
    isLowercase: true,
    isSymbol: true,
    isNumber: true,
    isStrict: true,
  },
];

const passwordGenerator = new PasswordGenerator();

class Password {
  complexity: Complexity = Complexity.medium;

  customize = { ...defaultOptions };

  passwords: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setLength(length: number) {
    if (length <= 100) {
      this.customize.length = length;
    } else {
      this.customize.length = 100;
    }
  }

  setIsUppercase(value: boolean) {
    this.customize.isUppercase = value;
  }

  setIsLowercase(value: boolean) {
    this.customize.isLowercase = value;
  }

  setIsNumber(value: boolean) {
    this.customize.isNumber = value;
  }

  setIsSymbol(value: boolean) {
    this.customize.isSymbol = value;
  }

  setComplexity(value: Complexity) {
    this.customize = { ...presets[value - 1] };
    this.complexity = value;
  }

  generate() {
    passwordGenerator.setup(this.customize);
    this.passwords = passwordGenerator.generateMultiple();
  }
}

const password = new Password();

export { password };
