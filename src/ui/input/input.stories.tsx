import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './index';

export default {
  title: 'UI/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

// eslint-disable-next-line max-len
export const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
