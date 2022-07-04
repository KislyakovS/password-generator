import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './index';

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line max-len
export const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;
