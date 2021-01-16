import React from 'react';
import { render } from '@testing-library/react';

import MoviesFeatureMovieDetails from './movies-feature-movie-details';

describe('MoviesFeatureMovieDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoviesFeatureMovieDetails />);
    expect(baseElement).toBeTruthy();
  });
});
