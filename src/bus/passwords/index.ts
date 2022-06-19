import { createDomain } from 'effector';

const domain = createDomain('passwords');

export const $passwords = domain.createStore<string[]>(['qweqwe', 'qweqweq']);

export const generatePasswords = domain.createEvent();
