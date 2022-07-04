import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from './index';

export default {
  title: 'UI/Checkbox',
  component: Checkbox,
  args: {
    checked: false,
  },
} as ComponentMeta<typeof Checkbox>;

// eslint-disable-next-line max-len
export const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args}>Checkbox</Checkbox>;
