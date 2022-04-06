// Core
import React from 'react';
import { render } from '@testing-library/react';

// Components
import { Fieldset } from '../../src/ui';

describe('Component Fieldset', () => {
  it('should render component fieldset', () => {
    const LEGEND = 'Title';
    const DESCRIPTION = 'Description';

    const { getByText } = render(<Fieldset legend={LEGEND} description={DESCRIPTION}>1</Fieldset>);
    const title = getByText(LEGEND);
    const description = getByText(DESCRIPTION);

    expect(title).toHaveTextContent(LEGEND);
    expect(description).toBeInTheDocument();
  });
});
