// Core
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

// Components
import { Input } from '../../src/ui';

describe('Component Input', () => {
  let container: Element;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  it('should be the input value "Input 1"', () => {
    const INPUT_VALUE = 'Input 1';

    act(() => {
      render(<Input value={INPUT_VALUE} readOnly />, container);
    });

    const input = container.querySelector('input')

    expect(input?.value).toBe(INPUT_VALUE);
  });
});