import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Range } from './index';

export default {
  title: 'UI/Range',
  component: Range,
  args: {
    min: 1,
    max: 3,
    value: 2,
    step: 1,
  },
} as ComponentMeta<typeof Range>;

// eslint-disable-next-line max-len
export const Template: ComponentStory<typeof Range> = (args) => <Range {...args} />;

export const Marks = Template.bind({});
Marks.args = {
  marks: ['min', 'middle', 'max'],
};
