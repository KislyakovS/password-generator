import { createDomain } from 'effector';

enum Complexity {
    bad = 1,
    low,
    medium,
    high
}

const domain = createDomain('complexity');

export const $complexity = domain.createStore<Complexity>(Complexity.medium);

export const setComplexity = domain.createEvent<Complexity>();
