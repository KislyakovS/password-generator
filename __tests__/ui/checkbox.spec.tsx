// Core
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

// Components
import { Checkbox } from '../../src/ui';

describe('Component Checkbox', () => {
  it('should the label be "Checkbox 1"', () => {
    const LABEL_TEXT = 'Checkbox 1';

    const { getByText } = render(<Checkbox>{LABEL_TEXT}</Checkbox>);
    const element = getByText(LABEL_TEXT);

    expect(element).toHaveTextContent(LABEL_TEXT);
  });

  it('should call for a change on the checkbox', () => {
    const onChange = jest.fn();

    const { getByRole } = render(<Checkbox onChange={onChange}>Checkbox</Checkbox>);
    const element = getByRole('checkbox');

    fireEvent.click(element);

    expect(onChange).toHaveBeenCalled();
  });

  it('should the checkbox be checked', () => {
    const { getByRole } = render(<Checkbox readOnly checked>Checkbox</Checkbox>);
    const element = getByRole('checkbox');

    expect(element).toBeChecked();
  });
});