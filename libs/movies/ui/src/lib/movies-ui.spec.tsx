import React from 'react';
import { render } from '@testing-library/react';

import MoviesUi from './movies-ui';

describe('MoviesUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoviesUi />);
    expect(baseElement).toBeTruthy();
  });
});
