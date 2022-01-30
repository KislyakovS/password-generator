// Core
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

// Components
import { Button } from '../../src/ui';

describe('Component Button', () => {
  it('should be text in the button "Button 1"', () => {
    const CHILDREN_TEXT = 'Button 1';

    const { getByRole } = render(<Button>{CHILDREN_TEXT}</Button>);
    const button = getByRole('button');

    expect(button).toHaveTextContent(CHILDREN_TEXT);
  });

  it('should call for a click on the button', () => {
    const onClick = jest.fn();

    const { getByRole } = render(<Button onClick={onClick}>Button</Button>);
    const button = getByRole('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  })
});

