// Core
import React from 'react';
import { render } from '@testing-library/react';

// Components
import { Button } from '../../src/ui';

describe('Component Button', () => {
  it('should be text in the button "Button 1"', () => {
    const CHILDREN_TEXT = 'Button 1';
    const { getByText } = render(<Button>{CHILDREN_TEXT}</Button>);
    const element = getByText(CHILDREN_TEXT);

    expect(element).toBeInTheDocument();
  });
});
