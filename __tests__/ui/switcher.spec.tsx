// Core
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

// Components
import { Switcher } from '../../src/ui';

describe('Component Switcher', () => {
  it('should call for a change on the checkbox', () => {
    const { getByRole } = render(<Switcher />);
    const element = getByRole('checkbox');

    fireEvent.change(element, { target: { checked: true } });

    expect(element).toBeChecked();
  });

  it('should the checkbox be checked', () => {
    const { getByRole } = render(<Switcher readOnly checked />);
    const element = getByRole('checkbox');

    expect(element).toBeChecked();
  });
});