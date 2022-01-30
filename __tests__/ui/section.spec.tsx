// Core
import React from 'react';
import { render } from '@testing-library/react';

// Components
import { Section } from '../../src/ui';

describe('Component Section', () => {
  it('should render component section', () => {
    const TITLE = 'Title';
    const DESCRIPTION = 'Description';

    const { getByRole, getByText } = render(<Section title={TITLE} description={DESCRIPTION}>1</Section>);
    const title = getByRole('heading');
    const description = getByText(DESCRIPTION);

    expect(title).toHaveTextContent(TITLE);
    expect(description).toBeInTheDocument();
  });
});

