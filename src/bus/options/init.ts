import { sample } from 'effector';

import {
  $options,
  setLength,
  setIsUppercase,
  setIsLowercase,
  setIsNumber,
  setIsSymbol,
} from '.';

$options.on(setIsUppercase, (options, isUppercase) => ({ ...options, isUppercase }));
$options.on(setIsLowercase, (options, isLowercase) => ({ ...options, isLowercase }));
$options.on(setIsNumber, (options, isNumber) => ({ ...options, isNumber }));
$options.on(setIsSymbol, (options, isSymbol) => ({ ...options, isSymbol }));

sample({
  clock: setLength,
  source: $options,
  filter: (options) => options.length <= 100,
  fn: (options, length) => ({ ...options, length }),
  target: $options,
});
