import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from './index';

export default {
  title: 'UI/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

// eslint-disable-next-line max-len
export const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;
