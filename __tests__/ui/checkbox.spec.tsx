import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Checkbox } from '../../src/ui';

describe('Component Checkbox', () => {
  it('should the label be "Checkbox 1"', () => {
    const LABEL_TEXT = 'Checkbox 1';

    const { getByText } = render(<Checkbox>{LABEL_TEXT}</Checkbox>);
    const element = getByText(LABEL_TEXT);

    expect(element).toHaveTextContent(LABEL_TEXT);
  });

  it('should call for a change on the checkbox', () => {
    const { getByRole } = render(<Checkbox>Checkbox</Checkbox>);
    const element = getByRole('checkbox');

    fireEvent.change(element, { target: { checked: true } });

    expect(element).toBeChecked();
  });

  it('should the checkbox be checked', () => {
    const { getByRole } = render(<Checkbox readOnly checked>Checkbox</Checkbox>);
    const element = getByRole('checkbox');

    expect(element).toBeChecked();
  });
});
