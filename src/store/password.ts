// Core
import { makeAutoObservable } from 'mobx';

// Values
import { defaultOptions } from '../utils/password-generator';

enum Strength {
  bad = 1,
  low,
  medium,
  high
}

class Password {
  strength: Strength = Strength.medium;
  customize = { ...defaultOptions };

  constructor() {
    makeAutoObservable(this)
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

  setStrength(value: Strength) {
    this.strength = value;
  }
}

const password = new Password();

export { password };