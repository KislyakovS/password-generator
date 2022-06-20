import { createDomain } from 'effector';

import { Password } from '../../@types/password';

const domain = createDomain('passwords');

export const $passwords = domain.createStore<Password[]>([]);

export const generatePasswords = domain.createEvent();
