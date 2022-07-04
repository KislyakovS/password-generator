import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switcher } from './index';

export default {
  title: 'UI/Switcher',
  component: Switcher,
} as ComponentMeta<typeof Switcher>;

// eslint-disable-next-line max-len
export const Template: ComponentStory<typeof Switcher> = (args) => <Switcher {...args}>Switcher</Switcher>;
