import { createDomain } from 'effector';

import { defaultOptions } from '../../utils';

import { OptionsType } from '../../@types/options';

const domain = createDomain('options');

export const $options = domain.createStore<OptionsType>(defaultOptions);

export const setLength = domain.createEvent<number>();
export const setIsUppercase = domain.createEvent<boolean>();
export const setIsLowercase = domain.createEvent<boolean>();
export const setIsNumber = domain.createEvent<boolean>();
export const setIsSymbol = domain.createEvent<boolean>();
