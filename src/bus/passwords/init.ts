import { sample } from 'effector';

import { $options } from '../options';
import { $passwords, generatePasswords } from '.';

import { PasswordGenerator } from '../../utils/password-generator';

sample({
  clock: generatePasswords,
  source: $options,
  fn: (options) => new PasswordGenerator(options).generateMultiple(),
  target: $passwords,
});
