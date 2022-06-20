import React from 'react';
import { render } from '@testing-library/react';

import { Logo } from '../../src/ui';

describe('Component Logo', () => {
  it('should render component logo', () => {
    const TITLE = 'Password Online';
    const DESCRIPTION = 'Simple password generator';

    const { getByText } = render(<Logo />);
    const title = getByText(TITLE);
    const description = getByText(DESCRIPTION);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
