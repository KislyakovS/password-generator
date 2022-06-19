import { sample } from 'effector';

import {
  $options,
  $complexity,
  setLength,
  setIsUppercase,
  setIsLowercase,
  setIsNumber,
  setIsSymbol,
  setComplexity,
} from '.';

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

$options.on(setLength, (options, length) => ({ ...options, length }));
$options.on(setIsUppercase, (options, isUppercase) => ({ ...options, isUppercase }));
$options.on(setIsLowercase, (options, isLowercase) => ({ ...options, isLowercase }));
$options.on(setIsNumber, (options, isNumber) => ({ ...options, isNumber }));
$options.on(setIsSymbol, (options, isSymbol) => ({ ...options, isSymbol }));
$complexity.on(setComplexity, (_, complexity) => complexity);

sample({
  clock: setComplexity,
  fn: (complexity) => presets[complexity - 1],
  target: $options,
});
