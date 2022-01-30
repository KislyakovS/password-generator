// Core
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

// Components
import { Button } from '../../src/ui';

describe('Component Button', () => {
  let container: Element;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  it('should be text in the button "Button 1"', () => {
    const CHILDREN_TEXT = 'Button 1';

    act(() => {
      render(<Button>{CHILDREN_TEXT}</Button>, container);
    });

    expect(container.textContent).toBe(CHILDREN_TEXT);
  });

  it('should button click triggered', () => {
    const onClick = jest.fn();

    act(() => {
      render(<Button onClick={onClick}>onClick</Button>, container);
    });

    const button = container.querySelector('button');

    act(() => {
      for (let i = 0; i < 5; i++) {
        button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      }
    });

    expect(onClick).toHaveBeenCalledTimes(5);
  });
});