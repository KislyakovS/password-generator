// Core
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

// Components
import { Checkbox } from '../../src/ui';

describe('Component Checkbox', () => {
  let container: Element;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  it('should be text in the label "Checkbox 1"', () => {
    const CHILDREN_TEXT = 'Checkbox 1';

    act(() => {
      render(<Checkbox>{CHILDREN_TEXT}</Checkbox>, container);
    });

    expect(container.textContent).toBe(CHILDREN_TEXT);
  });

  it('should checkbox change triggered', () => {
    const onChange = jest.fn();

    act(() => {
      render(<Checkbox onChange={onChange}>Checkbox 1</Checkbox>, container)
    });

    const checkbox = container.querySelector('[type="checkbox"]');

    act(() => {
      checkbox?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should checkbox has checked', () => {
    act(() => {
      render(<Checkbox checked readOnly>Checkbox 1</Checkbox>, container)
    });

    const checkbox = container.querySelector('[type="checkbox"]') as HTMLInputElement;

    expect(checkbox?.checked).toBe(true);
  });
});