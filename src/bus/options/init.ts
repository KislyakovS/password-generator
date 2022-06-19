import {
  $options,
  setLength,
  setIsUppercase,
  setIsLowercase,
  setIsNumber,
  setIsSymbol,
} from '.';

$options.on(setLength, (options, length) => ({ ...options, length }));
$options.on(setIsUppercase, (options, isUppercase) => ({ ...options, isUppercase }));
$options.on(setIsLowercase, (options, isLowercase) => ({ ...options, isLowercase }));
$options.on(setIsNumber, (options, isNumber) => ({ ...options, isNumber }));
$options.on(setIsSymbol, (options, isSymbol) => ({ ...options, isSymbol }));
