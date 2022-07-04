import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Fieldset } from './index';

export default {
  title: 'UI/Fieldset',
  component: Fieldset,
  args: {
    legend: 'Legend',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
} as ComponentMeta<typeof Fieldset>;

// eslint-disable-next-line max-len
export const Template: ComponentStory<typeof Fieldset> = (args) => <Fieldset {...args}>Fieldset!</Fieldset>;
