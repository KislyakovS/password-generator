// Core
import { createDomain } from 'effector';

import { OptionsType, defaultOptions } from '../../utils/password-generator';

enum Complexity {
    bad = 1,
    low,
    medium,
    high
}

const domain = createDomain('options');

export const $options = domain.createStore<OptionsType>(defaultOptions);
export const $complexity = domain.createStore<Complexity>(Complexity.medium);

export const setLength = domain.createEvent<number>();
export const setIsUppercase = domain.createEvent<boolean>();
export const setIsLowercase = domain.createEvent<boolean>();
export const setIsNumber = domain.createEvent<boolean>();
export const setIsSymbol = domain.createEvent<boolean>();
export const setComplexity = domain.createEvent<Complexity>();
