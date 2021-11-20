// Core
import { useState, useCallback } from 'react';

// Instruments
import { Password as PasswordGenerator, OptionsType } from '../../../utils/password';

const passwordGenerator = new PasswordGenerator();

// Types
export type SetupType = (options: OptionsType) => void;
export type GenerateType = () => void;

type UsePasswordType = {
  password: string,
  setup: SetupType,
  generate: GenerateType,
}

const usePassword = (): UsePasswordType => {
  const [password, setPassword] = useState<string>('');

  const setup = useCallback((options: OptionsType) => {
    passwordGenerator.setup(options);
  }, []);

  const generate = useCallback(() => {
    setPassword(passwordGenerator.generate());
  }, []);

  return { password, setup, generate }
}

export { usePassword };