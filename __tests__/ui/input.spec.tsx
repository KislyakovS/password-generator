// Core
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

// Components
import { Input } from '../../src/ui';

describe('Component Input', () => {
  it('should input have value "Value 1"', () => {
    const INPUT_VALUE = 'Value 1';

    const { getByRole } = render(<Input label="" value={INPUT_VALUE} readOnly />);
    const element = getByRole('textbox');

    expect(element).toHaveValue(INPUT_VALUE);
  });

  it('the change event set the value "Input"', () => {
    const onChange = jest.fn();
    const INPUT_VALUE = 'Input';

    const { getByRole } = render(<Input label="" onChange={onChange} />);
    const element = getByRole('textbox');

    fireEvent.change(element, { target: { value: INPUT_VALUE } });

    expect(element).toHaveValue(INPUT_VALUE);
    expect(onChange).toHaveBeenCalled();
  });

  it('should label have value "label 1"', () => {
    const LABEL_TEXT = 'label 1';

    const { getByText } = render(<Input label={LABEL_TEXT} readOnly />);
    const label = getByText(LABEL_TEXT);

    expect(label.textContent).toBe(LABEL_TEXT);
  });
});
