import { sample } from 'effector';

import { $complexity, setComplexity } from '.';
import { $options } from '../options';

import { Options } from '../../types/options';

const presets: Options[] = [
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

$complexity.on(setComplexity, (_, complexity) => complexity);

sample({
  clock: setComplexity,
  fn: (complexity) => presets[complexity - 1],
  target: $options,
});
